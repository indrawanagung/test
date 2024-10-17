package domain

type ProductCategory struct {
	ID           string `gorm:"primary_key;column:id"`
	CategoryName string
}

func (p *ProductCategory) TableName() string {
	return "product_categories"
}
