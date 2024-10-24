package domain

type Payment struct {
	ID            string      `gorm:"primary_key;column:id"`
	PaymentTypeID string      `gorm:"column:payment_type_id"`
	AccountNumber string      `gorm:"column:account_number"`
	ExpiryDate    string      `gorm:"column:expiry_date"`
	StatusID      string      `gorm:"column:status_id"`
	PaymentType   PaymentType `gorm:"foreignKey:payment_type_id"`
	Timestamp
}

func (p *Payment) TableName() string {
	return "payments"
}
