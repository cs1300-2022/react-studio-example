import { useState } from "react";
import BakeryItem from "./components/BakeryItem";
import bakeryData from "./assets/bakery-data.json";

function App() {
  const [cart, setCart] = useState<Record<number, number>>({});

  return (
    <div className="App flex flex-col items-center">
      <div className="flex w-full sm:max-w-[1280px]">
        <main className="flex flex-col w-2/3 p-8 gap-8">
          <h1 className="text-4xl font-medium">Blueno's Bakery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bakeryData.map((item, index) => (
              <BakeryItem
                key={index}
                item={item}
                addToCart={() => {
                  setCart((prevCart) => {
                    const newCart = { ...prevCart };
                    newCart[index] = (newCart[index] || 0) + 1;
                    return newCart;
                  });
                }}
              />
            ))}
          </div>
        </main>
        <aside className="flex flex-col w-1/3 shrink-0 p-8 sticky top-20 max-h-min">
          <h2 className="text-2xl font-medium">My Cart</h2>
          {Object.entries(cart).length === 0 ? (
            <p className="text-gray-500 mt-4">Nothing here just yet!</p>
          ) : (
            <>
              <ul className="mt-4 flex flex-col gap-4">
                {Object.entries(cart).map(([index, quantity]) => {
                  const item = bakeryData[Number(index)];
                  return (
                    <li key={index}>
                      {quantity}x {item.name}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 font-medium">
                Total: $
                {Object.entries(cart).reduce((total, [index, quantity]) => {
                  const item = bakeryData[Number(index)];
                  return Number((total + item.price * quantity).toFixed(2));
                }, 0)}
              </p>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

export default App;
