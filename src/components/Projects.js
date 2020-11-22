import React, { Fragment } from 'react';
import Media from 'react-media';
import ProjectCard from './ProjectCard';
import './projects.css';

export default function Projects() {
    return (
        <Media queries={{
            small: "(max-width: 425px)",
            medium: "(min-width: 426px) and (max-width: 699px)",
            secondMed: "(min-width: 700px) and (max-width: 1023px)",
            large: "(min-width: 1024px) and (max-width: 1439px)",
            xxl: "(min-width: 1440px)"
        }}>
           {matches => (
               <Fragment>
                   {matches.small &&
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
                   }
                   {matches.medium && 
                        <div className='medProjectsContainer'>
                            <h2>
                                Previous Projects
                            </h2>
                            <ProjectCard
                                cardContainer={'medProjectCardContainer1'}
                                titleName={'medProjectName1'}
                                label={'www.wrgcv.com'}
                                site={'https://www.wrgcv.com/'}
                            />
                            <ProjectCard
                                cardContainer={'medProjectCardContainer2'}
                                titleName={'medProjectName2'}
                                label={'www.confsite.com'}
                                site={'https://evelandy.github.io/conference-site/'}
                            />
                            <ProjectCard 
                                cardContainer={'medProjectCardContainer3'}
                                titleName={'medProjectName3'}
                                label={'www.city-guide.com'}
                                site={'https://evelandy.github.io/City-guide/'}
                            />
                        </div>
                   }
                   {matches.secondMed && 
                        <div className='secMedProjectsContainer'>
                            <h2>
                                Previous Projects
                            </h2>
                            <ProjectCard
                                cardContainer={'secMedProjectCardContainer1'}
                                titleName={'secMedProjectName1'}
                                label={'www.wrgcv.com'}
                                site={'https://www.wrgcv.com/'}
                            />
                            <ProjectCard
                                cardContainer={'secMedProjectCardContainer2'}
                                titleName={'secMedProjectName2'}
                                label={'www.confsite.com'}
                                site={'https://evelandy.github.io/conference-site/'}
                            />
                            <ProjectCard 
                                cardContainer={'secMedProjectCardContainer3'}
                                titleName={'secMedProjectName3'}
                                label={'www.city-guide.com'}
                                site={'https://evelandy.github.io/City-guide/'}
                            />
                    </div>
                   }
                   {matches.large &&
                        <div className='lgProjectsContainer'>
                            <h2>
                                Previous Projects
                            </h2>
                            <ProjectCard
                                cardContainer={'lgProjectCardContainer1'}
                                titleName={'lgProjectName1'}
                                label={'www.wrgcv.com'}
                                site={'https://www.wrgcv.com/'}
                            />
                            <ProjectCard
                                cardContainer={'lgProjectCardContainer2'}
                                titleName={'lgProjectName2'}
                                label={'www.confsite.com'}
                                site={'https://evelandy.github.io/conference-site/'}
                            />
                            <ProjectCard 
                                cardContainer={'lgProjectCardContainer3'}
                                titleName={'lgProjectName3'}
                                label={'www.city-guide.com'}
                                site={'https://evelandy.github.io/City-guide/'}
                            />
                        </div>
                   }
                   {matches.xxl && 
                        <div className='XXLProjectsContainer'>
                            <h2>
                                Previous Projects
                            </h2>
                            <ProjectCard
                                cardContainer={'XXLProjectCardContainer1'}
                                titleName={'XXLProjectName1'}
                                label={'www.wrgcv.com'}
                                site={'https://www.wrgcv.com/'}
                            />
                            <ProjectCard
                                cardContainer={'XXLProjectCardContainer2'}
                                titleName={'XXLProjectName2'}
                                label={'www.confsite.com'}
                                site={'https://evelandy.github.io/conference-site/'}
                            />
                            <ProjectCard 
                                cardContainer={'XXLProjectCardContainer3'}
                                titleName={'XXLProjectName3'}
                                label={'www.city-guide.com'}
                                site={'https://evelandy.github.io/City-guide/'}
                            />
                        </div>
                   }
               </Fragment>
           )} 
        </Media>
    );
}
