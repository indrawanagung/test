package domain

type Variation struct {
	ID            string `gorm:"primary_key;column:id"`
	VariationName string
	Timestamp
}

func (p *Variation) TableName() string {
	return "variations"
}
