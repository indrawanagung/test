package repository

import (
	"grabit/model/domain"

	"github.com/gofiber/fiber/v2/log"
	"gorm.io/gorm"
)

type ProductRepositoryImpl struct {
}

func NewProductRepository() ProductRepositoryInterface {
	return &ProductRepositoryImpl{}
}

func (p ProductRepositoryImpl) FindAll(tx *gorm.DB) []domain.Product {
	var products []domain.Product
	err := tx.Preload("VariationOptions").
		Joins("ProductCategory").
		Preload("VariationOptions.ProductStock").
		Preload("VariationOptions.Variation").
		Preload("VariationOptions.ProductVolume.WeightUnit").
		Find(&products).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
	return products
}

func (p ProductRepositoryImpl) FindByID(tx *gorm.DB, id string) (domain.Product, error) {
	var product domain.Product
	err := tx.Preload("VariationOptions").
		Joins("ProductCategory").
		Preload("VariationOptions.ProductStock").
		Preload("VariationOptions.Variation").
		Preload("VariationOptions.ProductVolume.WeightUnit").
		Where("products.id = ?", id).
		First(&product).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
	return product, nil
}

func (p ProductRepositoryImpl) AddProductCart(tx *gorm.DB, cart domain.ShoppingCartItem) {
	err := tx.Save(&cart).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
}

func (p ProductRepositoryImpl) FindProductCart(tx *gorm.DB, productID string, userID string) (domain.ShoppingCartItem, error) {
	var productCart domain.ShoppingCartItem
	err := tx.Find(&productCart, "variation_option_id = ? and user_id = ?", productID, userID).Error
	if err != nil {
		if err.Error() == "record not found" {
			return productCart, err
		} else {
			log.Error()
			panic(err)
		}
	}
	return productCart, nil
}

func (p ProductRepositoryImpl) FindAllProductCart(tx *gorm.DB, userID string) []domain.ShoppingCartItem {
	var productCarts []domain.ShoppingCartItem
	err := tx.Joins("VariationOption").Joins("VariationOption.Product").Order("id desc").Find(&productCarts, "user_id = ?", userID).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
	return productCarts
}

func (p ProductRepositoryImpl) DeleteProductCart(tx *gorm.DB, userID string, cartID string) {
	err := tx.Delete(&domain.ShoppingCartItem{}, "user_id = ? and id = ?", userID, cartID).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
}

func (p ProductRepositoryImpl) CreateOrder(tx *gorm.DB, order domain.Order) {
	err := tx.Save(&order).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
}

func (p ProductRepositoryImpl) CreateOrderItem(tx *gorm.DB, item domain.OrderItem) {
	err := tx.Save(&item).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
}

func (p ProductRepositoryImpl) CreatePayment(tx *gorm.DB, payment domain.Payment) {
	err := tx.Save(&payment).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
}

func (p ProductRepositoryImpl) FindAllPaymentType(tx *gorm.DB) []domain.PaymentType {
	var paymentTypes []domain.PaymentType
	err := tx.Find(&paymentTypes).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
	return paymentTypes
}

func (p ProductRepositoryImpl) FindAllOrder(tx *gorm.DB, userID string) []domain.Order {
	var orders []domain.Order
	err := tx.Preload("OrderItem.VariationOption.Product.ProductCategory").
		Joins("Address.City").
		Joins("Payment.PaymentType").
		Joins("Status").
		Order("orders.created_at desc").
		Find(&orders, "orders.user_id = ?", userID).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
	return orders
}

func (p ProductRepositoryImpl) AdminFindAllProduct(tx *gorm.DB) []domain.Product {
	var products []domain.Product
	err := tx.Preload("VariationOptions").
		Joins("ProductCategory").
		Preload("VariationOptions.ProductStock").
		Preload("VariationOptions.Variation").
		Preload("VariationOptions.ProductVolume.WeightUnit").
		Find(&products).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
	return products
}

func (p ProductRepositoryImpl) AdminCreateProduct(tx *gorm.DB, product domain.Product) {
	err := tx.Save(&product).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
}
