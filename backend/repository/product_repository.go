package repository

import (
	"gorm.io/gorm"
	"grabit/model/web"
)

type ProductRepositoryInterface interface {
	FindAll(tx *gorm.DB) []web.ProductResponse
	FindByID(tx *gorm.DB, id string) (web.ProductResponse, error)
}
