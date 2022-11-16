import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {Helmet} from "react-helmet"
import {useLocation} from "@reach/router"
import {Blog} from "../interfaces/Blog";

export default function SEO(props: { title?: string, description?: string, blog: boolean, schema?:any, blogValue?:Blog }) {
    const {pathname} = useLocation()
    const {site} = useStaticQuery(query);
    const {
        defaultTitle, defaultDescription, siteUrl,
    } = site.siteMetadata
    const seo = {
        title: props.title || defaultTitle,
        description: props.description || defaultDescription,
        url: `${siteUrl}${pathname}`,
    }
    let schema=null;
    if(props.blogValue){
        schema={
            "@context": "http://schema.org",
            "@type": "Article",
            "name": props.blogValue.title,
            "description": props.blogValue.description,
            "author": {
                "@type": "Person",
                "name": "CBT Proxy"
            },
            "datePublished": props.blogValue.publishedDate,
            "articleBody": props.blogValue.description,
            "url": seo.url,
            "publisher": {
                "@type": "Organization",
                "name": "CBT Proxy"
            }
        }
    }
    if(props.schema){
        try{
            schema=JSON.parse(props.schema);
        } catch (e){
            console.log(props.schema)
            console.error(e)
        }
    }
    return <Helmet title={seo.title} htmlAttributes={{
        lang: 'en',
    }}>
        <meta name="description" content={seo.description}/>
        {seo.url && <meta property="og:url" content={seo.url}/>}
        {props.blog && <meta property="og:type" content="article"/>}
        {seo.title && <meta property="og:title" content={seo.title}/>}
        {seo.description && (<meta property="og:description" content={seo.description}/>)}
        <meta name="keywords" content="GED Test Online, Online Ged Test, Ged Test, Ged Online, Ged from home,"/>
        <meta name="geo.region" content="US"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="7 days"/>
        <meta charSet="UTF-8"/>
        {schema&&<script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
}
const query = graphql`
query {
        site
        {
            siteMetadata
            {
                defaultTitle: title
                defaultDescription: description
                siteUrl
            }
        }
    }
`
