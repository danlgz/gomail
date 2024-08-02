package workspaces


type Workspace struct {
	Id string `json:"id"`
	Name string `json:"name"`
	BaseColor string `json:"baseColor"`
}

type WorkspacesManager struct {}

func NewWorkspacesManager() *WorkspacesManager {
	return &WorkspacesManager{}
}
