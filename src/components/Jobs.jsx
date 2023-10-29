export const Jobs = () => {

    const toggleAcordeon = (event) => {
        const elemento = event.currentTarget;
        const contenido = elemento.querySelector(".overflow-hidden");
        if (contenido.style.maxHeight && contenido.style.maxHeight !== '0px') {
            contenido.style.maxHeight = '0px';
        } else {
            contenido.style.maxHeight = '1000px';
        }
    }
    

    return (
        <section className="px-4 py-10 pb-12 text-main-text dark:text-main-text-dark bg-main-bg dark:bg-main-bg-dark w-11/12 mx-auto">
            <h3 className='text-3xl py-3 text-center font-ubuntu mb-5 text-subtitle dark:text-subtitle-dark'>Jobs</h3>
            <div className="rounded-lg flex flex-col gap-5">
                <div className="rounded-md bg-main-bg-90 dark:bg-main-bg-dark-90 shadow dark:shadow-shadow-dark" onClick={toggleAcordeon}>
                    <div className="p-4 cursor-pointer text-subtitle dark:text-subtitle-dark text-lg">
                        Storechek - Sep 2017 - Data Leader
                    </div>
                    <div className="overflow-hidden transition-all ease-in-out duration-500 rounded-b-md bg-main-bg dark:bg-main-bg-dark text-main-text dark:text-gray-dark" style={{maxHeight: '1000px'}}>
                        <div className="p-4 text-wrap-balance">
                            <p className='mb-3'>Storecheck is a Market Intelligence company in which I have been able to participate in several projects helping clients to optimize their processes by automating them through the application of ETLs, designing databases and leading teams.</p>
                            <ul className='list-disc list-inside pl-3'>
                                <li>Team lead.</li>
                                <li>Database design.</li>
                                <li>Database development.</li>
                                <li>Relational database management and star mode</li>
                                <li>Query optimization</li>
                                <li>Data processing automation</li>
                                <li>Development of Etls with Pentaho</li>
                                <li>Developing Etls with Amazon Glue</li>
                                <li>Reporting with Amazon Quicksight</li>
                                <li>Programming with python</li>
                                <li>Data analysis.</li>
                                <li>Participation in different market intelligence projects as a database analyst and/or project leader</li>
                                <li>Development of algorithms in Python language for data manipulation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-main-bg-90 dark:bg-main-bg-dark-90 shadow dark:shadow-shadow-dark" onClick={toggleAcordeon}>
                    <div className="p-4 cursor-pointer text-subtitle dark:text-subtitle-dark text-lg">
                        IT Services Coordinator - Sep 2009 - Jun 2017
                    </div>
                    <div className="overflow-hidden transition-all ease-in-out duration-500 rounded-b-md bg-main-bg dark:bg-main-bg-dark text-main-text dark:text-gray-dark" style={{maxHeight: '0'}}>
                        <div className="p-4 text-wrap-balance">
                            <p className='mb-3'>At UNEA I had the opportunity to start as part of the systems department team, supporting all campus staff and students, performing maintenance on computer equipment and the wired and wireless network. Some time later I was given the opportunity to take the position of coordinator of computer services, so my functions changed and I had more administrative functions (dealing with suppliers, planning of new projects, direction of projects and teams.) and security (configuration of security policies, server administration)</p>
                            <ul className='list-disc list-inside pl-3'>
                                <li>Teacher</li>
                                <li>Planning of operational strategies: Preparation, design and updating of operation manuals and procedures</li>
                                <li>Network policy settings</li>
                                <li>Management for the acquisition of technological resources</li>
                                <li>Coordinate voice and data network expansions</li>
                                <li>Preventive/corrective hardware/software maintenance</li>
                                <li>Wired and wireless network maintenance</li>
                                <li>Installing  operating systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-main-bg-90 dark:bg-main-bg-dark-90 shadow dark:shadow-shadow-dark" onClick={toggleAcordeon}>
                    <div className="p-4 cursor-pointer text-subtitle dark:text-subtitle-dark text-lg">
                        Children of Belen
                    </div>
                    <div className="overflow-hidden transition-all ease-in-out duration-500 rounded-b-md bg-main-bg dark:bg-main-bg-dark text-main-text dark:text-gray-dark" style={{maxHeight: '0'}}>
                        <div className="p-4 text-wrap-balance">
                            <p className='mb-3'>In the nursery and preschool Children of Belen I had the opportunity to work Tae Kwon Do classes for children implementing a methodology that allows them to develop their abilities not only in this martial art but in all physical activity developing their psychomotor faculties.</p>
                            <ul className='list-disc list-inside pl-3'>
                                <li>Main activities: design, maintenance and automation of database systems, project address and work teams.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
