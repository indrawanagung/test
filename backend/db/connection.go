package db

import (
	"github.com/gofiber/fiber/v2/log"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"grabit/util"
)

func OpenConnection() *gorm.DB {
	config, err := util.LoadConfig(".")
	if err != nil {
		log.Fatal(err)
	}
	db, err := gorm.Open(postgres.Open(config.DBSource), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatal(err)
	}
	return db
}
