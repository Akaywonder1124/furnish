import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section className="flex justify-center items-center mt-10">
          <div className="  flex flex-col justify-center items-center">
            <h1 className="text-[#333333] font-bold text-2xl max-sm:text-sm">
              Browse The Range
            </h1>
            <p className="text-[#666666] text-lg py-2 max-sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className=" flex flex-wrap justify-center items-center mb-10 ">
              <div className="max-sm:w-[80%] md:w-[381px] h-[480px] border-2 text-white">
                hi
              </div>
              <div className="w-[381px] h-[480px] border-2 text-white">hi</div>
              <div className="w-[381px] h-[480px] border-2 text-white">hi</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
