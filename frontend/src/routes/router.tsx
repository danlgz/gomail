import { createHashRouter, createRoutesFromElements, Route, Routes } from "react-router-dom"
import Root from "./root"
import { ListWorkspaces, GetCurrentWorkspace } from "../../wailsjs/go/main/App"
import Dashboard from "./dashboard"
import Inbox from "./inbox"
import Sent from "./sent"
import Draft from "./draft"
import Spam from "./spam"

const Router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Root />}
        loader={
          async () => {
            return {
              workspaces: await ListWorkspaces(),
              currentWorkspace: await GetCurrentWorkspace(),
            }
          }
        }
      >
      </Route>
      <Route
        path="w/:id"
        element={<Dashboard />} loader={ListWorkspaces}>
        <Route path="e/:email">
          <Route path="inbox" element={<Inbox />}>
          </Route>
          <Route path="sent" element={<Sent />}>
          </Route>
          <Route path="draft" element={<Draft />}>
          </Route>
          <Route path="spam" element={<Spam />}>
          </Route>
        </Route>
      </Route>
    </>
  )
)

export default Router
