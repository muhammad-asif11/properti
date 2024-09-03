import React from "react";
import Image from "next/image";

const FindHome = () => {
  return (
    <section className="HomeLand my-4 relative rounded-xl">
        <div className="relative w-full pb-[56.25%] overflow-hidden">
        <Image
          src="/Images/Home.svg"
          alt="Home"
          layout="fill"
          className="absolute inset-0 object-cover rounded-xl"
        />
      </div>
      <div className="absolute top-0 z-10 flex flex-col gap-8 text-white w-full px-16 py-16">
        <h1 className="text-[72px] font-medium leading-[85px] w-[60%]">
          Finding Your New Home Is Simple
        </h1>
        <p className="w-[40%]">
          Lorem ipsum dolor sit amet consectetur. Et nibh eu et interdum
          tristique nunc massa. Sed gravida nec massa leo nibh faucibus ipsum
          quisque. Enim eu accumsan risus erat quam et. Fames urna molestie
          porta fringilla.
        </p>
        <div>
          <button className="Chate_btn rounded-xl px-12 py-4 text-[20px] font-bold">
            Eye by ChatGPT
          </button>
        </div>
        <div className="bg-white py-[12px] px-[20px] text-black flex gap-[40px] place-items-center rounded-xl w-max counter">
          <div>
            <h2>999+</h2>
            <p>Close Deal</p>
          </div>
          <div>
            <h2>2500+</h2>
            <p>Available Space</p>
          </div>
          <div>
            <h2>1200+</h2>
            <p>Happy Buyers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindHome;
