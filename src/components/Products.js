import React, { Fragment } from 'react';
import Media from 'react-media';
import ProductCard from './ProductCard';
import './products.css';
import iosPhone from './iosPhone.jpg';
import AndroidPhone from './AndroidPhone.jpg';
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
                            <Link to="/mobile" className="mobildDev">Mobile</Link>
                            <Link to="/web" className="webDev">Web</Link>
                        </div>
                    }
                </Fragment>
            )}
        </Media>
    );
}
