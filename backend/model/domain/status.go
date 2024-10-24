package domain

type Status struct {
	ID               string `gorm:"primary_key;column:id"`
	CategoryStatusID string
	Name             string
	CategoryStatus   CategoryStatus `gorm:"foreignKey:category_status_id"`
	Timestamp
}

func (s *Status) TableName() string {
	return "status"
}
