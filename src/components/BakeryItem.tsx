interface BakeryItemData {
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function BakeryItem({
  item,
  addToCart,
}: {
  item: BakeryItemData;
  addToCart: () => void;
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex flex-col">
      <div className="flex-[2] md:flex-[1.5] w-full h-60 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex-grow p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p>{item.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>${item.price}</p>
          <button className="px-4 py-2 rounded-md" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
