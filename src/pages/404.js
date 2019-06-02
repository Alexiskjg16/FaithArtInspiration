import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"


const PageNotFound = () => {
    return (
        <Layout>
             <Head title="404" />
            <h1>Hi! This page is a dead end.</h1>
        </Layout>
    )   
}

export default PageNotFound