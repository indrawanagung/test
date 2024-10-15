package web

type ContentCreateOrUpdateRequest struct {
	Title       string `validate:"required,min=1,max=50" json:"title" form:"title"`
	Description string `validate:"required,min=1,max=100" json:"description" form:"description"`
	Category    string `validate:"required,min=1,max=20" json:"category" form:"category"`
	Content     string `validate:"required,min=1" json:"content" form:"content"`
	IsPublished bool   `json:"is_published" form:"is_published"`
	Source      string `validate:"required,min=1,max=50" json:"source" form:"source"`
	Link        string `validate:"required,min=1,max=50" json:"link" form:"link"`
	Image       string `validate:"required" json:"image" form:"image"`
}
