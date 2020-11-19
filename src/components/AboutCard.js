import React from 'react';
import './about.css';
import aboutImg from './aboutImg.jpg';

export default function AboutCard(props) {
    return (
        <div className={props.aboutContainer}>
            <h2 className={props.aboutHeader}>
                About GrDev
            </h2>
            <img className={props.aboutImg} src={aboutImg} alt="about" />
            <p className={props.aboutBody}>
                &nbsp; &nbsp; &nbsp; &nbsp; At GrDev, we strive for perfection in every project we take on. 
                From the moment we agree to work together we at GrDev treat your 
                project as ours. With experience in Information Technology, Networking, 
                Systems Administration, Network Security and Software Development, we 
                have your I.T. and Software Development needs covered. So, don't 
                hesitate, lets turn your ideas into reality.
            </p>
        </div>
    );
}
