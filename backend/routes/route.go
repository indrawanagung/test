package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"grabit/controllers"
	"grabit/exceptions"
)

func New(authController controllers.AuthControllerInterface, productController controllers.ProductControllerInterface) *fiber.App {
	app := fiber.New(fiber.Config{ErrorHandler: exceptions.ErrorHandler})
	app.Use(cors.New())
	app.Use(recover.New())
	api := app.Group("/api")
	v1 := api.Group("/v1")

	v1.Post("/auth/login", authController.Login)
	v1.Post("/auth/register", authController.Register)

	v1.Get("/products", productController.FindAll)
	v1.Get("/products/:id", productController.FindByID)

	// Error Handler

	return app
}
