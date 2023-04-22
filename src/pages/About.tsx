import NavigationButton from "../components/Buttons/NavigationButton";

export default function About() {
    return ( 
        <div className="about">
         <h1
                  className="font-bold text-4xl flex text-left py-2 max-639:justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white lg:text-5xl"
                >
                  About Me
                  </h1>
                  <p className="text-silver leading-loose py-2 text-left w-auto max-639:w-72 max-639:m-auto max-639:text-center text-lg dark:text-mainSilver
            text-mainDarkBlue/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum nunc vel sollicitudin sagittis. Praesent enim orci, tincidunt et rutrum vitae, dignissim ut tellus. Mauris non odio quis nunc maximus finibus. Morbi non nunc ligula. Integer auctor est id mi tempor, ac porta est posuere. In sem massa, pretium eget augue quis, sodales sagittis arcu. Fusce gravida vestibulum tempus. Cras nec est massa. Ut pretium purus at risus rhoncus, ut porta augue semper. Suspendisse ligula nisl, commodo sed maximus ut, laoreet id quam. Morbi vel eros id odio feugiat bibendum sit amet vel lorem. Vestibulum vitae erat massa. Etiam sed consequat eros. Aliquam fermentum nibh a orci rutrum, nec aliquam ex porta. Suspendisse finibus suscipit dolor non cursus. Morbi et purus viverra, vehicula risus commodo, tincidunt purus.

Curabitur pretium lacus nisl. Morbi tempor malesuada risus non elementum. Nam gravida nibh in eros dictum convallis.</p>
<NavigationButton
                  text={"Tech Stack"}
                  route={"/contact"}
                  styleClass={"primary-button"}
                />
        </div>
     );
}
