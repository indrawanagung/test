package repository

import (
	"github.com/gofiber/fiber/v2/log"
	"gorm.io/gorm"
	"grabit/model/domain"
)

type ProductRepositoryImpl struct {
}

func NewProductRepository() ProductRepositoryInterface {
	return &ProductRepositoryImpl{}
}

func (p ProductRepositoryImpl) FindAll(tx *gorm.DB) []domain.Product {
	var product []domain.Product
	err := tx.Joins("ProductCategory").Find(&product).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
	return product
}

func (p ProductRepositoryImpl) FindByID(tx *gorm.DB, id string) (domain.Product, error) {
	var product domain.Product
	err := tx.Preload("VariationOptions").
		Preload("VariationOptions.ProductStock").
		Preload("VariationOptions.ProductVolume.WeightUnit").
		Where("products.id = ?", id).
		First(&product).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
	return product, nil
}
