package repository

import (
	"gorm.io/gorm"
	"grabit/model/domain"
)

type ProductRepositoryInterface interface {
	FindAll(tx *gorm.DB) []domain.Product
	FindByID(tx *gorm.DB, id string) (domain.Product, error)
}
