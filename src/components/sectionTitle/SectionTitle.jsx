import React from 'react';

const SectionTitle = (props) => {
    const titles =[
        {
            id: "skills",
            title: "Mes compétences"
        },
        {
            id:"project",
            title: "Projets"
        },
        {
            id:"contact",
            title: "Contact"
        }
    ]

    const title = titles.find(title => title.id === props.id);
    
    return (
            <div className='banner' id={props.id}>
                <h2>{title.title}</h2>
            </div>
    );
};

export default SectionTitle;