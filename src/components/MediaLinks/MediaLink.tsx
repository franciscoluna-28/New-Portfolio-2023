import React from "react";

import { FooterCardProps as Footer } from "../../Interfaces/FooterCardProps";

export default function FooterCard({socialLink, styleClass, icon, title}: Footer) {
    return(
        <React.Fragment>
            <a href={socialLink}><button className={styleClass}>{icon}{title}</button></a>
        </React.Fragment>
    )
}