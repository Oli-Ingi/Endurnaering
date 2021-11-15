import React from 'react'
import Head from 'next/head'
import TermsAndPrivacyPage from '../domain/TermsAndPrivacy'

const Skilmalar = ({}) =>
    <>
        <Head>
            <title>Endurnæring - Skilmálar</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap" rel="stylesheet" />
            <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <TermsAndPrivacyPage />
    </>

    


export default Skilmalar