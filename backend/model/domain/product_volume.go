package domain

type ProductVolume struct {
	ID                string `gorm:"primary_key;column:id"`
	VariationOptionID string
	Width             int
	Height            int
	Length            int
	Weight            int
	WeightUnitID      string
	WeightUnit        WeightUnit `gorm:"foreignKey:weight_unit_id"`
	Timestamp
}

func (p *ProductVolume) TableName() string {
	return "product_volumes"
}
