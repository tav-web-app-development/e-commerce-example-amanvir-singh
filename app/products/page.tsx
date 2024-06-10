const Products = () => {
  const laptops = [
    {
      id: 1,
      brand: 'Apple',
      model: 'MacBook Pro 16-inch',
      processor: 'M1 Pro chip with 10-core CPU and 16-core GPU',
      ram: '16GB Unified Memory',
      storage: '1TB SSD',
      display: '16.2-inch Liquid Retina XDR display',
      price: 2499.00,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 2,
      brand: 'Dell',
      model: 'XPS 15 9520',
      processor: 'Intel Core i7-12700H',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '15.6-inch 4K UHD+ InfinityEdge Touch Display',
      price: 2199.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 3,
      brand: 'Lenovo',
      model: 'ThinkPad X1 Carbon Gen 10',
      processor: 'Intel Core i7-1260P',
      ram: '16GB LPDDR5',
      storage: '512GB SSD',
      display: '14-inch WQXGA (2560 x 1600) IPS, anti-glare',
      price: 1799.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 4,
      brand: 'HP',
      model: 'Spectre x360 16-inch',
      processor: 'Intel Core i7-1260P',
      ram: '16GB DDR5',
      storage: '1TB SSD',
      display: '16-inch 3K+ (3072 x 1920) IPS Touch Display',
      price: 1599.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 5,
      brand: 'Asus',
      model: 'ZenBook Pro Duo 15 OLED',
      processor: 'Intel Core i9-12900H',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '15.6-inch 4K UHD OLED Touch Display',
      price: 2999.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 6,
      brand: 'Razer',
      model: 'Blade 15 Advanced',
      processor: 'Intel Core i7-12800H',
      ram: '16GB DDR5',
      storage: '1TB SSD',
      display: '15.6-inch QHD 240Hz Display',
      price: 2599.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 7,
      brand: 'Acer',
      model: 'Predator Triton 500',
      processor: 'Intel Core i7-12700H',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '16-inch 2.5K (2560 x 1600) IPS Display',
      price: 2499.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 8,
      brand: 'MSI',
      model: 'Stealth GS77',
      processor: 'Intel Core i7-12700H',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '17.3-inch QHD 240Hz Display',
      price: 2799.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 9,
      brand: 'Gigabyte',
      model: 'AERO 16',
      processor: 'Intel Core i7-12700H',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '16-inch 4K OLED Display',
      price: 2599.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 10,
      brand: 'Alienware',
      model: 'x17 R2',
      processor: 'Intel Core i7-12700H',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '17.3-inch QHD 240Hz Display',
      price: 2999.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 11,
      brand: 'LG',
      model: 'Gram 17',
      processor: 'Intel Core i7-1260P',
      ram: '16GB LPDDR5',
      storage: '1TB SSD',
      display: '17-inch WQXGA (2560 x 1600) IPS Display',
      price: 1799.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 12,
      brand: 'Samsung',
      model: 'Galaxy Book Pro 360',
      processor: 'Intel Core i7-1260P',
      ram: '16GB LPDDR5',
      storage: '512GB SSD',
      display: '15.6-inch Super AMOLED Touch Display',
      price: 1499.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 13,
      brand: 'Huawei',
      model: 'MateBook X Pro',
      processor: 'Intel Core i7-1195G7',
      ram: '16GB LPDDR4x',
      storage: '1TB SSD',
      display: '13.9-inch 3K (3000 x 2000) LTPS Touch Display',
      price: 1599.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 14,
      brand: 'Microsoft',
      model: 'Surface Laptop Studio',
      processor: 'Intel Core i7-11370H',
      ram: '32GB LPDDR4x',
      storage: '1TB SSD',
      display: '14.4-inch PixelSense Flow Display',
      price: 2699.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 15,
      brand: 'Asus',
      model: 'ROG Zephyrus G14',
      processor: 'AMD Ryzen 9 6900HS',
      ram: '16GB DDR5',
      storage: '1TB SSD',
      display: '14-inch QHD 120Hz Display',
      price: 1799.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 16,
      brand: 'Lenovo',
      model: 'Legion 5 Pro',
      processor: 'AMD Ryzen 7 6800H',
      ram: '16GB DDR5',
      storage: '1TB SSD',
      display: '16-inch QHD 165Hz Display',
      price: 1599.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 17,
      brand: 'Acer',
      model: 'Swift X',
      processor: 'AMD Ryzen 7 5800U',
      ram: '16GB LPDDR4x',
      storage: '512GB SSD',
      display: '14-inch FHD IPS Display',
      price: 1099.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 18,
      brand: 'HP',
      model: 'Omen 16',
      processor: 'AMD Ryzen 7 6800H',
      ram: '16GB DDR5',
      storage: '1TB SSD',
      display: '16.1-inch QHD 165Hz Display',
      price: 1599.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 19,
      brand: 'Dell',
      model: 'G15 5520',
      processor: 'AMD Ryzen 7 6800H',
      ram: '16GB DDR5',
      storage: '512GB SSD',
      display: '15.6-inch FHD 120Hz Display',
      price: 1299.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    },
    {
      id: 20,
      brand: 'Razer',
      model: 'Blade 14',
      processor: 'AMD Ryzen 9 6900HX',
      ram: '16GB DDR5',
      storage: '1TB SSD',
      display: '14-inch QHD 165Hz Display',
      price: 2599.99,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673211'
    }
  ];
  
  

  return (
    <div className="flex justify-center h-screen">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Our Laptops</h1>
        <div>
          {laptops.map((laptop) => (
            <div key={laptop.id} className="mb-4">
              <h2 className="font-semibold">{laptop.brand} {laptop.model}</h2>
              <p><strong>Processor:</strong> {laptop.processor}</p>
              <p><strong>RAM:</strong> {laptop.ram}</p>
              <p><strong>Storage:</strong> {laptop.storage}</p>
              <p><strong>Display:</strong> {laptop.display}</p>
              <p><strong>Price:</strong> ${laptop.price.toFixed(2)}</p>
              <img src={laptop.imageUrl} alt={`${laptop.brand} ${laptop.model}`} style={{ width: '100%', height: 'auto' }} />
              <h1></h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Products;
