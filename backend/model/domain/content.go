package domain

type Content struct {
	ID          int    `gorm:"primary_key;column:id" json:"id"`
	Title       string `gorm:"column:title" json:"title"`
	Description string `gorm:"column:description" json:"description"`
	Category    string `gorm:"column:category" json:"category"`
	Content     string `gorm:"column:content" json:"content"`
	CreatedAt   string `gorm:"column:created_at" json:"createdAt"`
	PublishedAt string `gorm:"column:published_at" json:"publishedAt"`
	IsPublished bool   `gorm:"column:is_published" json:"is_published"`
	Source      string `gorm:"column:source" json:"source"`
	Link        string `gorm:"column:link" json:"link"`
	Image       string `gorm:"column:image" json:"image"`
}

func (c *Content) TableName() string {
	return "contents"
}
