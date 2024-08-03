import Lottie, { LottieRef } from 'lottie-react';
import animationData from '../lotties/email.json';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

type Props = {
  open?: boolean;
  color?: string;
  className?: string;
}

const initalFrame = 0;
const durationFrames = animationData['op'] || 0;
const middleFrame = durationFrames / 2;

export const AnimatedEmail = ({ open, color, className }: Props) => {
  const ref: LottieRef = useRef(null);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useEffect(() => {
    if (!hasRendered) {
      return;
    }

    if (open) {
      ref.current?.playSegments([initalFrame, middleFrame], true);
    } else {
      ref.current?.playSegments([middleFrame, durationFrames], true);
    }
  }, [open]);

  return (
    <Lottie
      lottieRef={ref}
      animationData={animationData}
      className={cn(
        "w-7 transition-all duration-300 ease-in-out",
        className
      )}
      autoPlay={false}
      loop={false}
      initialSegment={[12, 12]}
      style={color ? {
        // @ts-ignore
        '--custom-stroke': color
      } : undefined}
    />
  )
}

export default AnimatedEmail;
