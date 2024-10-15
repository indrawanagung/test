package repository

import (
	"gorm.io/gorm"
	"grabit/model/domain"
)

type UserRepositoryInterface interface {
	FindByEmail(tx *gorm.DB, email string) (error, domain.User)
	SaveOrUpdate(tx *gorm.DB, user domain.User) error
}
