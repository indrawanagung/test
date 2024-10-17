package domain

type WeightUnit struct {
	ID       string `gorm:"primary_key;column:id"`
	UnitName string `gorm:"column:unit_name"`
}

func (p *WeightUnit) TableName() string {
	return "weight_units"
}
