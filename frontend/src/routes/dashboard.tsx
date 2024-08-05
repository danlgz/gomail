import { Suspense } from "react";
import Screen from "../components/layout/screen"
import { Await, Navigate, Outlet, useLoaderData, useLocation, useParams } from "react-router-dom";
import { workspaces as models } from '../../wailsjs/go/models'
import { cn } from "../lib/utils";
import { classBuilder } from "../lib/palette";
import { Mailbox } from "lucide-react";
import { usePalette } from "../providers/pallete";

const Dashboard = () => {
  const workspaces = useLoaderData() as Promise<models.Workspace[]>;
  const { pathname } = useLocation();
  const { setColor } = usePalette()
  const { id } = useParams();
  const hasPageSelected = pathname.includes('inbox') || pathname.includes('sent') || pathname.includes('draft') || pathname.includes('spam')

  return (
    <main className="w-full h-screen">
      <Suspense fallback={<h1>lalalala</h1>}>
        <Await
          resolve={workspaces}
          errorElement={<h1>error</h1>}
          children={
            (workspaces: models.Workspace[]) => {
              const workspace = workspaces.find(workspace => workspace.id === id)!
              // setColor(workspace.baseColor)

              const { selectedEmail, selectedView } = workspace
              // if (!hasPageSelected && selectedEmail && selectedView) {
              //   return <Navigate to={`e/${selectedEmail}/${selectedView}`} />
              // }

              return (
                <Screen workspaces={workspaces}>
                  <div
                    className={
                      cn(
                        "bg-white rounded-xl drop-shadow-md flex-1 transition-all",
                        !hasPageSelected && classBuilder({ bg: 'highlight1' })
                      )
                    }
                  >
                    {
                      !hasPageSelected
                      && (
                        <div
                          className={
                            cn(
                              "flex flex-col items-center justify-center h-full gap-3",
                              classBuilder({ text: 'foreground' })
                            )
                          }
                        >
                          <Mailbox size={100} strokeWidth={1} />
                          <h1 className="text-xl font-light">
                            Select an email
                          </h1>
                        </div>
                      )
                    }
                    <Outlet />
                  </div>
                </Screen>
              )
            }
          }
        />
      </Suspense>
    </main>
  )
}

export default Dashboard
