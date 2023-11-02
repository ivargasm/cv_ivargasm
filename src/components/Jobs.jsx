/* eslint-disable react/prop-types */
import { useState } from 'react';

export const Jobs = ({ ismael }) => {
    // Inicializa el primer acordeón como abierto
    const [activeAccordion, setActiveAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setActiveAccordion(index === activeAccordion ? null : index);
    };

    // Obtén la información de trabajos desde el JSON
    const jobsData = ismael.jobs;

    return (
        <section className="px-4 py-10 pb-12 text-main-text dark:text-main-text-dark bg-main-bg dark:bg-main-bg-dark w-11/12 mx-auto">
            <h3 className="text-3xl py-3 text-center font-ubuntu mb-5 text-subtitle dark:text-subtitle-dark">
                {jobsData.title}
            </h3>
            <div className="rounded-lg flex flex-col gap-5">
                {Object.keys(jobsData)
                    .filter((key) => key !== 'title') // Filtra el título
                    .map((jobKey, index) => {
                        const job = jobsData[jobKey];
                        return (
                            <JobAccordion
                                key={jobKey}
                                title={job.title}
                                resume={job.resume}
                                activities={job.activities}
                                isActive={index === activeAccordion}
                                toggleAccordion={() => toggleAccordion(index)}
                            />
                        );
                    })}
            </div>
        </section>
    );
};

const JobAccordion = ({ title, resume, activities, isActive, toggleAccordion }) => (
    <div className={`rounded-md bg-main-bg-90 dark:bg-main-bg-dark-90 shadow dark:shadow-shadow-dark`}>
        <div
            className="p-4 cursor-pointer text-subtitle dark:text-subtitle-dark text-lg"
            onClick={toggleAccordion}
        >
            {title}
        </div>
        <div
            className={`overflow-hidden transition-all ease-in-out duration-500 rounded-b-md bg-main-bg dark:bg-main-bg-dark text-main-text dark:text-gray-dark ${isActive ? 'maxHeight' : 'minHeight'}`}
        >
            <div className="p-4 text-wrap-balance">
                <p className="mb-3">{resume}</p>
                <ul className="list-disc list-inside pl-3">
                    {activities &&
                        Object.keys(activities).map((activityKey) => (
                            <li key={activityKey}>{activities[activityKey]}</li>
                        ))}
                </ul>
            </div>
        </div>
    </div>
);
