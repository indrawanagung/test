package web

import "grabit/model/domain"

type ProductResponse struct {
	ID                string `gorm:"primary_key;column:id"`
	Name              string `gorm:"column:name"`
	ProductCategoryID string `gorm:"column:product_category_id"`
	StatusID          string `gorm:"column:status_id"`
	Price             int64  `gorm:"column:price"`
	domain.Timestamp
	Width  int
	Height int
	Length int
}
