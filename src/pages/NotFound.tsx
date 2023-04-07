import errorImage from "../assets/404.svg"
import "../utils/glowStyles.css";
import { motion } from 'framer-motion';



export default function NotFound() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <section className="p-8">
                <h2 className="font-bold text-4xl text-center max-639:text-4xl main
           text-mainDarkCyan lg:text-5xl dark:text-mainCyan">Not Found!</h2>
                <p className="text-silver leading-loose py-2 w-auto max-639:w-72 max-639:m-auto max-639:text-center text-xl dark:text-mainSilver
            text-mainDarkBlue text-center">Whoops! Looks like the page you were trying to reach is not available.
                    Please try a different link or navigate to the <a
                        className="font-bold outline-2 hover:underline hover:text-white" href="/">Homepage</a>.</p>
                <img className="m-auto max-w-lg error-image dark:hidden" src={errorImage} alt="404 error"></img>
            </section>
        </motion.div>
    )
}