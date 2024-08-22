package main

import (
	"context"
	"database/sql"
	"fmt"
	"gomail/database"
	"gomail/internal/workspaces"
	"log"
)

// App struct
type App struct {
	ctx               context.Context
	workspacesManager *workspaces.WorkspacesManager
	db                *sql.DB
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		workspacesManager: workspaces.NewWorkspacesManager(),
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	var err error

	a.ctx = ctx

	// run db migrations
	var db *sql.DB
	if db, err = database.RunMigrations(); err != nil {
		log.Fatal("error running migrations", err.Error())
	}

	a.db = db
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) ListWorkspaces() []workspaces.Workspace {
	return a.workspacesManager.List()
}

func (a *App) GetCurrentWorkspace() workspaces.Workspace {
	return a.workspacesManager.GetCurrentWorkspace()
}
