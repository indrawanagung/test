package domain

type VariationOption struct {
	ID            string `gorm:"primary_key;column:id"`
	VariationID   string `gorm:"column:variation_id"`
	ProductID     string `gorm:"column:product_id"`
	OptionName    string
	Description   string
	Price         int64
	Product       Product       `gorm:"foreign_key:product_id;references:id"`
	ProductStock  ProductStock  `gorm:"foreign_key:variation_option_id"`
	ProductVolume ProductVolume `gorm:"foreign_key:variation_option_id"`
	Variation     Variation     `gorm:"foreign_key:variation_id"`
	Timestamp
}

func (p *VariationOption) TableName() string {
	return "variation_options"
}
