import React, {CSSProperties} from 'react';
import {Preview} from "@react-email/preview";
import {Body} from "@react-email/body";
import {Container} from '@react-email/container';
import {Section} from '@react-email/section';
import {Img} from "@react-email/img";
import {Heading} from '@react-email/heading';
import {Text} from '@react-email/text';
import {Button} from "@react-email/button";
import DefaultLayout from "./components/DefaultLayout";

const EmailConfirmation: React.FC = () => {
    return (
        <DefaultLayout>
            <Preview>
                Please confirm your email address to proceed with your kycDAO verification
            </Preview>
            <Body>
                <Container style={container}>
                    <Section style={header}>
                        <Img
                            src={`/static/kycdao-logo.png`}
                            width="182"
                            height="46"
                            alt="kycDAO"
                            style={logo}
                        />

                        <Heading style={h1} as="h1">KycDAO e-mail confirmation</Heading>
                    </Section>
                    <Section style={body}>
                        <Text style={text}>
                            Click the button below to confirm you e-mail address. <br />
                            The magic link will expire in 2 hours.
                        </Text>

                        <Button style={button} href='https://kycdao.xyz'>Confirm my email</Button>

                        <Text style={note}>This link was generated in 17.02.2023 - CET 12:02</Text>
                    </Section>
                </Container>
            </Body>
        </DefaultLayout>
    )
}

const container: CSSProperties = {
    border: '1.5px solid #000000',
    borderRadius: '40px',
    margin: '40px auto',
    width: '600px',
    overflow: 'hidden',
}

const header: CSSProperties = {
    backgroundImage: 'url("/static/kycd-pearl-background_small.png")',
    height: '330px',
    padding: '80px 60px',
}

const logo: CSSProperties = {}

const h1: CSSProperties = {
    fontSize: '30px',
    lineHeight: '35px',
    fontWeight: '400',
    fontStyle: 'normal',
    marginTop: '60px',
}

const body: CSSProperties = {
    padding: '40px 60px',
    background: 'white',
}

const text: CSSProperties = {
    fontSize: '18px',
    lineHeight: '21px',
    fontWeight: '400',
    marginBottom: '40px',
}

const button: CSSProperties = {
    background: 'black',
    borderRadius: '4px',
    padding: '16px 24px',
    color: 'white',
}

const note: CSSProperties = {
    marginTop: '40px',
    background: '#F3F3F7',
    padding: '24px',
    borderRadius: '4px',
    fontSize: '16px',
    lineHeight: '21px',
    fontWeight: '400',
    color: '#424242',
    textAlign: 'center',
}

export default EmailConfirmation