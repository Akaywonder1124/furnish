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
        <section>
          <div className="bg-white w-[] flex flex-col justify-center items-center">
            <h1 className="text-[#333333] font-bold text-2xl">
              Browse The Range
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
      </main>
    </>
  );
}
