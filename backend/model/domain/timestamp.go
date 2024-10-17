package domain

import "gorm.io/gorm"

type Timestamp struct {
	CreatedAt string         `gorm:"column:created_at" json:"created_at"`
	UpdatedAt string         `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
}
