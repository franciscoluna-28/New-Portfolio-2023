import React from 'react';

interface TestimonialProps {
    name: string;
    text: string;
    role: string;
    title: string;
    profilePicture: string;
}

function Testimonial({ name, text, role, title, profilePicture }: TestimonialProps) {
    return (
        <article className=''>
            <div className="rounded-lg border-none  mb-8 lg:mb-12 lg:grid-cols-2">
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-mainDarkBlue/40 rounded-xl">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <p className="my-4">
                            {text}
                        </p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img
                            className="w-9 h-9 rounded-full"
                            src={profilePicture}
                            alt="profile picture"
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            {name}
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                                {role}
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </article>
    );
}

export default Testimonial;
