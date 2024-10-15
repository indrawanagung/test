import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import TextAndImage from "@/components/Home/TextAndImage";
import CategoryOverflow from "@/components/Home/CategoryOverflow";
import AnimationWrapper from "@/components/AnimationWrapper";
export default function Home() {
  return (
    <div className="mb-28">
      <div className="w-full bg-slate-100">
        <MaxWidthWrapper>
          <TextAndImage />
        </MaxWidthWrapper>
      </div>
      <div className="mt-10">
        <MaxWidthWrapper>
          {/* CATEGORY OVERFLOW  */}
          <CategoryOverflow />
          {/* TEXT  */}
          <div className="flex flex-col gap-3 justify-center items-center">
            <h2 className="text-2xl font-bold">
              Day Of The <span className="text-purple-500">Deal</span>
            </h2>
            <span className="text-lg text-gray-500">
              Dont wait. The time will never be just right
            </span>
          </div>
          {/* LIST PRODUCT  */}
          <AnimationWrapper>
            <div className="flex gap-4 my-10 overflow-scroll scrollbar-hide pb-5">
              <div
                data-aos="fade-up"
                className="flex flex-col max-w-60 min-w-60 gap-2 cursor-pointer border rounded-xl border-gray-200 shadow-md"
              >
                <Image
                  src="/product1.jpg"
                  alt=""
                  className="w-fit hover:p-1 duration-300 h-50 p-5 border-b"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2 py-2 px-4">
                  <span className="text-sm font-light tracking-wider text-gray-500">
                    Chocos
                  </span>
                  <h4>Mixed Fruit Cocholates Organic Apple</h4>
                  {/* PRICE  */}
                  <div className="flex justify-between">
                    <span className="font-extrabold">$25</span>
                    <span>1 Pack</span>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col max-w-60 min-w-60 gap-2 cursor-pointer border rounded-xl border-gray-200 shadow-md"
              >
                <Image
                  src="/product2.jpg"
                  alt=""
                  className="w-fit hover:p-1 duration-300 h-50 p-5 border-b"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2 py-2 px-4">
                  <span className="text-sm font-light tracking-wider text-gray-500">
                    Chocos
                  </span>
                  <h4>Mixed Fruit Cocholates Organic Apple</h4>
                  {/* PRICE  */}
                  <div className="flex justify-between px-4 absolute bottom-2 w-full left-0 ">
                    <span className="font-extrabold">$25</span>
                    <span>1 Pack</span>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col max-w-60 min-w-60 gap-2 cursor-pointer border rounded-xl border-gray-200 shadow-md"
              >
                <Image
                  src="/product3.jpg"
                  alt=""
                  className="w-fit hover:p-1 duration-300 h-50 p-5 border-b"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2 py-2 px-4">
                  <span className="text-sm font-light tracking-wider text-gray-500">
                    Chocos
                  </span>
                  <h4>Mixed Fruit Cocholates Organic Apple</h4>
                  {/* PRICE  */}
                  <div className="flex justify-between px-4 absolute bottom-2 w-full left-0 ">
                    <span className="font-extrabold">$25</span>
                    <span>1 Pack</span>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col max-w-60 min-w-60 gap-2 cursor-pointer border rounded-xl border-gray-200 shadow-md"
              >
                <Image
                  src="/product4.jpg"
                  alt=""
                  className="w-fit hover:p-1 duration-300 h-50 p-5 border-b"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2 py-2 px-4 justify-end">
                  <span className="text-sm font-light tracking-wider text-gray-500">
                    Chocos
                  </span>
                  <h4>Just Juice Strowberry </h4>
                  {/* PRICE  */}
                  <div className="flex justify-between px-4 absolute bottom-2 w-full left-0 ">
                    <span className="font-extrabold">$25</span>
                    <span>1 Pack</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          {/* SNACK & FRUITS  */}
          <AnimationWrapper>
            <div className="flex flex-col gap-8 lg:flex-row justify-center">
              <div
                data-aos="fade-up"
                className="md:min-w-64 flex justify-center  gap-8 py-8 px-5 rounded-3xl bg-orange-100"
              >
                <div className="flex justify-center">
                  <Image
                    src="/snack.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-44 hover:p-0 p-0 md:p-3  duration-300 object-cover self-center"
                  />
                </div>

                <div className="flex flex-col gap-2 pr-5 justify-center">
                  <h3 className="text-2xl font-semibold">
                    Tasty Snack & Fast food
                  </h3>
                  <span className="font-light text-lg tracking-wide">
                    The flavour of something special
                  </span>
                  <button className="border border-black py-2 rounded-xl w-40">
                    {" "}
                    Shop Now
                  </button>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="md:min-w-64 flex justify-center gap-8 py-8 px-5 rounded-3xl bg-rose-100 "
              >
                <div className="flex justify-center">
                  <Image
                    src="/fruits.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-44 object-cover self-center p-0 md:p-3  hover:p-0 duration-300"
                  />
                </div>

                <div className="flex flex-col gap-2 pr-5 justify-center">
                  <h3 className="text-2xl font-semibold">
                    Tasty Snack & Fast food
                  </h3>
                  <span className="font-light text-lg tracking-wide">
                    The flavour of something special
                  </span>
                  <button className="border border-black py-2 rounded-xl w-40">
                    {" "}
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </MaxWidthWrapper>
        <div className="w-full h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] relative mt-10">
          <Image src="/farmer4.jpg" alt="" fill className="object-cover" />
          <AnimationWrapper>
            <div className="bottom-0 translate-y-1/2 right-1/2 md:right-1/4 translate-x-1/2 z-50 bg-white shadow-lg flex flex-col gap-3 lg:gap-5 absolute py-8 px-12 lg:px-16 rounded-3xl">
              <span className="text-xl text-purple-500 tracking-wider font-semibold">
                25% Off
              </span>
              <h3 className="text-4xl lg:text-5xl font-semibold tracking-wider w-60 lg:w-80">
                Fresh & Organic Vegetables
              </h3>
              <button className="px-2 py-1 border border-black w-32 rounded-lg mt-2 hover:px-4 hover:py-3 duration-200">
                Shop Now
              </button>
            </div>
          </AnimationWrapper>
        </div>
        <div className="mt-48">
          <MaxWidthWrapper>
            {/* TEXT  */}
            <div className="flex justify-center lg:justify-between">
              <div className="flex flex-col gap-3 justify-center items-center lg:items-start">
                <h2 className="text-2xl font-bold">
                  New <span className="text-purple-500">Arrival</span>
                </h2>
                <span className="text-lg text-purple-500 text-center">
                  Shop online for new arrivals and get free shipping!
                </span>
              </div>
              <div className="hidden lg:flex gap-2 text-lg font-medium text-gray-500">
                <span className="text-purple-500 cursor-pointer">All</span>
                <span>/</span>
                <span>Snack & Spices</span>
                <span>/</span>
                <span>Fruits</span>
                <span>/</span>
                <span>Vegetables</span>
              </div>
            </div>

            {/* LIST PRODUCT  */}
            <AnimationWrapper>
              <div
                data-aos="fade-up"
                className="flex gap-4 my-10 overflow-scroll scrollbar-hide pb-5"
              >
                <div className="flex flex-col max-w-60 min-w-60 gap-2 cursor-pointer border rounded-xl border-gray-200 shadow-md">
                  <Image
                    src="/product1.jpg"
                    alt=""
                    className="w-fit hover:p-1 duration-300 h-50 p-5 border-b"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col gap-2 py-2 px-4">
                    <span className="text-sm font-light tracking-wider text-gray-500">
                      Chocos
                    </span>
                    <h4>Mixed Fruit Cocholates Organic Apple</h4>
                    {/* PRICE  */}
                    <div className="flex justify-between">
                      <span className="font-extrabold">$25</span>
                      <span>1 Pack</span>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="flex flex-col max-w-60 min-w-60 gap-2 cursor-pointer border rounded-xl border-gray-200 shadow-md"
                >
                  <Image
                    src="/product2.jpg"
                    alt=""
                    className="w-fit hover:p-1 duration-300 h-50 p-5 border-b"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col gap-2 py-2 px-4">
                    <span className="text-sm font-light tracking-wider text-gray-500">
                      Chocos
                    </span>
                    <h4>Mixed Fruit Cocholates Organic Apple</h4>
                    {/* PRICE  */}
                    <div className="flex justify-between">
                      <span className="font-extrabold">$25</span>
                      <span>1 Pack</span>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="flex flex-col max-w-60 min-w-60 gap-2 cursor-pointer border rounded-xl border-gray-200 shadow-md"
                >
                  <Image
                    src="/product3.jpg"
                    alt=""
                    className="w-fit hover:p-1 duration-300 h-50 p-5 border-b"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col gap-2 py-2 px-4">
                    <span className="text-sm font-light tracking-wider text-gray-500">
                      Chocos
                    </span>
                    <h4>Mixed Fruit Cocholates Organic Apple</h4>
                    {/* PRICE  */}
                    <div className="flex justify-between">
                      <span className="font-extrabold">$25</span>
                      <span>1 Pack</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            {/* FEATURES  */}
            <AnimationWrapper className="w-full">
              <div className="flex overflow-x-auto scrollbar-hide justify-center gap-6 mt-16">
                <div
                  data-aos="flip-up"
                  className="flex flex-col gap-1 border border-gray-200 py-8 px-4 rounded-2xl"
                >
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/car.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-12 h-12"
                    />
                    <h4 className="text-lg tracking-widest font-medium">
                      Free Shipping
                    </h4>
                    <span className="text-base text-gray-40 font-light tracking-wide w-72 text-center">
                      Free shopping on all Us order or above $200
                    </span>
                  </div>
                </div>
                <div
                  data-aos="flip-up"
                  className="flex flex-col gap-1 border border-gray-200 py-8 px-4 rounded-2xl"
                >
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/support.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-12 h-12"
                    />
                    <h4 className="text-lg tracking-widest font-medium">
                      24x7 Support
                    </h4>
                    <span className="text-base text-gray-40 font-light tracking-wide w-72 text-center">
                      Contact us 24 hours a day, 7 days a week
                    </span>
                  </div>
                </div>
                <div
                  data-aos="flip-up"
                  className="flex flex-col gap-1 border border-gray-200 py-8 px-4 rounded-2xl"
                >
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/payment.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-12 h-12"
                    />
                    <h4 className="text-lg tracking-widest font-medium">
                      Payment Secure
                    </h4>
                    <span className="text-base text-gray-40 font-light tracking-wide w-72 text-center">
                      Contact us 24 hours a day, 7 days a week
                    </span>
                  </div>
                </div>
                <div
                  data-aos="flip-up"
                  className="flex flex-col gap-1 border border-gray-200 py-8 px-4 rounded-2xl"
                >
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/return.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-12 h-12"
                    />
                    <h4 className="text-lg tracking-widest font-medium">
                      30 Days Return
                    </h4>
                    <span className="text-base text-gray-40 font-light tracking-wide w-72 text-center">
                      Simply return it within 30 days for an exchange
                    </span>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </MaxWidthWrapper>
        </div>
      </div>
    </div>
  );
}
