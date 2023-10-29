import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import github from '../assets/github.svg'
import php from '../assets/php.svg'
import laravel from '../assets/laravel.svg'
import db from '../assets/bd.svg'
import python from '../assets/python.svg'
import aws from '../assets/aws.svg'

export const Skills = () => {
    return (
        <section className="text-main-text dark:text-main-text-dark bg-section-light dark:bg-section-dark-90 py-10">
            <h3 className='text-3xl py-3 text-center font-ubuntu mb-7 text-subtitle dark:text-subtitle-dark'>Skills</h3>
            <div className="grid place-content-center md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-7 mx-auto px-4 w-11/12">
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={html} alt="HTML" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>HTML</p>
                        <p className='font-normal text-grisclaro2'>Web Markup</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={css} alt="CSS" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>CSS</p>
                        <p className='font-normal text-grisclaro2'>Web styles</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={javascript} alt="JavaScript" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>JavaScript</p>
                        <p className='font-normal text-grisclaro2'>Web interactivity</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={react} alt="React" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>React</p>
                        <p className='font-normal text-grisclaro2'>JavaScript Library</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={tailwind} alt="Tailwind" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>Tailwind CSS</p>
                        <p className='font-normal text-grisclaro2'>CSS Framework</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={php} alt="PHP" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>PHP</p>
                        <p className='font-normal text-grisclaro2'>Server side programming</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={laravel} alt="Laravel" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>Laravel</p>
                        <p className='font-normal text-grisclaro2'>PHP Framework</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={python} alt="Python" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>Python</p>
                        <p className='font-normal text-grisclaro2'>programming language</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={aws} alt="AWS" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>AWS</p>
                        <p className='font-normal text-grisclaro2'>Cloud services</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={db} alt="Base de datos" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>Databases</p>
                        <p className='font-normal text-grisclaro2'>SQL databases</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
                    <img className="w-10 h-10" src={github} alt="github" />
                    <div className='font-medium dark:text-main-text-dark text-main-text'>
                        <p>github</p>
                        <p className='font-normal text-grisclaro2'>Version control</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
