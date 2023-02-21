import {Head} from "@react-email/head";
import React from "react";
import {Html} from "@react-email/html";
import {Preview} from "@react-email/preview";
import { Body } from "@react-email/body";

interface Props {
    preview: string
}

const DefaultLayout: React.FC<Props> = ({children, preview}) => {
    return (
        <Html style={html}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>

                <Preview>{preview}</Preview>

                <Body style={main}>
                    {children}
                </Body>
            </Head>
        </Html>
    )
}

const html = {
    fontFamily: 'Roboto',
}

const main = {
    backgroundColor: '#F3F3F7',
    margin: '0 auto',
    padding: '20px',
}

export const assetBaseUrl = 'https://cdn.jsdelivr.net/gh/kycdao/emails/emails/static'

export default DefaultLayout