import React, { useState } from 'react';
import products from './data/products';
import ProductCard from "./components/ProductCard"
import { motion, useMotionValue, useTransform } from 'framer-motion';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const product = products[currentIndex % products.length];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);

  const handleDragEnd = (_, info) => {
    const offsetX = info.offset.x;
    const offsetY = info.offset.y;

    if (offsetX > 150) {
      console.log('Liked Product ID:', product.id);
      setCurrentIndex(i => i + 1);
    } else if (offsetX < -150) {
      console.log('Passed Product ID:', product.id);
      setCurrentIndex(i => i + 1);
    } else if (offsetY < -150) {
      console.log('Add to cart Product ID:', product.id);
      setCurrentIndex(i => i + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative cursor-pointer">
      <motion.div
        className="absolute"
        style={{ x, y, rotate }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        whileTap={{ scale: 1.05 }}
      >
        <ProductCard product={product} />
      </motion.div>
    </div>
  );
}

export default App;
