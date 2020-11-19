import React from 'react';
import './products.css';
// import iosPhone from './iosPhone.jpeg';

export default function ProductCard(props) {
    return (
        <div className={props.containerName}>
            <div className={props.imageContainerName}>
                <img src={props.imgSrc} alt={props.imgAlt} className={props.imageName} />
            </div>
            <span className={props.headingContainerName}>
                <h2 className={props.headingName}>{props.headingTitle}</h2>
            </span>
        </div>
    );
}
