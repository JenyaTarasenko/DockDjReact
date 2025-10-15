
import React, { useEffect, useState } from 'react';




function ListViews(){
    const[projects, setProjects] = useState([]);


  
    useEffect(() => {
        fetch('http://localhost:8001/api/projects/')
          .then(res => res.json())
          .then(data => setProjects(data))
          .catch(err => console.error('Error loading products:', err));
      }, []);

    return(
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <img src={project.image} />
                   
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ListViews;