import React, { Fragment } from 'react';
import Media from 'react-media';
import AndroidPhone from './AndroidPhone.jpg';
import webApp from './webApp.jpg';
import websiteImage from './websiteImage.jpg';
import ProductCard from './ProductCard';

export default function WebDev() {
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
                        <div className='smCardContainerSecondary'>
                            <h2 className="productsTitleWeb">Web Development</h2>
                            <div className="productsContentWeb">
                                <img className="webBg" src={websiteImage} alt="website background"/>
                                <p>
                                    To ensure the highest quality product delivered on time 
                                    every time, we at GrDev have created a set of standards 
                                    for all of our developers to follow. We use the most 
                                    current technologies and pracitces at our disposal. With 
                                    the experience our design and development team has aquired 
                                    through the years, we at GrDev will make sure your site/app 
                                    will meet and exceed your expectations through careful design 
                                    and planning throughout our development process.
                                </p>
                            </div>
                            <ProductCard
                                containerName={'productCard'}
                                imageContainerName={'productImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'productImageWebApp'}
                                headingContainerName={'productHeadContainer'}
                                headingName={'productHeading'}
                                headingTitle={'Front-End'}
                            />
                            <ProductCard
                                containerName={'productCard'}
                                imageContainerName={'productImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'productImageWebApp'}
                                headingContainerName={'productHeadContainer'}
                                headingName={'productHeading'}
                                headingTitle={'Back-End'}
                            />
                            <ProductCard
                                containerName={'productCard'}
                                imageContainerName={'productImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'productImageWebApp'}
                                headingContainerName={'productHeadContainer'}
                                headingName={'productHeading'}
                                headingTitle={'Full-Stack'}
                            />
                        </div>
                    }
                    {matches.medium &&
                        <div className="medCardContainerSecondary">
                            <h2 className="medProductsTitleWeb">Web Development</h2>
                            <div className="medProductsContentWeb">
                                <img className="medWebBg" src={websiteImage} alt="website background"/>
                                <p>
                                    To ensure the highest quality product delivered on time 
                                    every time, we at GrDev have created a set of standards 
                                    for all of our developers to follow. We use the most 
                                    current technologies and pracitces at our disposal. With 
                                    the experience our design and development team has aquired 
                                    through the years, we at GrDev will make sure your site/app 
                                    will meet and exceed your expectations through careful design 
                                    and planning throughout our development process.
                                </p>
                            </div>
                            <ProductCard
                                containerName={'medProductCard'}
                                imageContainerName={'medProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'medProductImageWebApp'}
                                headingContainerName={'medProductHeadContainer'}
                                headingName={'medProductHeading'}
                                headingTitle={'Front-End'}
                            />
                            <ProductCard
                                containerName={'medProductCard'}
                                imageContainerName={'medProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'medProductImageWebApp'}
                                headingContainerName={'medProductHeadContainer'}
                                headingName={'medProductHeading'}
                                headingTitle={'Back-End'}
                            />
                            <ProductCard
                                containerName={'medProductCard'}
                                imageContainerName={'medProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'medProductImageWebApp'}
                                headingContainerName={'medProductHeadContainer'}
                                headingName={'medProductHeading'}
                                headingTitle={'Full-Stack'}
                            />
                        </div>
                    }
                    {matches.secondMed &&
                        <div className="secMedCardContainerSecondary">
                            <h2 className="secMedProductsTitleWeb">Web Development</h2>
                            <div className="secMedProductsContentWeb">
                                <img className="secMedWebBg" src={websiteImage} alt="website background"/>
                                <p>
                                    To ensure the highest quality product delivered on time 
                                    every time, we at GrDev have created a set of standards 
                                    for all of our developers to follow. We use the most 
                                    current technologies and pracitces at our disposal. With 
                                    the experience our design and development team has aquired 
                                    through the years, we at GrDev will make sure your site/app 
                                    will meet and exceed your expectations through careful design 
                                    and planning throughout our development process.
                                </p>
                            </div>
                            <ProductCard
                                containerName={'secMedProductCard'}
                                imageContainerName={'secMedProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'secMedProductImageWebApp'}
                                headingContainerName={'secMedProductHeadContainer'}
                                headingName={'secMedProductHeading'}
                                headingTitle={'Front-End'}
                            />
                            <ProductCard
                                containerName={'secMedProductCard'}
                                imageContainerName={'secMedProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'secMedProductImageWebApp'}
                                headingContainerName={'secMedProductHeadContainer'}
                                headingName={'secMedProductHeading'}
                                headingTitle={'Back-End'}
                            />
                            <ProductCard
                                containerName={'secMedProductCard'}
                                imageContainerName={'secMedProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'secMedProductImageWebApp'}
                                headingContainerName={'secMedProductHeadContainer'}
                                headingName={'secMedProductHeading'}
                                headingTitle={'Full-Stack'}
                            />
                        </div>
                    }
                    {matches.large &&
                        <div className="lgCardContainerSecondary">
                            <h2 className="lgProductsTitleWeb">Web Development</h2>
                            <div className="lgProductsContentWeb">
                                <img className="lgWebBg" src={websiteImage} alt="website background"/>
                                <p>
                                    To ensure the highest quality product delivered on time 
                                    every time, we at GrDev have created a set of standards 
                                    for all of our developers to follow. We use the most 
                                    current technologies and pracitces at our disposal. With 
                                    the experience our design and development team has aquired 
                                    through the years, we at GrDev will make sure your site/app 
                                    will meet and exceed your expectations through careful design 
                                    and planning throughout our development process.
                                </p>
                            </div>
                            <ProductCard
                                containerName={'lgProductCard'}
                                imageContainerName={'lgProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'lgProductImageWebApp'}
                                headingContainerName={'lgProductHeadContainer'}
                                headingName={'lgProductHeading'}
                                headingTitle={'Front-End'}
                            />
                            <ProductCard
                                containerName={'lgProductCard'}
                                imageContainerName={'lgProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'lgProductImageWebApp'}
                                headingContainerName={'lgProductHeadContainer'}
                                headingName={'lgProductHeading'}
                                headingTitle={'Back-End'}
                            />
                            <ProductCard
                                containerName={'lgProductCard'}
                                imageContainerName={'lgProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'lgProductImageWebApp'}
                                headingContainerName={'lgProductHeadContainer'}
                                headingName={'lgProductHeading'}
                                headingTitle={'Full-Stack'}
                            />
                        </div>
                    }
                    {matches.xxl &&
                        <div className="XXLCardContainerSecondary">
                            <h2 className="XXLProductsTitleWeb">Web Development</h2>
                            <div className="XXLProductsContentWeb">
                                <img className="XXLWebBg" src={websiteImage} alt="website background"/>
                                <p>
                                    To ensure the highest quality product delivered on time 
                                    every time, we at GrDev have created a set of standards 
                                    for all of our developers to follow. We use the most 
                                    current technologies and pracitces at our disposal. With 
                                    the experience our design and development team has aquired 
                                    through the years, we at GrDev will make sure your site/app 
                                    will meet and exceed your expectations through careful design 
                                    and planning throughout our development process.
                                </p>
                            </div>
                            <ProductCard
                                containerName={'XXLProductCard'}
                                imageContainerName={'XXLProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'XXLProductImageWebApp'}
                                headingContainerName={'XXLProductHeadContainer'}
                                headingName={'XXLProductHeading'}
                                headingTitle={'Front-End'}
                            />
                            <ProductCard
                                containerName={'XXLProductCard'}
                                imageContainerName={'XXLProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'XXLProductImageWebApp'}
                                headingContainerName={'XXLProductHeadContainer'}
                                headingName={'XXLProductHeading'}
                                headingTitle={'Back-End'}
                            />
                            <ProductCard
                                containerName={'XXLProductCard'}
                                imageContainerName={'XXLProductImageContainer'}
                                imgSrc={webApp}
                                imgAlt={'Web'}
                                imageName={'XXLProductImageWebApp'}
                                headingContainerName={'XXLProductHeadContainer'}
                                headingName={'XXLProductHeading'}
                                headingTitle={'Full-Stack'}
                            />
                        </div>
                    }
                </Fragment>
            )}
        </Media>
    );
}
