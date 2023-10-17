import {AiFillLinkedin, AiFillSkype} from 'react-icons/ai'
import { FaWhatsapp, FaTelegram } from 'react-icons/fa'
import programer from '../assets/me.jpeg'




export const About = () => {
    return (
        <section>
            <div className="text-center px-3 pt-10">
                <h2 className="text-4xl py-5 text-main-title dark:text-main-title-dark font-medium">Ismael Vargas Martinez</h2>
                <h3 className="text-2xl py-2 text-main-text dark:text-main-text-dark">Developer and Data Engineer</h3>
                <p className="text-md py-5 leading-7 text-gray dark:text-gray-dark text-wrap-balance">Im passionate about technology, especially web development, databases, networks, and programming. My rapid learning curve shines in these areas</p>
            </div>
            <div>
                <ul className='flex justify-center gap-5 text-2xl'>
                    <li><a href=""><AiFillLinkedin className='hover:text-[#0A66C2]'/></a></li>
                    <li><a href=""><AiFillSkype className='hover:text-[#00AFF0]'/></a></li>
                    <li><a href=""><FaWhatsapp className='hover:text-[#25D366]'/></a></li>
                    <li><a href=""><FaTelegram className='hover:text-[#0088CC]'/></a></li>
                </ul>
            </div>
            <div className='mt-8'>
                <img src={programer} className="w-72 h-72 rounded-full mx-auto shadow-2xl shadow-indigo-500/50"  alt="" />
            </div>
        </section>
    )
}
