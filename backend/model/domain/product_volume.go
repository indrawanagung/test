package domain

type ProductVolume struct {
	ID        string `gorm:"primary_key;column:id"`
	ProductID string
	Width     int
	Height    int
	Length    int
	Timestamp
	Product Product `gorm:"foreignKey:product_id;references:id"`
}

func (p *ProductVolume) TableName() string {
	return "product_volumes"
}
