package domain

type Product struct {
	ID                string `gorm:"primary_key;column:id"`
	Name              string `gorm:"column:name"`
	ProductCategoryID string `gorm:"column:product_category_id"`
	StatusID          string `gorm:"column:status_id"`
	Price             int64  `gorm:"column:price"`
	Image             string
	ProductCategory   ProductCategory   `gorm:"foreignKey:product_category_id"`
	VariationOptions  []VariationOption `gorm:"foreignKey:product_id"`
	Timestamp
}

func (p *Product) TableName() string {
	return "products"
}
