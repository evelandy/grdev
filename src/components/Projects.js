import React, { Fragment } from 'react';
import Media from 'react-media';
import ProjectCard from './ProjectCard';
import './projects.css';

import wrgcv_screenshot from './wrgcv_screenshot.png';
import conf_screenshot from './conf_screenshot.png';
import city_screenshot from './city_screenshot.png';

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
                            <h2 className="projectsHeader">Previous Projects</h2>
                            <span className="projectCardContainerMain">
                                <ProjectCard
                                    cardClass={'projectCardContainer'}
                                    imgSrc={wrgcv_screenshot}
                                    alt={'wrgcv.com screenshot'}
                                    imgClass={'projectImg'}
                                    titleNameClass={'projectName'}
                                    label={'www.wrgcv.com'}
                                    site={'https://www.wrgcv.com'}
                                />
                                <ProjectCard
                                    ccardClass={'projectCardContainer'}
                                    imgSrc={conf_screenshot}
                                    alt={'conference site screenshot'}
                                    imgClass={'projectImg'}
                                    titleNameClass={'projectName'}
                                    label={'conference site'}
                                    site={'https://evelandy.github.io/conference-site/'}
                                />
                                <ProjectCard 
                                    cardClass={'projectCardContainer'}
                                    imgSrc={city_screenshot}
                                    alt={'city-guide screenshot'}
                                    imgClass={'projectImg'}
                                    titleNameClass={'projectName'}
                                    label={'city-guide site'}
                                    site={'https://evelandy.github.io/City-guide/'}
                                />
                            </span>
                        </div>
                   }
                   {matches.medium && 
                        <div className='medProjectsContainer'>
                            <h2 className="medProjectsHeader">Previous Projects</h2>
                            <span className="medProjectCardContainerMain">
                            <ProjectCard
                                    cardClass={'medProjectCardContainer'}
                                    imgSrc={wrgcv_screenshot}
                                    alt={'wrgcv.com screenshot'}
                                    imgClass={'medProjectImg'}
                                    titleNameClass={'medProjectName'}
                                    label={'www.wrgcv.com'}
                                    site={'https://www.wrgcv.com'}
                                />
                                <ProjectCard
                                    cardClass={'medProjectCardContainer'}
                                    imgSrc={conf_screenshot}
                                    alt={'conference site screenshot'}
                                    imgClass={'medProjectImg'}
                                    titleNameClass={'medProjectName'}
                                    label={'conference site'}
                                    site={'https://evelandy.github.io/conference-site/'}
                                />
                                <ProjectCard 
                                    cardClass={'medProjectCardContainer'}
                                    imgSrc={city_screenshot}
                                    alt={'city-guide screenshot'}
                                    imgClass={'medProjectImg'}
                                    titleNameClass={'medProjectName'}
                                    label={'city-guide site'}
                                    site={'https://evelandy.github.io/City-guide/'}
                                />
                            </span>
                        </div>
                   }
                   {matches.secondMed && 
                        <div className='secMedProjectsContainer'>
                            <h2 className="secMedProjectsHeader">Previous Projects</h2>
                            <span className="secMedProjectCardContainerMain">
                                <ProjectCard
                                    cardClass={'secMedProjectCardContainer'}
                                    imgSrc={wrgcv_screenshot}
                                    alt={'wrgcv.com screenshot'}
                                    imgClass={'secMedProjectImg'}
                                    titleNameClass={'secMedProjectName'}
                                    label={'www.wrgcv.com'}
                                    site={'https://www.wrgcv.com'}
                                />
                                <ProjectCard
                                    cardClass={'secMedProjectCardContainer'}
                                    imgSrc={conf_screenshot}
                                    alt={'conference site screenshot'}
                                    imgClass={'secMedProjectImg'}
                                    titleNameClass={'secMedProjectName'}
                                    label={'conference site'}
                                    site={'https://evelandy.github.io/conference-site/'}
                                />
                                <ProjectCard 
                                    cardClass={'secMedProjectCardContainer'}
                                    imgSrc={city_screenshot}
                                    alt={'city-guide screenshot'}
                                    imgClass={'secMedProjectImg'}
                                    titleNameClass={'secMedProjectName'}
                                    label={'city-guide site'}
                                    site={'https://evelandy.github.io/City-guide/'}
                                />
                            </span>
                        </div>
                   }
                   {matches.large &&
                        <div className='lgProjectsContainer'>
                            <h2 className="lgProjectsHeader">Previous Projects</h2>
                            <span className="lgProjectCardContainerMain">
                                <ProjectCard
                                    cardClass={'lgProjectCardContainer'}
                                    imgSrc={wrgcv_screenshot}
                                    alt={'wrgcv.com screenshot'}
                                    imgClass={'lgProjectImg'}
                                    titleNameClass={'lgProjectName'}
                                    label={'www.wrgcv.com'}
                                    site={'https://www.wrgcv.com'}
                                />
                                <ProjectCard
                                    cardClass={'lgProjectCardContainer'}
                                    imgSrc={conf_screenshot}
                                    alt={'conference site screenshot'}
                                    imgClass={'lgProjectImg'}
                                    titleNameClass={'lgProjectName'}
                                    label={'conference site'}
                                    site={'https://evelandy.github.io/conference-site/'}
                                />
                                <ProjectCard 
                                    cardClass={'lgProjectCardContainer'}
                                    imgSrc={city_screenshot}
                                    alt={'city-guide screenshot'}
                                    imgClass={'lgProjectImg'}
                                    titleNameClass={'lgProjectName'}
                                    label={'city-guide site'}
                                    site={'https://evelandy.github.io/City-guide/'}
                                />
                            </span>
                        </div>
                   }
                   {matches.xxl && 
                        <div className='XXLProjectsContainer'>
                            <h2 className="XXLProjectsHeader">Previous Projects</h2>
                            <span className="XXLProjectCardContainerMain">
                                <ProjectCard
                                    cardClass={'XXLProjectCardContainer'}
                                    imgSrc={wrgcv_screenshot}
                                    alt={'wrgcv.com screenshot'}
                                    imgClass={'XXLProjectImg'}
                                    titleNameClass={'XXLProjectName'}
                                    label={'www.wrgcv.com'}
                                    site={'https://www.wrgcv.com'}
                                    // cardContainer={'XXLProjectCardContainer1'}
                                    // titleName={'XXLProjectName1'}
                                    // label={'www.wrgcv.com'}
                                    // site={'https://www.wrgcv.com/'}

                                />
                                <ProjectCard
                                    cardClass={'XXLProjectCardContainer'}
                                    imgSrc={conf_screenshot}
                                    alt={'conference site screenshot'}
                                    imgClass={'XXLProjectImg'}
                                    titleNameClass={'XXLProjectName'}
                                    label={'conference site'}
                                    site={'https://evelandy.github.io/conference-site/'}
                                    // cardContainer={'XXLProjectCardContainer2'}
                                    // titleName={'XXLProjectName2'}
                                    // label={'conference site'}
                                    // site={'https://evelandy.github.io/conference-site/'}
                                />
                                <ProjectCard 
                                    cardClass={'XXLProjectCardContainer'}
                                    imgSrc={city_screenshot}
                                    alt={'city-guide site screenshot'}
                                    imgClass={'XXLProjectImg'}
                                    titleNameClass={'XXLProjectName'}
                                    label={'city-guide site'}
                                    site={'https://evelandy.github.io/City-guide/'}
                                    // cardContainer={'XXLProjectCardContainer3'}
                                    // titleName={'XXLProjectName3'}
                                    // label={'city-guide'}
                                    // site={'https://evelandy.github.io/City-guide/'}
                                />
                            </span>
                        </div>
                   }
               </Fragment>
           )} 
        </Media>
    );
}
