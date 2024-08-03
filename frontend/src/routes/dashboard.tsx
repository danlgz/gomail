import { Suspense, useState } from "react";
import Screen from "../components/layout/screen"
import { Await, useLoaderData } from "react-router-dom";
import { workspaces as models } from '../../wailsjs/go/models'

const Dashboard = () => {
  const [mainColor, setMainColor] = useState("#064e3b");
  const workspaces = useLoaderData() as Promise<models.Workspace[]>;

  return (
    <main className="w-full h-screen">
      <Suspense>
        <Await
          resolve={workspaces}
          children={
            (workspaces: models.Workspace[]) => {
              setMainColor(workspaces[0].baseColor);
              return <Screen workspaces={workspaces} color={mainColor} />;
            }
          }
        />
      </Suspense>
    </main>
  )
}

export default Dashboard
