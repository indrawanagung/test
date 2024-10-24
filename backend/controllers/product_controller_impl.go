package controllers

import (
	"github.com/gofiber/fiber/v2/log"
	"grabit/exceptions"
	"grabit/model/domain"
	"grabit/model/web"
	"grabit/repository"
	"grabit/util"

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

func (c ProductControllerImpl) FindAll(ctx *fiber.Ctx) error {
	response := c.ProductRepository.FindAll(c.Database)
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
		StatusID:      "1",
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
		StatusID:   "1",
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
