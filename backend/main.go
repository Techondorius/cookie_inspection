package main

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	g := gin.Default()

	g.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3001"},
		AllowCredentials: true,
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
	}))

	g.GET("/setcookie", func(c *gin.Context) {
		c.SetSameSite(http.SameSiteLaxMode)
		c.SetCookie("gin_cookie", "test", 3600, "/api", "localhost", false, true)
		c.SetCookie("gin_cookie2", "test", 3600, "/api", "localhost", false, true)
		c.JSON(200, gin.H{"msg": "OK"})
	})

	g.GET("/getcookie", func(c *gin.Context) {
		cookie, err := c.Cookie("gin_cookie")
		if err != nil {
			fmt.Println("cookie not found")
			return
		}
		fmt.Println("cookie value: ", cookie)
		c.JSON(200, gin.H{"msg": "OK"})
	})

	g.Run(":8080")
}
