package domain

type CategoryStatus struct {
	ID   string `gorm:"primary_key;column:id"`
	Name string
	Timestamp
}

func (c *CategoryStatus) TableName() string {
	return "category_status"
}
