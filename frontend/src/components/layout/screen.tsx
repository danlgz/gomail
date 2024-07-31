import Sidebar from "../layout/sidebar";

const Screen = () => {
  return (
    <div className="w-full h-screen bg-violet-300 flex flex-row p-4">
      <Sidebar />
      <div className="w-full bg-white rounded-xl drop-shadow-md">

      </div>
    </div>
  )
}

export default Screen;
