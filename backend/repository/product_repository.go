package repository

import (
	"grabit/model/domain"

	"gorm.io/gorm"
)

type ProductRepositoryInterface interface {
	FindAll(tx *gorm.DB) []domain.Product
	FindByID(tx *gorm.DB, id string) (domain.Product, error)

	//cart
	AddProductCart(tx *gorm.DB, cart domain.ShoppingCartItem)
	FindProductCart(tx *gorm.DB, productID string, userID string) (domain.ShoppingCartItem, error)
	FindAllProductCart(tx *gorm.DB, userID string) []domain.ShoppingCartItem
	DeleteProductCart(tx *gorm.DB, userID string, cartID string)

	//checkout
	CreateOrder(tx *gorm.DB, order domain.Order)
	CreateOrderItem(tx *gorm.DB, item domain.OrderItem)
	CreatePayment(tx *gorm.DB, payment domain.Payment)

	//payment
	FindAllPaymentType(tx *gorm.DB) []domain.PaymentType

	//order
	FindAllOrder(tx *gorm.DB, userID string) []domain.Order

	//Admin
	AdminFindAllProduct(tx *gorm.DB) []domain.Product
	AdminCreateProduct(tx *gorm.DB, product domain.Product)
}
