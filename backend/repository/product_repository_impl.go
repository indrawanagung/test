package repository

import (
	"errors"
	"fmt"
	"github.com/gofiber/fiber/v2/log"
	"gorm.io/gorm"
	"grabit/model/web"
)

type ProductRepositoryImpl struct {
}

func NewProductRepository() ProductRepositoryInterface {
	return &ProductRepositoryImpl{}
}

func (p ProductRepositoryImpl) FindAll(tx *gorm.DB) []web.ProductResponse {
	var productResponses []web.ProductResponse
	err := tx.Table("products p").Select("p.id, p.name, p.product_category_id, pv.width, pv.length, pv.height").
		Joins("join product_volumes pv on pv.product_id = p.id").
		Scan(&productResponses).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}
	return productResponses
}

func (p ProductRepositoryImpl) FindByID(tx *gorm.DB, id string) (web.ProductResponse, error) {
	var productResponse web.ProductResponse
	err := tx.Table("products p").Select("p.id, p.name, p.product_category_id, pv.width, pv.length, pv.height").
		Joins("join product_volumes pv on pv.product_id = p.id").
		Where("p.id = ?", id).
		Scan(&productResponse).Error
	if err != nil {
		log.Error(err)
		panic(err)
	}

	if productResponse == (web.ProductResponse{}) {
		return productResponse, errors.New(fmt.Sprintf("product id %s is not found", id))
	}
	return productResponse, nil
}
