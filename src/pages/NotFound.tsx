import "../utils/glowStyles.css";
import { motion } from 'framer-motion';
import NavigationButton from "../components/Buttons/NavigationButton";



export default function NotFound() {

    return (
        <main className="h-screen flex justify-center items-center">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <section className="p-8">
                <h2 className="font-bold text-4xl text-center max-639:text-4xl main
           text-mainExtraDarkBlue lg:text-5xl dark:text-white">Not Found!</h2>
           <h3 className="text-center text-mainDarkCyan font-bold dark:text-mainCyan text-4xl pt-2">404</h3>
                <p className="dark:text-silver leading-loose w-auto max-639:w-72 max-639:m-auto max-639:text-center text-xl dark:text-mainSilver
            text-mainDarkBlue/70 text-center py-4">Whoops! Looks like the page you were trying to reach is not available.</p>
                            <NavigationButton
                  text={"Home"}
                  route={"/"}
                  styleClass={"primary-button mb-4"}
                />
            </section>
        </motion.div>
        </main>
    )
}