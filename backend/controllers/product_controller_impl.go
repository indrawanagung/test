package controllers

import (
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

type ProductControllerImpl struct {
	Database *gorm.DB
	Validate *validator.Validate
}

func NewProductController(Database *gorm.DB, Validate *validator.Validate) ProductControllerInterface {
	return &ProductControllerImpl{Database: Database, Validate: Validate}
}

func (p ProductControllerImpl) FindAll(ctx *fiber.Ctx) error {
	//TODO implement me
	panic("implement me")
}
