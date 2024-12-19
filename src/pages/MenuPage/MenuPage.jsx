

const MenuPage = () => {
  // Hardcoded menu data
  const menuItems = [
    { name: 'Burger', price: 10.99 },
    { name: 'Pizza', price: 12.99 },
    { name: 'Pasta', price: 9.99 },
    { name: 'Salad', price: 7.99 },
    { name: 'Steak', price: 15.99 },
    { name: 'Fish & Chips', price: 13.99 },
  ];

  return (
    <div className="max-w-7xl text-center bg-red-300 mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Menu</h1>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="text-xl bg-gray-100 rounded-lg p-3 mb-2">
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
