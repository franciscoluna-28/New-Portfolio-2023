import personalImage from "../assets/testImage.jpg"
import NavigationButton from "../components/NavigationButton";
import "../utils/glowStyles.css"


export default function Home() {
  return (
    <section className="primary-div-up min-h-screen flex text-center justify-center items-center">
      <div className="grid grid-cols-2 gap-4 max-1279:flex max-1279:grid-cols-none max-1279:flex-col-reverse">
        <div className="flex justify-center items-center max-1279:flex max-1279:justify-center min-h-max">
          <img
            className="h-80 w-80 rounded-full max-1279:h-48 max-1279:w-48 border-white border-2 border-double main-image p-1 
            floating max-767:h-32 max-767:w-32 glow-main"
            src={personalImage} alt="test"
          ></img>
        </div>
        <div className="max-639:px-5">
          <h1 className="font-bold text-5xl flex text-left py-2 max-639:justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white">
            Hi! I'm Francisco Luna
          </h1>
          <h2 className="text-mainDarkBlue dark:text-mainCyan font-bold text-4xl text-left flex py-2 max-639:justify-center max-639:text-3xl">
            Front End Developer
          </h2>
          <div className="pr-20">
            <p className="text-silver leading-loose py-2 text-left w-auto max-639:w-72 max-639:m-auto max-639:text-center text-xl dark:text-mainSilver
            text-mainDarkBlue">
              18 years old Front End Developer from Venezuela. Currently
              studying a Computer Science Major and working on personal
              projects.
            </p>
          </div>
          <div className="flex items-center gap-4 m-0 py-4 max-639:justify-center">
            <NavigationButton text={"Contact"} route={"/contact"} />
            <NavigationButton text={"My projects"} route={"/projects"} />
          </div>
          <p className="text-left text-silver0 leading-loose py-2 w-auto
           pr-32 max-639:w-72 max-639:m-auto max-639:text-center text-xl dark:text-mainSilver
            text-mainDarkBlue">My committed <a className="text-mainDarkCyan dark:text-mainCyan font-semibold" href="/about">resume</a> and enthusiastic skills make me a valuable addition to your team!</p>
        </div>

      </div>
    </section>
  );
}