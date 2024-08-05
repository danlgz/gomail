package workspaces

type EmailView string

const (
	Inbox EmailView = "inbox"
	Sent EmailView = "sent"
	Draft EmailView = "draft"
	Trash EmailView = "trash"
)


type Workspace struct {
	Id string `json:"id"`
	Name string `json:"name"`
	BaseColor string `json:"baseColor"`
	SelectedEmail string `json:"selectedEmail"`
	SelectedEmailView EmailView `json:"selectedView"`
}

type WorkspacesManager struct {}

func NewWorkspacesManager() *WorkspacesManager {
	return &WorkspacesManager{}
}
