package repository

import (
	"fmt"
	"github.com/go-playground/assert/v2"
	"github.com/gofiber/fiber/v2/log"
	"gorm.io/gorm"
	"grabit/db"
	"grabit/model/web"
	"grabit/util"
	"testing"
)

func connectionDB() *gorm.DB {
	config, err := util.LoadConfig("../")
	if err != nil {
		log.Fatal(err)
	}
	conn := db.OpenConnection(config.DBSource)
	return conn
}

func TestProductRepositoryImpl_FindAll(t *testing.T) {
	productRepository := NewProductRepository()
	conn := connectionDB()
	result := productRepository.FindAll(conn)
	fmt.Println(result)
}

func TestProductRepositoryImpl_FindByID(t *testing.T) {
	productRepository := NewProductRepository()
	conn := connectionDB()
	result, err := productRepository.FindByID(conn, "1233")
	assert.NotEqual(t, err, nil)
	assert.Equal(t, result, web.ProductResponse{})
}
