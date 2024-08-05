package workspaces


func (wrk *WorkspacesManager) List() []Workspace {
	return []Workspace{
		{Id: "1", Name: "Personal", BaseColor: "#064e3b", SelectedEmail: "hi@danlgz.io", SelectedEmailView: Inbox},
		{Id: "2", Name: "Work", BaseColor: "#0e7490", SelectedEmail: "hi@danlgz.io", SelectedEmailView: Draft },
		{Id: "3", Name: "Home", BaseColor: "#f1f5f9"},
	}
}

func (wrk *WorkspacesManager) GetCurrentWorkspace() Workspace {
	return wrk.List()[1]
}
