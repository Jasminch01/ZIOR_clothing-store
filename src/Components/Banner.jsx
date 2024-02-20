const Banner = () => {
  return (
    <div
      className="hero h-96 bg-cover bg-center flex items-center justify-start relative"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="text-left absolute inset-0 flex items-center justify-start px-5">
        <div className="mt-20 md:ps-10">
          <p className="text-white font-medium text-3xl">Hello My Friend</p>
          <p className="w-1/2 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            totam distinctio accusamus porro mollitia odit eveniet
          </p>
          <button className="py-2 px-3 bg-white mt-3 font-semibold">Shop Now</button>
        </div>
      </div>
      <div className="hero-overlay bg-opacity-60"></div>
    </div>
  );
};

export default Banner;
