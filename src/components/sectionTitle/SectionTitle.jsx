import React from 'react';
// Functional component for rendering section titles
const SectionTitle = (props) => {
    // Array of section titles with their corresponding IDs
    const titles =[
        {
            id: "about",
            title: "A propos"
        },
        {
            id: "skills",
            title: "Technologies"
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
    // Find the title object that matches the provided ID prop
    const title = titles.find(title => title.id === props.id);
    
    // Render the section title component
    return (
            <div className='banner' id={props.id}>
                <h2>{title.title}</h2>
            </div>
    );
};

export default SectionTitle;