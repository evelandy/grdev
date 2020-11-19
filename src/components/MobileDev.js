import React, { Fragment } from 'react';
import Media from 'react-media';
import ProductCard from './ProductCard';
import './products.css';
import iosPhone from './iosPhone.jpg';
import AndroidPhone from './AndroidPhone.jpg';
import phonesBackground from './phonesBackground.jpg';

export default function MobileDev() {
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
                        <div className='productsContainer'>
                            <h2 className="productsTitle">Mobile Development</h2>
                            <div className="productsContent">
                                <img className="phoneBg" src={phonesBackground} alt="phones background"/>
                                <p>
                                    For years GrDev has been creating impactful apps for all
                                    mobile devices, helping our clients' apps go mobile. Now you 
                                    can leverage our experience and expertise in mobile app development 
                                    to build a bold, beautiful, engaging and consistent app for your 
                                    industry, reguardless of its complexity.
                                </p>
                            </div>
                            <h2 className="productsIosTitle">iOS / Apple <br /> Mobile Development</h2>
                            <p className="productsIosDescription">
                                Wether you are looking for iOS app development services or wanting to 
                                build an app that functions as well across all Apple devies, our flexible 
                                and talented developers will help you with each and every step of the way 
                                from design and development to delivery and complete maintenance.
                            </p>
                            <ProductCard
                                containerName={'productCard'}
                                imageContainerName={'productImageContainer'}
                                imgSrc={iosPhone}
                                imgAlt={'ios Phone device'}
                                imageName={'productImage'}
                                headingContainerName={'productHeadContainer'}
                                headingName={'productHeading'}
                                headingTitle={'iOS'}
                            />
                            <div className="productsLastChild">
                                <h2 className="productsAndroidTitle">Android <br /> Mobile Development</h2>
                                <p className="productsAndroidDescription">
                                    At GrDev, we can help you build a solid solution that works on every one 
                                    of your devices regardless of brand and your industry of operation. 
                                    Our experts know every aspect of the Android platform, with experience 
                                    working with countless Android device types, brands and ecosystems. Our 
                                    Android app development services will give you a beautiful, fast and 
                                    reliable product that appeals to all your users.
                                </p>
                                <ProductCard
                                    containerName={'productCard'}
                                    imageContainerName={'productImageContainer'}
                                    imgSrc={AndroidPhone}
                                    imgAlt={'Android Phone device'}
                                    imageName={'productImage'}
                                    headingContainerName={'productHeadContainer'}
                                    headingName={'productHeading'}
                                    headingTitle={'Android'}
                                />
                            </div>
                        </div>
                    }
                </Fragment>
            )}
        </Media>
    );
}
