package domain

type ShoppingCartItem struct {
	ID                string `gorm:"primary_key;column:id"`
	VariationOptionID string `gorm:"column:variation_option_id"`
	Qty               int
	UserID            string          `gorm:"user_id"`
	User              User            `gorm:"foreignKey:user_id"`
	VariationOption   VariationOption `gorm:"foreignKey:variation_option_id"`
	Timestamp
}

func (p *ShoppingCartItem) TableName() string {
	return "shopping_cart_items"
}
