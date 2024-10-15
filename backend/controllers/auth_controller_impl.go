package controllers

import (
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/log"
	"github.com/golang-jwt/jwt/v5"
	"github.com/spf13/viper"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"grabit/exceptions"
	"grabit/model/domain"
	"grabit/model/web"
	"grabit/repository"
	"grabit/util"
	"time"
)

type AuthControllerImpl struct {
	Database       *gorm.DB
	Validate       *validator.Validate
	UserRepository repository.UserRepositoryInterface
}

func NewAuthController(Database *gorm.DB, Validate *validator.Validate, userRepository repository.UserRepositoryInterface) AuthControllerInterface {
	return &AuthControllerImpl{Database: Database, Validate: Validate, UserRepository: userRepository}
}

func (c AuthControllerImpl) Login(ctx *fiber.Ctx) error {
	loginRequest := new(web.LoginRequest)
	if err := ctx.BodyParser(loginRequest); err != nil {
		panic(exceptions.NewBadRequestError(err.Error()))
	}

	err := c.Validate.Struct(*loginRequest)
	errTrans := util.TranslateErroValidation(c.Validate, err)
	if err != nil {
		log.Error(err)
		panic(exceptions.NewBadRequestError(errTrans.Error()))
	}
	err, user := c.UserRepository.FindByEmail(c.Database, loginRequest.Email)
	if err != nil {
		panic(exceptions.NewNotFoundError(err.Error()))
	}
	//compare password has
	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(loginRequest.Password))
	if err != nil {
		panic(exceptions.NewUnauthorizedError("invalid username and password"))
	}

	// Create the Claims
	claims := jwt.MapClaims{
		"id":            user.ID,
		"email_address": user.EmailAddress,
		"phone":         user.PhoneNumber,
		"exp":           time.Now().Add(time.Hour * 72).Unix(),
	}

	// Create token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// Generate encoded token and send it as response.
	response, err := token.SignedString([]byte(viper.GetString("SECRET_KEY")))
	if err != nil {
		log.Panic(err)
		panic(err)
	}
	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   response,
	}
	return ctx.Status(200).JSON(webResponse)
}

func (c AuthControllerImpl) Register(ctx *fiber.Ctx) error {
	r := new(web.UserCreateOrUpdateRequest)
	if err := ctx.BodyParser(r); err != nil {
		panic(exceptions.NewBadRequestError(err.Error()))
	}

	err := c.Validate.Struct(*r)
	errTrans := util.TranslateErroValidation(c.Validate, err)
	if err != nil {
		log.Error(err)
		panic(exceptions.NewBadRequestError(errTrans.Error()))
	}
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(r.Password), bcrypt.MinCost)
	if err != nil {
		log.Fatal(err)
	}

	id := util.GenerateUUID()

	err, _ = c.UserRepository.FindByEmail(c.Database, r.EmailAddress)

	if err == nil {
		panic(exceptions.NewBadRequestError("email has been already exist"))
	}

	err = c.UserRepository.SaveOrUpdate(c.Database, domain.User{
		ID:           id,
		FullName:     r.FullName,
		EmailAddress: r.EmailAddress,
		PhoneNumber:  r.PhoneNumber,
		Password:     string(passwordHash),
		Timestamp: domain.Timestamp{
			CreatedAt: util.GetUnixTimestamp(),
		},
	})

	if err != nil {
		log.Fatal(err)
	}

	webResponse := web.WebResponse{
		Header: util.HeaderResponseSuccessfully(),
		Data:   map[string]string{"user_id": id},
	}
	return ctx.Status(201).JSON(webResponse)
}
