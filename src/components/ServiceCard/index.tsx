import "../../utils/glowStyles.css";

export default function ServiceCard({ image, title, description }: any) {

    return (
        <div className="card w-auto max-w-xl shadow-xl dark:bg-gradient-to-r dark:from-mainDarkBlue/50 dark:to-mainDarkBlue/30 lg:hover:scale-105 duration-300 dark:shadow-mainCyan/5">
            <figure><img className='' src={image} alt="Service" /></figure>
            <div className="card-body">
           
                <h2 className="card-title dark:text-white text-black font-bol">
                    {title}  <div className="badge glow-secondary dark:bg-mainCyan dark:text-mainExtraDarkBlue/70 bg-mainDarkCyan outline-none border-transparent text-white">{1}</div>
                </h2>
                <p className='my-2 leading-loose dark:text-mainSilver/50 text-mainExtraDarkBlue/50'>{description}</p>
                </div>
            </div>
    );
}

