import { useState } from "react";
import Screen from "../components/layout/screen"

const Dashboard = () => {
  const [mainColor, setMainColor] = useState("#064e3b");
  return (
    <main className="w-full h-screen">
        <Screen color={mainColor} />
    </main>
  )
}

export default Dashboard
