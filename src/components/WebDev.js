import React from 'react';
import AndroidPhone from './AndroidPhone.jpg';
import webApp from './webApp.jpg';
import websiteImage from './websiteImage.jpg';
import ProductCard from './ProductCard';

export default function WebDev() {
    return (
        <div>
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
    );
}
