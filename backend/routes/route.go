package routes

import (
	"grabit/controllers"
	"grabit/exceptions"

	jwtware "github.com/gofiber/contrib/jwt"
	"github.com/spf13/viper"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

func New(authController controllers.AuthControllerInterface, productController controllers.ProductControllerInterface) *fiber.App {
	authentication := jwtware.New(jwtware.Config{
		SigningKey: jwtware.SigningKey{Key: []byte(viper.GetString("SECRET_KEY"))},
	})
	app := fiber.New(fiber.Config{ErrorHandler: exceptions.ErrorHandler})
	app.Use(cors.New())
	app.Use(recover.New())
	api := app.Group("/api")
	v1 := api.Group("/v1")

	v1.Post("/auth/login", authController.Login)
	v1.Post("/auth/register", authController.Register)

	v1.Get("/products", productController.FindAll)
	v1.Get("/products/:id", productController.FindByID)

	v1.Post("/carts", authentication, productController.AddProductCart)
	v1.Get("/carts", authentication, productController.FindAllProductCart)
	v1.Delete("/carts/:id", authentication, productController.DeleteProductCart)

	v1.Post("/checkout", authentication, productController.Checkout)

	v1.Get("/payment_types", authentication, productController.FindAllPaymentType)

	v1.Get("/orders", authentication, productController.FindAllOrder)

	// Administrator
	admin := v1.Group("/admin")
	admin.Get("/products", productController.AdminFindAllProduct)
	admin.Post("/products", productController.AdminCreateProduct)

	return app
}
