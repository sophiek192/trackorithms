import { AnimationScope, motion, MotionValue } from "framer-motion";
import { forwardRef } from "react";

const Train = forwardRef(
  (
    {
      x,
      y,
      yaw,
    }: {
      x: MotionValue<number>;
      y: MotionValue<number>;
      yaw: MotionValue<number>;
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref as AnimationScope}
        className="w-12 h-6 bg-blue-500 z-50 absolute rounded-r-full"
        style={{
          x,
          y,
          rotate: yaw,
          translateX: "-50%",
          translateY: "-50%",
        }}
      ></motion.div>
    );
  }
);

export default Train;
