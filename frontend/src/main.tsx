import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import { ListWorkspaces } from "../wailsjs/go/main/App";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Root from './routes/root'
import Dashboard from './routes/dashboard';

const container = document.getElementById('root')

const root = createRoot(container!)

const workspaces = [
  {
    id: 'lqji2k3j32',
    name: 'Workspace 1',
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: ListWorkspaces,
  },
  {
    path: "workspace",
    element: <Navigate to="/" />,
  },
  {
    path: "workspace/:id",
    element: <Dashboard />,
    loader: ListWorkspaces,
  }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
