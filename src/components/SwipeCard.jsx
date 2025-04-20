import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SwipeableCard = ({ product, onSwipe, isTop }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);

  const [swipeDirection, setSwipeDirection] = useState(null); // 'left', 'right', 'up'

  useEffect(() => {
    if (!swipeDirection) return;

    // Animate the card off-screen
    const controls = {
      right: () => {
        animate(x, 1000, { duration: 0.5 });
        animate(y, 0, { duration: 0.5 });
        toast.success("Liked! 💖");
        console.log(`Liked Product ID: ${product.id}`);
      },
      left: () => {
        animate(x, -1000, { duration: 0.5 });
        animate(y, 0, { duration: 0.5 });
        toast.info("Passed ❌");
        console.log(`Passed Product ID: ${product.id}`);
      },
      up: () => {
        animate(y, -1000, { duration: 0.5 });
        animate(x, 0, { duration: 0.5 });
        toast.success("Added to cart 🛒");
        console.log(`Add to cart Product ID: ${product.id}`);
      },
    };

    controls[swipeDirection]();

    const timeout = setTimeout(() => {
      onSwipe(swipeDirection, product);
    }, 500);

    return () => clearTimeout(timeout);
  }, [swipeDirection]);

  const handleDragEnd = (_, info) => {
    const { offset } = info;

    if (offset.x > 100) setSwipeDirection("right");
    else if (offset.x < -100) setSwipeDirection("left");
    else if (offset.y < -100) setSwipeDirection("up");
    else {
      animate(x, 0, { type: "spring", stiffness: 300 });
      animate(y, 0, { type: "spring", stiffness: 300 });
    }
  };

  return (
    <motion.div
      className="absolute"
      style={{
        x,
        y,
        rotate,
        zIndex: isTop ? 10 : 0,
        touchAction: "pan-x pan-y",
      }}
      drag={isTop}
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={{ scale: 1.02 }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <ProductCard product={product} />
    </motion.div>
  );
};

export default SwipeableCard;
