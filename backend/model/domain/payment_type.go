package domain

type PaymentType struct {
	ID   string `gorm:"primary_key;column:id"`
	Name string `gorm:"column:name"`
}

func (p *PaymentType) TableName() string {
	return "payment_types"
}
