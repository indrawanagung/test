package controllers

import "github.com/gofiber/fiber/v2"

type ContentControllerInterface interface {
	FindAll(ctx *fiber.Ctx) error
}
