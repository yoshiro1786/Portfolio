import React from "react";

const experiences = [
    {
        title: "Desarrollador Full-Stack / Front-End / Odoo",
        company: "PROEFEX",
        date: "Oct 2024 - Presente",
        description:
            "Desarrollador Full-Stack con experiencia en la creación de aplicaciones web utilizando Node.js, Express, Flask y Odoo ERP, así como en el desarrollo de interfaces modernas con Vue.js, Angular, TypeScript y JavaScript. He implementado APIs REST y GraphQL, gestionado autenticación, configurado despliegues con dominios, SSL y variables de entorno, y desarrollado módulos personalizados en Odoo usando Python, XML y PostgreSQL. Además, cuento con sólida experiencia en front-end, construyendo componentes reutilizables, sistemas de diseño adaptativos y conectando arquitecturas de componentes a APIs dinámicas.",
    },
    {
        title: "Desarrollador Front-End",
        company: "Allin Consultores",
        date: "May 2024 - Ago 2024",
        description:
            "Desarrollé el front-end de un panel administrativo enfocado en una experiencia de usuario clara y eficiente, construyendo componentes reutilizables y manteniendo una estética consistente con Tailwind CSS, React y Bootstrap. Además, optimicé la arquitectura del front-end para mejorar la escalabilidad y el mantenimiento, integrando el sistema mediante conexión REST API para un flujo de datos sólido y seguro.",
    },
];

export function Experience() {
    return (
        <div className="flex w-full flex-col gap-8 p-4 md:p-12">
            <h3 className="text-3xl font-bold text-colorDark">Experiencia Laboral</h3>
            <div className="flex flex-col gap-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2 border-b border-colorSecondaryLight pb-6 last:border-none"
                    >
                        <div className="flex flex-col justify-between md:flex-row md:items-center">
                            <h4 className="text-xl font-semibold text-colorDark">
                                {exp.title}
                            </h4>
                            <span className="text-sm font-medium text-colorSecondaryDark">
                                {exp.date}
                            </span>
                        </div>
                        <p className="text-lg font-medium text-colorSecondaryDark">
                            {exp.company}
                        </p>
                        <p className="text-base text-colorSecondaryDark opacity-80">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
