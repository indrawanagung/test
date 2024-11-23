package web

type ProductResponse struct {
	ID                string `gorm:"primary_key;column:id" json:"id"`
	Name              string `gorm:"column:name" json:"name"`
	ProductCategoryID string `gorm:"column:product_category_id" json:"product_category_id"`
	CategoryName      string `gorm:"column:category_name" json:"category_name"`
	StatusID          string `gorm:"column:status_id" json:"status_id"`
	StatusName        string `gorm:"column:status_name" json:"status_name"`
	Price             int64  `gorm:"column:price" json:"price"`
	Image             string `json:"image"`
	Width             int    `json:"width"`
	Height            int    `json:"height"`
	Length            int    `json:"length"`
}

type AddProductCartRequest struct {
	VariationOptionID string `validate:"required"`
	Qty               int    `validate:"required"`
}

type CheckoutRequest struct {
	PaymentTYpeID string `validate:"required"`
}

type AdminVariationProductRequest struct {
	OptionName  string `json:"OptionName"`
	VariationID string `json:"VariationID"`
	Description string `json:"Description"`
	Width       int    `json:"Width"`
	Height      int    `json:"Height"`
	Length      int    `json:"Length"`
	Stock       int    `json:"Stock"`
	Price       int64  `json:"Price"`
}

type CreateAdminProductRequest struct {
	ProductName       string                         `validate:"required" json:"ProductName"`
	ProductCategoryID string                         `validate:"required" json:"ProductCategoryID"`
	VariationOptions  []AdminVariationProductRequest `json:"VariationOptions"`
}
