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
    <div
      className="bg-gray-50 hover:bg-gray-100 rounded-md flex flex-col"
      onClick={() => addToCart()}
    >
      <div className="flex-[1.5] w-full h-48 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex-grow p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-gray-500">{item.description}</p>
        </div>
        <p className="text-gray-500">${item.price}</p>
      </div>
    </div>
  );
}
