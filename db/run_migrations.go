package database

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
	"github.com/pressly/goose/v3"
)

func RunMigrations() (*sql.DB, error) {
	var err error
	var db *sql.DB

	if db, err = sql.Open("sqlite3", "db.sql"); err != nil {
		return nil, err
	}
	defer db.Close()

	// goose migrations
	goose.SetDialect("sqlite3")

	// var migrationsPath string
	// if migrationsPath, err = filepath.Abs("./migrations"); err != nil {
	// 	return nil, err
	// }

	if err = goose.Up(db, "./db/migrations"); err != nil {
		return nil, err
	}

	return db, nil
}
