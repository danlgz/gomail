import { Suspense, useState } from "react";
import Screen from "../components/layout/screen"
import { Await, Navigate, useLoaderData } from "react-router-dom";
import { workspaces as models } from '../../wailsjs/go/models'

const Root = () => {
  const workspaces = useLoaderData() as Promise<models.Workspace[]>;

  return (
    <Suspense fallback={<div>Looooaaaaading...</div>}>
      <Await
        resolve={workspaces}
        children={
          (workspaces: models.Workspace[]) => {
            if (workspaces.length) {
              return <Navigate to={`/workspace/${workspaces[0].id}`} />
            }

            return (
              <div>no workspaces</div>
            )
          }
        }
      >
      </Await>
    </Suspense>
  )
}

export default Root
