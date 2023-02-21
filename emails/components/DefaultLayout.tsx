import {Head} from "@react-email/head";
import React from "react";
import {Html} from "@react-email/html";

const DefaultLayout: React.FC = ({ children }) => {
    return (
        <Html style={html}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>

                {children}
            </Head>
        </Html>
    )
}

const html = {
    fontFamily: 'Roboto',
    backgroundColor: '#F3F3F7',
    margin: '0 auto',
}

export default DefaultLayout