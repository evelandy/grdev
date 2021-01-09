import React from 'react';

export default function ProjectCard(props) {
    const openCv = () => {
        let win = window.open(props.site, '_blank');
    }
    return (
        <div onClick={openCv} className={props.cardClass}>
            <img src={props.imgSrc} alt={props.alt} className={props.imgClass} />
            <h2 className={props.titleNameClass}>{props.label}</h2>
        </div>
        // <div onClick={openCv} className={props.cardContainer}>
        //     <span className={props.titleName}>
        //         {props.label}
        //     </span>
        // </div>
    );
}
