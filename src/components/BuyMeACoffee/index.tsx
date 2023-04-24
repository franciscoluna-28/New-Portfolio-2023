import Coffee from "../../assets/services/coffee.jpg"
import NavigationButton from "../Buttons/NavigationButton"

export default function BuyMeACoffee() {
    return(
    <div className="card w-auto max-w-xl shadow-xl dark:bg-gradient-to-r dark:from-mainDarkBlue/50 dark:to-mainDarkBlue/30 lg:hover:scale-105 duration-300">
    <figure><img className='' src={Coffee} alt="Service" /></figure>
    <div className="card-body">
   
        <h2 className="card-title dark:text-white text-black font-bol">
            Buy me a coffee!<div className="badge glow-secondary dark:bg-mainCyan dark:text-mainExtraDarkBlue/70 bg-mainDarkCyan outline-none border-transparent text-white">Support my journey</div>
        </h2>
        <p className='my-2 leading-loose dark:text-mainSilver/50 text-mainExtraDarkBlue/50'>Hey there!
I'm reaching out to ask for your support as I continue on my journey. If you enjoy following along with my adventures and would like to help me keep going, consider buying me a coffee! Your small donation will go a long way in helping me achieve my goals.

Thank you for your support, and cheers to new adventures ahead!</p>
<NavigationButton text={"Support me here"} route={"https://www.buymeacoffee.com/FranLunDev"} styleClass={"secondary-button"}/>

        </div>
        
    </div>
    )
}