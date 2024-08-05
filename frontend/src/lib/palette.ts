import chroma from 'chroma-js';
import { CSSProperties } from 'react';
import { cva, type VariantProps } from "class-variance-authority";

export const classBuilder = cva(
  "",
  {
    variants: {
      bg: {
        base: [`bg-[var(--base)]`],
        highlight1: [`bg-[var(--highlight-1)]`],
        highlight2: [`bg-[var(--highlight-2)]`],
        foreground: [`bg-[var(--foreground)]`],
      },
      hover: {
        base: [`hover:bg-[var(--base)]`],
        highlight1: [`hover:bg-[var(--highlight-1)]`],
        highlight2: [`hover:bg-[var(--highlight-2)]`],
      },
      text: {
        base: [`text-[var(--text)]`],
        foreground: [`text-[var(--foreground)]`],
        foreground2: [`text-[var(--foreground-2)]`],
      },
      border: {
        base: [`border-[var(--base)]`],
        foreground: [`border-[var(--foreground)]`],
        foreground2: [`border-[var(--foreground-2)]`],
      }
    }
  }
);

type Palette = {
  base: string; // base color
  text: string; // text color
  foreground: string; // text color
  foreground2: string; // text color
  highlight1: string; // background color based on the base color
  highlight2: string; // background color based on the base color
}

export type GenPaletteReturn = Palette & { palleteStyles: CSSProperties };

export const genPalette = (base: string): GenPaletteReturn => {
  const color = chroma.valid(base) ? chroma(base) : chroma('#000');
  const luminance = color.luminance();
  const text = luminance > 0.5 ? '#000' : '#0c0a09';
  const foreground = luminance > 0.5 ? color.darken(2.5).hex() : color.brighten(3.5).hex();
  const foreground2 = luminance > 0.5 ? color.darken(3.5).hex() : color.brighten(4).hex();
  const highlight1 = luminance > 0.5 ? color.darken(0.3).hex() : color.brighten(0.5).hex();
  const highlight2 = luminance > 0.5 ? color.darken(0.6).hex() : color.brighten(1).hex();

  const palette = {
    base,
    text,
    foreground,
    foreground2,
    highlight1,
    highlight2,
  };

  const palleteStyles: CSSProperties = {
    // @ts-ignore
    ['--base']: base,
    ['--text']: text,
    ['--foreground']: foreground,
    ['--foreground-2']: foreground2,
    ['--highlight-1']: highlight1,
    ['--highlight-2']: highlight2,
  }

  return {
    ...palette,
    palleteStyles,
  };
}
