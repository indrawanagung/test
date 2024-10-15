package controllers

import (
	"fmt"
	"grabit/model/domain"
	"grabit/model/web"
	"grabit/util"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/log"
	"gorm.io/gorm"
)

type ContentControllerImpl struct {
	Database *gorm.DB
	Validate *validator.Validate
}

func NewContentController(Database *gorm.DB, Validate *validator.Validate) ContentControllerInterface {
	return &ContentControllerImpl{Database: Database, Validate: Validate}
}

func (c ContentControllerImpl) FindAll(ctx *fiber.Ctx) error {
	var contents []domain.Content
	err := c.Database.Find(&contents).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
	fmt.Println(contents)

	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   contents,
	}

	return ctx.Status(200).JSON(webResponse)
}
