import { motion } from 'framer-motion';
import blogImage from "../assets/projects/blog.png"

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <section className="p-32">
                <h1 className='font-bold text-4xl flex py-2 justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white lg:text-5xl'>My projects</h1>
                <div className='py-8'>
                    <div className="py-8">
                        <img src={blogImage} className='rounded m-auto shadow-mainDarkBlue/20 shadow-xl' alt='uwu' />
                    </div>
                    <h2 className="text-mainDarkBlue dark:text-mainCyan text-3xl font-bold text-center">Music Blog</h2>
                    <p className='text-silver leading-loose py-4 text-left w-auto max-639:w-72 max-639:m-auto max-639:text-center text-lg dark:text-mainSilver
            text-mainDarkBlue"
      >'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa in felis ornare porttitor. Donec ultricies, tortor sed cursus pulvinar, sem purus vulputate diam, ut feugiat diam leo nec ex. Vivamus imperdiet, risus et pulvinar mattis, ipsum enim tincidunt justo, sed tincidunt ex lorem non quam. Maecenas hendrerit rhoncus leo, et ullamcorper mauris pretium eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse laoreet, urna quis placerat finibus, tellus dui congue est, ac sodales justo dolor a sapien. Vivamus diam lectus, ultricies maximus condimentum consectetur, eleifend laoreet urna. Aenean fringilla diam eu scelerisque vestibulum. Integer congue ullamcorper enim et faucibus. Suspendisse imperdiet erat sit amet maximus lacinia. Sed purus quam, gravida in neque eu, luctus tempor urna.</p>
                </div>
            </section>
        </motion.div>
    )
}