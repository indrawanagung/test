package domain

type Order struct {
	ID         string `gorm:"primary_key;column:id"`
	UserID     string `gorm:"column:user_id"`
	AddressID  string
	TotalPrice int64
	PaymentID  string
	StatusID   string
	Address    Address     `gorm:"foreignKey:address_id;references:id"`
	User       User        `gorm:"foreignKey:user_id"`
	Payment    Payment     `gorm:"foreignKey:payment_id"`
	OrderItem  []OrderItem `gorm:"foreignKey:order_id"`
	Status     Status      `gorm:"foreignKey:status_id"`
	Timestamp
}

func (o *Order) TableName() string {
	return "orders"
}
