import { useLoaderData } from "react-router-dom";
import { cn } from "../../lib/utils";
import { PaletteProvider, usePalette } from "../../providers/pallete";
import Sidebar from "../layout/sidebar";
import { ButtonBack, ButtonNext, Carousel, Slide, Slider, SliderBarLine } from "react-scroll-snap-anime-slider";
import { workspaces as models } from "../../../wailsjs/go/models";
import { useState } from "react";
import debounce from "debounce";

type Props = {
  color: string;
  workspaces: models.Workspace[];
}

const ScreenChild = ({ workspaces }: Props ) => {
  const { classBuilder, setColor } = usePalette();
  const [currentWorkspaceIndex, setCurrentWokspaceIndex] = useState(0)
  const widhtClass = "max-w-[300px]"
  const sidebarClass = `${widhtClass} basis-full shrink-0`

  return (
    <div
      className={
        cn(
          "w-full h-screen flex flex-row p-4 transition-all",
          classBuilder({ bg: 'base' })
        )
      }
    >
      <div
        className={
          cn(
            "",
            widhtClass,
          )
        }
      >
        <Carousel
          totalSlides={workspaces.length}
          visibleSlides={1}
          step={1}
          currentSlide={currentWorkspaceIndex}
          inertiaPower={10}
          inertiaStopSpeed={30}
          onSlide={
            debounce(({ currentSlide }) => {
              setCurrentWokspaceIndex(currentSlide)
              setColor(workspaces[currentSlide].baseColor)
            }, 0)
          }
          className="flex flex-row overflow-y-hidden overflow-x-auto w-full flex-none h-full"
        >
          <Slider>
            {
              workspaces.map(
                w => (
                  <Slide key={w.id}>
                    <Sidebar className={sidebarClass} {...w} />
                  </Slide>
                )
              )
            }
          </Slider>
        </Carousel>
      </div>
      <div className="bg-white rounded-xl drop-shadow-md flex-1">

      </div>
    </div>
  )
}

const Screen = ({ color, workspaces }: Props) => {
  return (
    <PaletteProvider color={color}>
      <ScreenChild color={color} workspaces={workspaces} />
    </PaletteProvider>
  )
}

export default Screen;
