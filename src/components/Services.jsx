/* eslint-disable react/prop-types */
import db from '../assets/db.jpeg'
import wd from '../assets/wd.jpeg'
import etl from '../assets/etl.jpeg'

export const Services = ({ ismael }) => {
    // Obtén la información de los servicios desde el JSON
    const servicesData = ismael.services

    return (
        <section className="text-main-text dark:text-main-text-dark bg-section-light dark:bg-section-dark-90 py-10">
            <h3 className="text-3xl py-3 text-center font-ubuntu mb-7 text-subtitle dark:text-subtitle-dark">
                {servicesData.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center w-4/5 sm:w-5/6 mx-auto">
                {Object.keys(servicesData)
                    .filter((key) => key !== 'title') // Filtra el título
                    .map((key) => (
                        <ServiceItem
                            key={key}
                            title={servicesData[key].title}
                            description={servicesData[key].resume}
                            image={servicesData[key].image}
                        />
                    ))}
            </div>
        </section>
    )
}

// Componente de elemento de servicio reutilizable
const ServiceItem = ({ title, description, image }) => (
    <div className="shadow-lg rounded-xl py-5 shadow-slate-800/70 dark:shadow-slate-400/20">
        <div className="flex flex-col overflow-hidden items-center">
            <img src={getImage(image)} alt="" className="object-cover w-2/5 rounded-full" />
            <h4 className="text-2xl text-main-text dark:text-main-text-dark">{title}</h4>
        </div>
        <p className="px-5 text-center text-main-text dark:text-gray-dark leading-7 text-wrap-balance">
            {description}
        </p>
    </div>
)

// Función para obtener la imagen adecuada según el nombre de la imagen
const getImage = (imageName) => {
    switch (imageName) {
        case 'db':
            return db
        case 'wd':
            return wd
        case 'etl':
            return etl
        default:
            return null // Manejar una imagen predeterminada o un error en caso necesario
    }
}
