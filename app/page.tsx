import Link from 'next/link';
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-wrap items-center justify-around max-w-7xl mx-auto">
        <section className="text-white-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img alt="ecommerce" className="lg:w-2/6 md:w-3/12 w-16 object-cover object-center rounded" src="./background_image.jpeg" />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">Welcome to BestBuy 2</h1>
            <p className="mb-8 leading-relaxed">Explore our wide range of laptops and find the perfect one for you.</p>
            <div className="flex justify-center">
              <Link legacyBehavior href="/products">
                <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Show Products</a>
              </Link>
              <Link legacyBehavior href="/AboutUs">
                <a className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">About Us</a>
              </Link>
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
