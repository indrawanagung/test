package controllers

import (
	"encoding/json"
	"errors"
	"fmt"
	"github.com/gofiber/fiber/v2/log"
	"grabit/exceptions"
	"grabit/model/domain"
	"grabit/model/web"
	"grabit/repository"
	"grabit/util"
	"path/filepath"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"gorm.io/gorm"
)

type ProductControllerImpl struct {
	Database          *gorm.DB
	Validate          *validator.Validate
	ProductRepository repository.ProductRepositoryInterface
}

func NewProductController(Database *gorm.DB, Validate *validator.Validate, ProductRepository repository.ProductRepositoryInterface) ProductControllerInterface {
	return &ProductControllerImpl{Database: Database, Validate: Validate, ProductRepository: ProductRepository}
}

func (c ProductControllerImpl) FindAllProductVariations(ctx *fiber.Ctx) error {
	name := ctx.Query("name", "")
	response := c.ProductRepository.FindAllProductVariation(c.Database, name)
	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   response,
	}
	return ctx.Status(200).JSON(webResponse)
}

func (c ProductControllerImpl) FindByID(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	response, err := c.ProductRepository.FindByID(c.Database, id)
	if err != nil {
		panic(exceptions.NewNotFoundError(err.Error()))
	}
	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   response,
	}
	return ctx.Status(200).JSON(webResponse)
}

func (c ProductControllerImpl) AddProductCart(ctx *fiber.Ctx) error {
	r := new(web.AddProductCartRequest)
	if err := ctx.BodyParser(r); err != nil {
		panic(exceptions.NewBadRequestError(err.Error()))
	}
	user := ctx.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userID := claims["id"].(string)

	var cart domain.ShoppingCartItem
	productCart, _ := c.ProductRepository.FindProductCart(c.Database, r.VariationOptionID, userID)
	if productCart.ID == "" {
		cart = domain.ShoppingCartItem{
			ID:                util.GenerateUUID(),
			VariationOptionID: r.VariationOptionID,
			Qty:               r.Qty,
			UserID:            userID,
			Timestamp: domain.Timestamp{
				CreatedAt: util.GetUnixTimestamp(),
				UpdatedAt: util.GetUnixTimestamp(),
			},
		}
	} else {
		cart = domain.ShoppingCartItem{
			ID:                productCart.ID,
			VariationOptionID: r.VariationOptionID,
			Qty:               r.Qty,
			UserID:            userID,
			Timestamp: domain.Timestamp{
				CreatedAt: util.GetUnixTimestamp(),
				UpdatedAt: util.GetUnixTimestamp(),
			},
		}
	}

	c.ProductRepository.AddProductCart(c.Database, cart)
	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   nil,
	}
	return ctx.Status(200).JSON(webResponse)
}

func (c ProductControllerImpl) FindAllProductCart(ctx *fiber.Ctx) error {
	user := ctx.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userID := claims["id"].(string)

	response := c.ProductRepository.FindAllProductCart(c.Database, userID)
	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   response,
	}
	return ctx.Status(200).JSON(webResponse)
}

func (c ProductControllerImpl) DeleteProductCart(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	user := ctx.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userID := claims["id"].(string)

	c.ProductRepository.DeleteProductCart(c.Database, userID, id)
	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   nil,
	}
	return ctx.Status(200).JSON(webResponse)
}

func (c ProductControllerImpl) Checkout(ctx *fiber.Ctx) error {
	tx := c.Database.Begin()
	defer tx.Rollback()

	req := new(web.CheckoutRequest)
	if err := ctx.BodyParser(req); err != nil {
		panic(exceptions.NewBadRequestError(err.Error()))
	}

	user := ctx.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userID := claims["id"].(string)
	cartProducts := c.ProductRepository.FindAllProductCart(tx, userID)

	var totalPrice int64 = 0

	for _, product := range cartProducts {
		totalPrice += int64(product.Qty) * product.VariationOption.Price
	}

	payment := domain.Payment{
		ID:            util.GenerateUUID(),
		PaymentTypeID: req.PaymentTYpeID,
		AccountNumber: util.GetUnixTimestamp(),
		ExpiryDate:    util.GetUnixTimestamp(),
		StatusID:      "5",
		Timestamp: domain.Timestamp{
			CreatedAt: util.GetUnixTimestamp(),
			UpdatedAt: util.GetUnixTimestamp(),
		},
	}
	c.ProductRepository.CreatePayment(tx, payment)

	order := domain.Order{
		ID:         util.GenerateUUID(),
		UserID:     userID,
		AddressID:  "1",
		TotalPrice: totalPrice,
		PaymentID:  payment.ID,
		StatusID:   "5",
		Timestamp: domain.Timestamp{
			CreatedAt: util.GetUnixTimestamp(),
			UpdatedAt: util.GetUnixTimestamp(),
		},
	}
	c.ProductRepository.CreateOrder(tx, order)

	for _, product := range cartProducts {
		orderItem := domain.OrderItem{
			ID:               util.GenerateUUID(),
			VariantProductID: product.VariationOptionID,
			OrderID:          order.ID,
			Qty:              product.Qty,
			Price:            product.VariationOption.Price,
		}
		c.ProductRepository.CreateOrderItem(tx, orderItem)
		c.ProductRepository.DeleteProductCart(tx, userID, product.ID)
	}

	err := tx.Commit().Error
	if err != nil {
		log.Error(err)
		panic(err)
	}

	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   nil,
	}
	return ctx.Status(200).JSON(webResponse)
}

