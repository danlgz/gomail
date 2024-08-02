package workspaces


func (wrk *WorkspacesManager) List() []Workspace {
	return []Workspace{
		{Id: "1", Name: "Personal", BaseColor: "#064e3b"},
		{Id: "2", Name: "Work", BaseColor: "#00FF00"},
		{Id: "3", Name: "Home", BaseColor: "#0000FF"},
	}
}
