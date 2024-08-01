import { cn } from "../../lib/utils";
import { PaletteProvider, usePalette } from "../../providers/pallete";
import Sidebar from "../layout/sidebar";

type Props = {
  color: string;
}

const ScreenChild = () => {
  const { classBuilder } = usePalette();
  return (
    <div
      className={
        cn(
          "w-full h-screen flex flex-row p-4",
          classBuilder({ bg: 'base' })
        )
      }
    >
      <Sidebar />
      <div className="w-full bg-white rounded-xl drop-shadow-md">

      </div>
    </div>
  )
}

const Screen = ({ color }: Props) => {
  return (
    <PaletteProvider color={color}>
      <ScreenChild />
    </PaletteProvider>
  )
}

export default Screen;
