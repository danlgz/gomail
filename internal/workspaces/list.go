package workspaces


func (wrk *WorkspacesManager) List() []Workspace {
	return []Workspace{
		{Id: "1", Name: "Personal", BaseColor: "#064e3b"},
		{Id: "2", Name: "Work", BaseColor: "#0e7490"},
		{Id: "3", Name: "Home", BaseColor: "#d8b4fe"},
	}
}
