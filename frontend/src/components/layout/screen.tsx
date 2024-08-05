import { useLoaderData, useMatch, useNavigate, useParams } from "react-router-dom";
import { cn } from "../../lib/utils";
import { PaletteProvider, usePalette } from "../../providers/pallete";
import Sidebar from "../layout/sidebar";
import { ButtonBack, ButtonNext, Carousel, Slide, Slider, SliderBarLine } from "react-scroll-snap-anime-slider";
import { workspaces as models } from "../../../wailsjs/go/models";
import { ReactNode, useEffect, useRef, useState } from "react";
import debounce from "debounce";

type Props = {
  workspaces: models.Workspace[];
  children?: ReactNode;
}

const Screen = ({ workspaces, children }: Props ) => {
  const { id: workspaceId } = useParams()
  const [hasAppliedFirstSlideMove, setHasAppliedFirstSlideMove] = useState(false)
  const navigate = useNavigate()
  const { classBuilder, setColor } = usePalette()
  const sliderRef = useRef<Slider>(null);

  const index = workspaces.findIndex(w => w.id === workspaceId)
  const widhtClass = "max-w-[300px]"

  useEffect(() => {
    const workspace = workspaces[index]!
    setColor(workspace.baseColor)
  }, []);

  useEffect(() => {
    const slider = sliderRef.current!
    slider.slideTo(index, hasAppliedFirstSlideMove)
    setHasAppliedFirstSlideMove(true)
  }, [workspaceId]);

  const changeSlide = debounce((newIndex) => {
    const workspace = workspaces[newIndex]
    if (newIndex !== index) {
      navigate(`/w/${workspace.id}`)
      setColor(workspace.baseColor)
    }
  }, 50)

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
            "flex-none",
            widhtClass,
          )
        }
      >
        <Carousel
          totalSlides={workspaces.length}
          visibleSlides={1}
          step={1}
          currentSlide={index}
          onSlide={
            ({ currentSlide, scrollLeft, slideWidth, trayWidth }) => {
              changeSlide(currentSlide)
            }
          }
          className="flex flex-row overflow-y-hidden overflow-x-auto w-full flex-none h-full"
        >
          <Slider
            ref={sliderRef}
          >
            {
              workspaces.map(
                w => (
                  <Slide key={w.id}>
                    <Sidebar
                      className={
                        cn(
                          widhtClass,
                          "basis-full shrink-0"
                        )
                      }
                      {...w}
                    />
                  </Slide>
                )
              )
            }
          </Slider>
        </Carousel>
      </div>
      {children}
    </div>
  )
}

export default Screen;
