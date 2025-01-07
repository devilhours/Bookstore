
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-10">
      <div className="container my-10 md:px-20 px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:space-x-20">
          {/* left section */}
          <div className="w-full mt-12 md:mt-32 md:w-1/2 order-2 md:order-1 text-center md:text-left">
            <div className="space-y-8 ">
              <h1 className="text-4xl font-bold md:text-5xl leading-tight">
                Welcome to our BookStore{" "}
                <span className="text-yellow-400">Explore our BookStore</span>{" "}
              </h1>
              <p className="text-lg text-gray-700">
                Dive into a world of books and discover the perfect stories to
                ignite your imagination. Whether you are looking for the latest
                bestsellers, timeless classics, or hidden gems, we have
                everything you need to fuel your love for reading.
              </p>

              <div className="space-y-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 flex-grow w-full md:w-auto focus:outline-none"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 transition duration-300 text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="order-1 md:order-2  w-full md:w-1/2">
            <img src="/hero.png" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
