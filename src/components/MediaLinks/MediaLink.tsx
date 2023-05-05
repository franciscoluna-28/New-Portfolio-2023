import React from "react";

import { FooterCardProps as Footer } from "../../Interfaces/FooterCardProps";

export default function FooterCard({socialLink, styleClass, icon}: Footer) {
    return(
        <React.Fragment>
            <a href={socialLink}><button className={styleClass}>{icon}</button></a>
        </React.Fragment>
    )
}