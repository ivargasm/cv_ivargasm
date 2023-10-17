import db from '../assets/db.jpeg'
import wd from '../assets/wd.jpeg'
import etl from '../assets/etl.jpeg'

export const Services = () => {
    return (
        <section className="text-main-text dark:text-main-text-dark bg-section-light dark:bg-section-dark-90 py-10">
            <h3 className='text-3xl py-3 text-center font-ubuntu mb-7'>Services</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center w-4/5 sm:w-5/6 mx-auto'>
                <div className='shadow-lg rounded-xl py-5 shadow-slate-800/70 dark:shadow-slate-400/20'>
                    <div className='flex flex-col overflow-hidden items-center'>
                        <img src={db} alt="" className=' object-cover w-2/5 rounded-full ' />
                        <h4 className='text-2xl text-main-text dark:text-main-text-dark'>Database</h4>
                    </div>
                    <p className='px-5 text-center text-main-text dark:text-gray-dark leading-7 text-wrap-balance'>Design and administration of relational databases with the best practices for optimal performance.</p>
                </div>
                <div className='shadow-lg rounded-xl py-5 shadow-slate-800/70 dark:shadow-slate-400/20'>
                    <div className='flex flex-col overflow-hidden items-center'>
                        <img src={wd} alt="" className=' object-cover w-2/5 rounded-full ' />
                        <h4 className='text-2xl text-main-text dark:text-main-text-dark'>Web desing</h4>
                    </div>
                    <p className='px-5 text-center text-text-main-text dark:text-gray-dark leading-7 text-wrap-balance'>Design and layout of websites using the best practices for the &quot;SEO&quot; positioning of the page.</p>
                </div>
                <div className='shadow-lg rounded-xl py-5 shadow-slate-800/70 dark:shadow-slate-400/20 sm:col-span-2 md:col-span-1'>
                    <div className='flex flex-col overflow-hidden items-center'>
                        <img src={etl} alt="" className=' object-cover w-2/5 rounded-full ' />
                        <h4 className='text-2xl text-main-text dark:text-main-text-dark'>ETLs</h4>
                    </div>
                    <p className='px-5 text-center text-text-main-text dark:text-gray-dark leading-7 text-wrap-balance'>Analysis and design of ETLs for the transformation and management of information in an automated way.</p>
                </div>
            </div>
        </section>
    )
}
