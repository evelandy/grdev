import React, { Fragment } from 'react';
import Media from 'react-media';
import ProductCard from './ProductCard';
import './products.css';
import iosPhone from './iosPhone.jpg';
import AndroidPhone from './AndroidPhone.jpg';
import phoneSelection from './phoneSelection.jpg';
import webSelection from './webSelection.png';
import phonesBackground from './phonesBackground.jpg';
import MobileDev from './MobileDev';
import { Link } from 'react-router-dom';

export default function Products() {
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
                        <div className="productServices">
                            <h2 className="productServicesTitle">
                                Our Services
                            </h2>
                            <div className="servicesLink">
                                <div className="mobileSelection">
                                    <img className="phoneSelection" src={phoneSelection} alt="phone selection" />
                                    <Link to="/mobile" className="mobileDev">Mobile Development</Link>
                                </div>
                                <div className="webSelection">
                                    <img src={webSelection} className="webSelectPic" alt="web selection" />
                                    <Link to="/web" className="webDev">Web Development</Link>
                                </div>
                            </div>
                        </div>
                    }
                    {matches.medium && 
                        <div className="medProductServices">
                            <h2 className="medProductServicesTitle">
                                Our Services
                            </h2>
                            <div className="medServicesLink">
                                <div className="medMobileSelection">
                                    <img className="medPhoneSelection" src={phoneSelection} alt="phone selection" />
                                    <Link to="/mobile" className="medMobileDev">Mobile Development</Link>
                                </div>
                                <div className="medWebSelection">
                                    <img src={webSelection} className="medWebSelectPic" alt="web selection" />
                                    <Link to="/web" className="medWebDev">Web Development</Link>
                                </div>
                            </div>
                        </div>
                    }
                    {matches.secondMed && 
                        <div className="secMedProductServices">
                            <h2 className="secMedProductServicesTitle">
                                Our Services
                            </h2>
                            <div className="secMedServicesLink">
                                <div className="secMedMobileSelection">
                                    <img className="secMedPhoneSelection" src={phoneSelection} alt="phone selection" />
                                    <Link to="/mobile" className="secMedMobileDev">Mobile Development</Link>
                                </div>
                                <div className="secMedWebSelection">
                                    <img src={webSelection} className="secMedWebSelectPic" alt="web selection" />
                                    <Link to="/web" className="secMedWebDev">Web Development</Link>
                                </div>
                            </div>
                        </div>
                    }
                    {matches.large && 
                        <div className="lgProductServices">
                            <h2 className="lgProductServicesTitle">
                                Our Services
                            </h2>
                            <div className="lgServicesLink">
                                <div className="lgMobileSelection">
                                    <img className="lgPhoneSelection" src={phoneSelection} alt="phone selection" />
                                    <Link to="/mobile" className="lgMobileDev">Mobile Development</Link>
                                </div>
                                <div className="lgWebSelection">
                                    <img src={webSelection} className="lgWebSelectPic" alt="web selection" />
                                    <Link to="/web" className="lgWebDev">Web Development</Link>
                                </div>
                            </div>
                        </div>
                    }
                    {matches.xxl && 
                        <div className="XXLProductServices">
                            <h2 className="XXLProductServicesTitle">
                                Our Services
                            </h2>
                            <div className="XXLServicesLink">
                                <div className="XXLMobileSelection">
                                    <img className="XXLPhoneSelection" src={phoneSelection} alt="phone selection" />
                                    <Link to="/mobile" className="XXLMobileDev">Mobile Development</Link>
                                </div>
                                <div className="XXLWebSelection">
                                    <img src={webSelection} className="XXLWebSelectPic" alt="web selection" />
                                    <Link to="/web" className="XXLWebDev">Web Development</Link>
                                </div>
                            </div>
                        </div>
                    }
                </Fragment>
            )}
        </Media>
    );
}
