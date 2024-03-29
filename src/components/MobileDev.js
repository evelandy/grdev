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
                    {matches.medium && 
                        <div className='medProductsContainer'>
                            <h2 className="medProductsTitle">Mobile Development</h2>
                            <div className="medProductsContent">
                                <img className="medPhoneBg" src={phonesBackground} alt="phones background"/>
                                <p>
                                    For years GrDev has been creating impactful apps for all
                                    mobile devices, helping our clients' apps go mobile. Now you 
                                    can leverage our experience and expertise in mobile app development 
                                    to build a bold, beautiful, engaging and consistent app for your 
                                    industry, reguardless of its complexity.
                                </p>
                            </div>
                            <h2 className="medProductsIosTitle">iOS / Apple <br /> Mobile Development</h2>
                            <p className="medProductsIosDescription">
                                Wether you are looking for iOS app development services or wanting to 
                                build an app that functions as well across all Apple devies, our flexible 
                                and talented developers will help you with each and every step of the way 
                                from design and development to delivery and complete maintenance.
                            </p>
                            <ProductCard
                                containerName={'medProductCard'}
                                imageContainerName={'medProductImageContainer'}
                                imgSrc={iosPhone}
                                imgAlt={'ios Phone device'}
                                imageName={'medProductImage'}
                                headingContainerName={'medProductHeadContainer'}
                                headingName={'medProductHeading'}
                                headingTitle={'iOS'}
                            />
                            <div className="medProductsLastChild">
                                <h2 className="medProductsAndroidTitle">Android <br /> Mobile Development</h2>
                                <p className="medProductsAndroidDescription">
                                    At GrDev, we can help you build a solid solution that works on every one 
                                    of your devices regardless of brand and your industry of operation. 
                                    Our experts know every aspect of the Android platform, with experience 
                                    working with countless Android device types, brands and ecosystems. Our 
                                    Android app development services will give you a beautiful, fast and 
                                    reliable product that appeals to all your users.
                                </p>
                                <ProductCard
                                    containerName={'medProductCard'}
                                    imageContainerName={'medProductImageContainer'}
                                    imgSrc={AndroidPhone}
                                    imgAlt={'Android Phone device'}
                                    imageName={'medProductImage'}
                                    headingContainerName={'medProductHeadContainer'}
                                    headingName={'medProductHeading'}
                                    headingTitle={'Android'}
                                />
                            </div>
                        </div>
                    }
                    {matches.secondMed && 
                        <div className='secMedProductsContainer'>
                            <h2 className="secMedProductsTitle">Mobile Development</h2>
                            <div className="secMedProductsContent">
                                <img className="secMedPhoneBg" src={phonesBackground} alt="phones background"/>
                                <p>
                                    For years GrDev has been creating impactful apps for all
                                    mobile devices, helping our clients' apps go mobile. Now you 
                                    can leverage our experience and expertise in mobile app development 
                                    to build a bold, beautiful, engaging and consistent app for your 
                                    industry, reguardless of its complexity.
                                </p>
                            </div>
                            <h2 className="secMedProductsIosTitle">iOS / Apple <br /> Mobile Development</h2>
                            <p className="secMedProductsIosDescription">
                                Wether you are looking for iOS app development services or wanting to 
                                build an app that functions as well across all Apple devies, our flexible 
                                and talented developers will help you with each and every step of the way 
                                from design and development to delivery and complete maintenance.
                            </p>
                            <ProductCard
                                containerName={'secMedProductCard'}
                                imageContainerName={'secMedProductImageContainer'}
                                imgSrc={iosPhone}
                                imgAlt={'ios Phone device'}
                                imageName={'secMedProductImage'}
                                headingContainerName={'secMedProductHeadContainer'}
                                headingName={'secMedProductHeading'}
                                headingTitle={'iOS'}
                            />
                            <div className="secMedProductsLastChild">
                                <h2 className="secMedProductsAndroidTitle">Android <br /> Mobile Development</h2>
                                <p className="secMedProductsAndroidDescription">
                                    At GrDev, we can help you build a solid solution that works on every one 
                                    of your devices regardless of brand and your industry of operation. 
                                    Our experts know every aspect of the Android platform, with experience 
                                    working with countless Android device types, brands and ecosystems. Our 
                                    Android app development services will give you a beautiful, fast and 
                                    reliable product that appeals to all your users.
                                </p>
                                <ProductCard
                                    containerName={'secMedProductCard'}
                                    imageContainerName={'secMedProductImageContainer'}
                                    imgSrc={AndroidPhone}
                                    imgAlt={'Android Phone device'}
                                    imageName={'secMedProductImage'}
                                    headingContainerName={'secMedProductHeadContainer'}
                                    headingName={'secMedProductHeading'}
                                    headingTitle={'Android'}
                                />
                            </div>
                        </div>
                    }
                    {matches.large && 
                        <div className='lgProductsContainer'>
                            <h2 className="lgProductsTitle">Mobile Development</h2>
                            <div className="lgProductsContent">
                                <img className="lgPhoneBg" src={phonesBackground} alt="phones background"/>
                                <p>
                                    For years GrDev has been creating impactful apps for all
                                    mobile devices, helping our clients' apps go mobile. Now you 
                                    can leverage our experience and expertise in mobile app development 
                                    to build a bold, beautiful, engaging and consistent app for your 
                                    industry, reguardless of its complexity.
                                </p>
                            </div>
                            <h2 className="lgProductsIosTitle">iOS / Apple <br /> Mobile Development</h2>
                            <p className="lgProductsIosDescription">
                                Wether you are looking for iOS app development services or wanting to 
                                build an app that functions as well across all Apple devies, our flexible 
                                and talented developers will help you with each and every step of the way 
                                from design and development to delivery and complete maintenance.
                            </p>
                            <ProductCard
                                containerName={'lgProductCard'}
                                imageContainerName={'lgProductImageContainer'}
                                imgSrc={iosPhone}
                                imgAlt={'ios Phone device'}
                                imageName={'lgProductImage'}
                                headingContainerName={'lgProductHeadContainer'}
                                headingName={'lgProductHeading'}
                                headingTitle={'iOS'}
                            />
                            <div className="lgProductsLastChild">
                                <h2 className="lgProductsAndroidTitle">Android <br /> Mobile Development</h2>
                                <p className="lgProductsAndroidDescription">
                                    At GrDev, we can help you build a solid solution that works on every one 
                                    of your devices regardless of brand and your industry of operation. 
                                    Our experts know every aspect of the Android platform, with experience 
                                    working with countless Android device types, brands and ecosystems. Our 
                                    Android app development services will give you a beautiful, fast and 
                                    reliable product that appeals to all your users.
                                </p>
                                <ProductCard
                                    containerName={'lgProductCard'}
                                    imageContainerName={'lgProductImageContainer'}
                                    imgSrc={AndroidPhone}
                                    imgAlt={'Android Phone device'}
                                    imageName={'lgProductImage'}
                                    headingContainerName={'lgProductHeadContainer'}
                                    headingName={'lgProductHeading'}
                                    headingTitle={'Android'}
                                />
                            </div>
                        </div>
                    }
                    {matches.xxl && 
                        <div className='XXLProductsContainer'>
                            <h2 className="XXLProductsTitle">Mobile Development</h2>
                            <div className="XXLProductsContent">
                                <img className="XXLPhoneBg" src={phonesBackground} alt="phones background"/>
                                <p>
                                    For years GrDev has been creating impactful apps for all
                                    mobile devices, helping our clients' apps go mobile. Now you 
                                    can leverage our experience and expertise in mobile app development 
                                    to build a bold, beautiful, engaging and consistent app for your 
                                    industry, reguardless of its complexity.
                                </p>
                            </div>
                            <h2 className="XXLProductsIosTitle">iOS / Apple <br /> Mobile Development</h2>
                            <p className="XXLProductsIosDescription">
                                Wether you are looking for iOS app development services or wanting to 
                                build an app that functions as well across all Apple devies, our flexible 
                                and talented developers will help you with each and every step of the way 
                                from design and development to delivery and complete maintenance.
                            </p>
                            <ProductCard
                                containerName={'XXLProductCard'}
                                imageContainerName={'XXLProductImageContainer'}
                                imgSrc={iosPhone}
                                imgAlt={'ios Phone device'}
                                imageName={'XXLProductImage'}
                                headingContainerName={'XXLProductHeadContainer'}
                                headingName={'XXLProductHeading'}
                                headingTitle={'iOS'}
                            />
                            <div className="XXLProductsLastChild">
                                <h2 className="XXLProductsAndroidTitle">Android <br /> Mobile Development</h2>
                                <p className="XXLProductsAndroidDescription">
                                    At GrDev, we can help you build a solid solution that works on every one 
                                    of your devices regardless of brand and your industry of operation. 
                                    Our experts know every aspect of the Android platform, with experience 
                                    working with countless Android device types, brands and ecosystems. Our 
                                    Android app development services will give you a beautiful, fast and 
                                    reliable product that appeals to all your users.
                                </p>
                                <ProductCard
                                    containerName={'XXLProductCard'}
                                    imageContainerName={'XXLProductImageContainer'}
                                    imgSrc={AndroidPhone}
                                    imgAlt={'Android Phone device'}
                                    imageName={'XXLProductImage'}
                                    headingContainerName={'XXLProductHeadContainer'}
                                    headingName={'XXLProductHeading'}
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
