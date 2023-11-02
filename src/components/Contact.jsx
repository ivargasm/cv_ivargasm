/* eslint-disable react/prop-types */

export const Contact = ({ismael}) => {
    return (
        <section className="px-4 py-10 pb-12 text-main-text dark:text-main-text-dark bg-main-bg dark:bg-main-bg-dark w-11/12 mx-auto">
            <h3 className='text-3xl py-3 text-center font-ubuntu mb-7 text-subtitle dark:text-subtitle-dark'>{ismael.contact.title}</h3>
            <div className="sm:text-base md:text-lg">
                <p className="min-sm:text-wrap-balance">{ismael.contact.resume}</p>
                <a href="mailto:contacto@ivargasm.com" className="text-main-title dark:text-main-title-dark">contacto@ivargasm.com</a>
            </div>
        </section>
    )
}
