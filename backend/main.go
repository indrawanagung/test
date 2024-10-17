package main

import (
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2/log"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"grabit/controllers"
	"grabit/db"
	"grabit/repository"
	"grabit/routes"
	"os"
)

func main() {

	validate := validator.New()

	database := db.OpenConnection()

	userRepository := repository.NewUserRepository()
	productRepository := repository.NewProductRepository()

	authController := controllers.NewAuthController(database, validate, userRepository)
	productController := controllers.NewProductController(database, validate, productRepository)

	app := routes.New(authController, productController)
	app.Static("/api/v1/images", "./public/images")

	app.Use(logger.New(logger.Config{
		Format:     "${cyan}[${time}] ${white}${pid} ${red}${status} ${blue}[${method}] ${white}${path}\n",
		TimeFormat: "02-Jan-2006",
		TimeZone:   "UTC",
	}))

	f, _ := os.OpenFile("test.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	log.SetOutput(f)
	log.Info("server running on port 5000")
	log.Fatal(app.Listen(":5000"))
}
