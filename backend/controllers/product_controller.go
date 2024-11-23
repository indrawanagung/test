package controllers

import "github.com/gofiber/fiber/v2"

type ProductControllerInterface interface {
	FindAll(ctx *fiber.Ctx) error
	FindByID(ctx *fiber.Ctx) error
	AddProductCart(ctx *fiber.Ctx) error
	FindAllProductCart(ctx *fiber.Ctx) error
	DeleteProductCart(ctx *fiber.Ctx) error
	Checkout(ctx *fiber.Ctx) error
	FindAllPaymentType(ctx *fiber.Ctx) error
	FindAllOrder(ctx *fiber.Ctx) error

	//ADMIN
	AdminFindAllProduct(ctx *fiber.Ctx) error
	AdminCreateProduct(ctx *fiber.Ctx) error
}
