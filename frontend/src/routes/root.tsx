import { Suspense, useState } from "react";
import Screen from "../components/layout/screen"
import { Await, Navigate, useLoaderData } from "react-router-dom";
import { workspaces as models } from '../../wailsjs/go/models'

const Root = () => {
  const data = useLoaderData() as Promise<{
    workpsaces: models.Workspace[],
    currentWorkspace: models.Workspace,
  }>;

  return (
    <Suspense fallback={<div>Looooaaaaading...</div>}>
      <Await
        resolve={data}
        children={
          ({ currentWorkspace, workspaces }: { workspaces: models.Workspace[], currentWorkspace: models.Workspace }) => {
            // if (currentWorkspace) {
            //   return <Navigate to={`/w/${currentWorkspace.id}`} />
            // } else if (workspaces.length) {
            //   return <Navigate to={`/w/${workspaces[0].id}`} />
            // }
            if (workspaces.length) {
              return <Navigate to={`/w/${workspaces[0].id}`} />
            }


            return (
              <div>no workspaces</div>
            )
          }
        }
      />
    </Suspense>
  )
}

export default Root
