/* eslint-disable react/prop-types */
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

export const Skills = ({ ismael }) => {
    const skillsData = ismael.skills;

    return (
        <section className="text-main-text dark:text-main-text-dark bg-section-light dark:bg-section-dark-90 py-10">
            <h3 className="text-3xl py-3 text-center font-ubuntu mb-7 text-subtitle dark:text-subtitle-dark">
                {skillsData.title}
            </h3>
            <div className="grid place-content-center md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-7 mx-auto px-4 w-11/12">
                {Object.keys(skillsData)
                    .filter((key) => key !== 'title')
                    .map((skillKey) => (
                        <SkillCard key={skillKey} skill={skillsData[skillKey]} />
                    ))}
            </div>
        </section>
    );
};

const SkillCard = ({ skill }) => (
    <div className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 bg-section-light-90 dark:bg-section-dark duration-300">
        <img className="w-10 h-10" src={getImage(skill.image)} alt={skill.title} />
        <div className="font-medium dark:text-main-text-dark text-main-text">
            <p>{skill.title}</p>
            <p className="font-normal text-grisclaro2">{skill.resume}</p>
        </div>
    </div>
);

// Función para obtener la imagen adecuada según el nombre de la imagen
const getImage = (imageName) => {
    switch (imageName) {
        case 'html':
            return html
        case 'css':
            return css
        case 'javascript':
            return javascript
        case 'react':
            return react
        case 'tailwind':
            return tailwind
        case 'php':
            return php
        case 'laravel':
            return laravel
        case 'github':
            return github
        case 'python':
            return python
        case 'aws':
            return aws
        case 'db':
            return db
        default:
            return null // Manejar una imagen predeterminada o un error en caso necesario
    }
}