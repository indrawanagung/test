package repository

import (
	"fmt"
	"github.com/go-playground/assert/v2"
	"grabit/model/web"
	"testing"
)

func TestProductRepositoryImpl_FindAll(t *testing.T) {
	productRepository := NewProductRepository()
	result := productRepository.FindAll(connDB)
	fmt.Println(result)
}

func TestProductRepositoryImpl_FindByID(t *testing.T) {
	productRepository := NewProductRepository()

	result, err := productRepository.FindByID(connDB, "1")
	assert.Equal(t, err, nil)
	assert.NotEqual(t, result, web.ProductResponse{})
	fmt.Println(result)

	//notfound
	//result, err := productRepository.FindByID(connDB, "1233")
	//assert.NotEqual(t, err, nil)
	//assert.Equal(t, result, web.ProductResponse{})

}
