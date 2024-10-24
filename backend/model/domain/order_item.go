package domain

type OrderItem struct {
	ID               string `gorm:"primary_key;column:id"`
	VariantProductID string
	OrderID          string
	Qty              int
	Price            int64
	VariationOption  VariationOption `gorm:"foreignKey:variant_product_id"`
}

func (o *OrderItem) TableName() string {
	return "order_items"
}
