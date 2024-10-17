package controllers

import (
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
	"grabit/exceptions"
	"grabit/model/web"
	"grabit/repository"
	"grabit/util"
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
