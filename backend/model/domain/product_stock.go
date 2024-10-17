package domain

type ProductStock struct {
	ID                string `gorm:"primary_key;column:id"`
	VariationOptionID string
	NotReserved       int
	Reserved          int
	Timestamp
}

func (p *ProductStock) TableName() string {
	return "product_stocks"
}
