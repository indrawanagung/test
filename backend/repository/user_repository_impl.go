package repository

import (
	"errors"
	"fmt"
	"github.com/gofiber/fiber/v2/log"
	"gorm.io/gorm"
	"grabit/model/domain"
)

type UserRepositoryImpl struct {
}

func NewUserRepository() UserRepositoryInterface {
	return &UserRepositoryImpl{}
}

func (u UserRepositoryImpl) FindByEmail(tx *gorm.DB, email string) (error, domain.User) {
	var user domain.User
	err := tx.Take(&user, "email_address = ? ", email).Error
	if err != nil {
		if err.Error() != "record not found" {
			log.Error(err)
			panic(err)
		}
		return errors.New(fmt.Sprintf("user email %s is not found", email)), user
	}

	return nil, user
}

func (u UserRepositoryImpl) SaveOrUpdate(tx *gorm.DB, user domain.User) error {
	return tx.Save(user).Error
}
