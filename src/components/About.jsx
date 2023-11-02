/* eslint-disable react/prop-types */
import {AiFillLinkedin, AiFillSkype} from 'react-icons/ai'
import { FaWhatsapp, FaTelegram } from 'react-icons/fa'
import programer from '../assets/me.jpeg'

export const About = ({ismael}) => {
    return (
        <section className='pr-5 pb-5 pl-5 sm:w-4/5 lg:w-3/5 sm:mx-auto mb-10'>
            <div className="text-center px-3 pt-2">
                <h2 className="text-4xl py-3 text-main-title dark:text-main-title-dark font-medium">{ismael.about.name}</h2>
                <h3 className="text-2xl py-2 text-subtitle dark:text-subtitle-dark">{ismael.about.title}</h3>
                <p className="text-md py-5 leading-7 text-gray dark:text-gray-dark text-wrap-balance">{ismael.about.resume} <br />
                    <span>{ismael.about.portfolio} <a href="http://ismaelvm.xyz" target="_blank" rel="noopener noreferrer" className='text-subtitle dark:text-subtitle-dark'>{ismael.about.lnk}</a></span>
                </p>
            </div>
            <div>
                <ul className='flex justify-center gap-5 text-2xl'>
                    <li><a href="https://www.linkedin.com/in/ismael-vargas-martinez-47a618195/" target='_blank' rel='noreferrer'><AiFillLinkedin className='hover:text-[#0A66C2]'/></a></li>
                    <li><a href="https://join.skype.com/invite/GRs4gM92kIPi" target='_blank' rel='noreferrer'><AiFillSkype className='hover:text-[#00AFF0]'/></a></li>
                    <li><a href="whatsapp://send/?phone=524421816860&text=Manda+el+mensaje+para+hablar&app_absent=0&lang=es" target='_blank' rel='noreferrer'><FaWhatsapp className='hover:text-[#25D366]'/></a></li>
                    <li><a href="https://t.me/ivargasm" target='_blank' rel='noreferrer'><FaTelegram className='hover:text-[#0088CC]'/></a></li>
                </ul>
            </div>
            <div className='mt-8'>
                <img src={programer} className="w-72 h-72 rounded-full mx-auto object-cover shadow-lg dark:shadow-slate-500/50 shadow-slate-900/50"  alt="" />
            </div>
        </section>
    )
}
