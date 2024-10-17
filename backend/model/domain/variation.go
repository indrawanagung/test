package domain

type Variation struct {
	ID            string `gorm:"primary_key;column:id"`
	VariationName string `gorm:"column:variations"`
	Timestamp
}

func (p *Variation) TableName() string {
	return "variations"
}
