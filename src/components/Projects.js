import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';

export default function Projects() {
    return (
        <div className='projectsContainer'>
            <h2>
                Previous Projects
            </h2>
            <ProjectCard
                cardContainer={'projectCardContainer1'}
                titleName={'projectName1'}
                label={'www.wrgcv.com'}
                site={'https://www.wrgcv.com/'}
            />
            <ProjectCard
                cardContainer={'projectCardContainer2'}
                titleName={'projectName2'}
                label={'www.confsite.com'}
                site={'https://evelandy.github.io/conference-site/'}
            />
            <ProjectCard 
                cardContainer={'projectCardContainer3'}
                titleName={'projectName3'}
                label={'www.city-guide.com'}
                site={'https://evelandy.github.io/City-guide/'}
            />
        </div>
    );
}
