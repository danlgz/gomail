import { createContext, useContext, useMemo, useState } from "react";
import { classBuilder, genPalette, GenPaletteReturn } from "../lib/palette";
import { cva, type VariantProps } from "class-variance-authority";

const defaultColor = '#fff';

type PaletteContextType = {
  color: string;
  palette: GenPaletteReturn;
  setColor: (color: string) => void;
  classBuilder: (variant: VariantProps<typeof classBuilder>) => string;
};
const PaletteContext = createContext<PaletteContextType>({
  color: defaultColor,
  palette: genPalette(defaultColor),
  setColor: () => {},
  classBuilder,
})

export const PaletteProvider = ({ children, color: baseColor = defaultColor }: { children: JSX.Element, color?: string }) => {
  const [color, setColor] = useState<string>(baseColor);
  const palette = useMemo(() => genPalette(color), [color]);

  return (
    <PaletteContext.Provider
      value={
        {
          color,
          palette,
          setColor: (val: string) => {
            console.log('setting color', val);
            setColor(val);
          },
          classBuilder,
        }
      }
    >
      <div className="w-full h-screen" style={palette.palleteStyles}>
        {children}
      </div>
    </PaletteContext.Provider>
  );
};

export const usePalette = () => useContext(PaletteContext);