func (c ProductControllerImpl) FindAllPaymentType(ctx *fiber.Ctx) error {
	response := c.ProductRepository.FindAllPaymentType(c.Database)
	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   response,
	}
	return ctx.Status(200).JSON(webResponse)
}

func (c ProductControllerImpl) FindAllOrder(ctx *fiber.Ctx) error {
	user := ctx.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userID := claims["id"].(string)
	response := c.ProductRepository.FindAllOrder(c.Database, userID)
	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   response,
	}
	return ctx.Status(200).JSON(webResponse)
}

func (c ProductControllerImpl) AdminFindAllProduct(ctx *fiber.Ctx) error {
	//user := ctx.Locals("user").(*jwt.Token)
	//claims := user.Claims.(jwt.MapClaims)
	//userID := claims["id"].(string)
	response := c.ProductRepository.AdminFindAllProduct(c.Database)
	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   response,
	}
	return ctx.Status(200).JSON(webResponse)
}

func (c ProductControllerImpl) AdminCreateProduct(ctx *fiber.Ctx) error {
	tx := c.Database.Begin()
	defer tx.Rollback()

	//jsonProductData := ctx.FormValue("productData")

	jsonProductData := `{
        "ProductName" : "edifier",
        "ProductCategoryID" : "2",
        "VariationOptions" : [
            {
                "OptionName" : "test",
                "VariationID" : "1",
                "Description" :"desc",
                "Width" : 100,
                "Height":100,
                "Length" : 100,
                "Stock" : 49,
                "Price" : 47000
            }
        ]
}`
	//if jsonProductData = "" {
	//	panic(exceptions.NewBadRequestError("product data is required"))
	//}

	// Initialize the Product struct
	var productCreateRequest web.CreateAdminProductRequest

	//var productUnmarshal Product

	// Unmarshal the JSON string into the Product struct
	if err := json.Unmarshal([]byte(jsonProductData), &productCreateRequest); err != nil {
		log.Error("error parse json product request")
		panic(exceptions.NewBadRequestError(err.Error()))
	}
	//fmt.Println(productCreateRequest)

	if err := c.Validate.Struct(&productCreateRequest); err != nil {
		log.Error(err)
		panic(exceptions.NewBadRequestError(err.Error()))
	}
	fmt.Println(productCreateRequest)

	// Parse the uploaded file with FormFile
	file, err := ctx.FormFile("image")
	if err != nil {
		panic(exceptions.NewBadRequestError("product image is not found"))
	}
	fmt.Println(jsonProductData)
	// Create a unique file name using timestamp to avoid overwriting files
	timestamp := time.Now().Unix()
	extension := filepath.Ext(file.Filename)
	fileName := fmt.Sprintf("image_%d%s", timestamp, extension)
	savePath := filepath.Join("./public/images", fileName)

	// Save the file to the "uploads" directory
	if err := ctx.SaveFile(file, savePath); err != nil {
		panic(errors.New("failed to save image file"))
	}

	productID := util.GenerateUUID()

	var variations []domain.VariationOption

	for _, variation := range productCreateRequest.VariationOptions {
		variationProductID := util.GenerateUUID()
		variationOption := domain.VariationOption{
			ID:          util.GenerateUUID(),
			VariationID: variation.VariationID,
			ProductID:   productID,
			OptionName:  variation.OptionName,
			Description: variation.Description,
			Price:       variation.Price,
			ProductStock: domain.ProductStock{
				ID:                util.GenerateUUID(),
				VariationOptionID: variationProductID,
				NotReserved:       variation.Stock,
				Reserved:          0,
				Timestamp: domain.Timestamp{
					CreatedAt: util.GetUnixTimestamp(),
				},
			},
			Timestamp: domain.Timestamp{
				CreatedAt: util.GetUnixTimestamp(),
			},
		}
		variations = append(variations, variationOption)
	}

	//create product
	c.ProductRepository.AdminCreateProduct(tx, domain.Product{
		ID:                productID,
		Name:              productCreateRequest.ProductName,
		ProductCategoryID: productCreateRequest.ProductCategoryID,
		StatusID:          "1",
		Image:             fileName,
		Timestamp: domain.Timestamp{
			CreatedAt: util.GetUnixTimestamp(),
		},
	})

	//add variation products
	c.ProductRepository.AdminCreateProduct(tx, domain.Product{
		ID:                productID,
		Name:              productCreateRequest.ProductName,
		ProductCategoryID: productCreateRequest.ProductCategoryID,
		StatusID:          "1",
		Image:             fileName,
		VariationOptions:  variations,
		Timestamp: domain.Timestamp{
			CreatedAt: util.GetUnixTimestamp(),
		},
	})
	err = tx.Commit().Error
	if err != nil {
		log.Error(err)
		panic(err)
	}

	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   nil,
	}
	return ctx.Status(200).JSON(webResponse)
}
