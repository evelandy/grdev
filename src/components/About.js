import React, { Fragment } from 'react';
import Media from 'react-media';
import './about.css';
import AboutCard from './AboutCard';


export default function About() {
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
                        <AboutCard 
                            aboutContainer={'aboutContainerSm'}
                            aboutHeader={'aboutHeaderSm'}
                            aboutImg={'aboutImgSm'}
                            aboutBody={'aboutBodySm'}
                        />
                    }
                    {matches.medium && 
                        <AboutCard 
                            aboutContainer={'aboutContainerMed'}
                            aboutHeader={'aboutHeaderMed'}
                            aboutImg={'aboutImgMed'}
                            aboutBody={'aboutBodyMed'}
                        />
                    }
                    {matches.secondMed && 
                        <AboutCard 
                            aboutContainer={'aboutContainerSecMed'}
                            aboutHeader={'aboutHeaderSecMed'}
                            aboutImg={'aboutImgSecMed'}
                            aboutBody={'aboutBodySecMed'}
                        />
                    }
                    {matches.large && 
                        <AboutCard 
                            aboutContainer={'aboutContainerLg'}
                            aboutHeader={'aboutHeaderLg'}
                            aboutImg={'aboutImgLg'}
                            aboutBody={'aboutBodyLg'}
                        />
                    }
                    {matches.xxl && 
                        <AboutCard 
                            aboutContainer={'aboutContainerXXL'}
                            aboutHeader={'aboutHeaderXXL'}
                            aboutImg={'aboutImgXXL'} 
                            aboutBody={'aboutBodyXXL'}
                        />
                    }
                </Fragment>
            )}
        </Media>
    );
}
