import { useState } from "react";
import SwipeableCard from "./SwipeCard";

const products = [
    {
      id: 1,
      name: "floral print v-neck top",
      brand: "shaye",
      currentPrice: 2986,
      originalPrice: 4977,
      discountPercent: 40,
      image: "https://assets.ajio.com/medias/sys_master/root/20240209/UUe4/65c6542805ac7d77bb4c05c5/-473Wx593H-467057476-peach-MODEL.jpg"
    },
    {
      id: 2,
      name: "morgan blouse",
      brand: "kazo",
      currentPrice: 4500,
      originalPrice: 6000,
      discountPercent: 25,
      image: "https://cdn.shopify.com/s/files/1/0261/2386/2082/files/KZ01319YELLOWMULTI.jpg?v=1743161024"
    },
  ];
  
const CardStack = () => {
  const [cards, setCards] = useState(products);

  const handleSwipe = (direction, product) => {
    console.log(
      `${direction === "right" ? "Liked" : direction === "left" ? "Passed" : "Add to cart"} Product ID: ${product.id}`
    );

    setTimeout(() => {
      setCards((prev) => prev.filter((p) => p.id !== product.id));
    }, 300); // wait for exit animation
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {cards.length === 0 ? (
        <p className="text-gray-500 text-xl">No more products</p>
      ) : (
        cards.map((product, index) => (
          <SwipeableCard
            key={product.id}
            product={product}
            isTop={index === cards.length - 1}
            onSwipe={handleSwipe}
          />
        ))
      )}
    </div>
  );
};

export default CardStack;
