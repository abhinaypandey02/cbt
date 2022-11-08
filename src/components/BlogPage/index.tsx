import React, {useEffect} from "react";
import './styles.scss';
import Layout from "../Layout";
import {Link, navigate} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
// import SEO from "../SEO";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import gfm from 'remark-gfm';
import { Blog } from "../../interfaces/Blog";
// import {supported_languages} from '../../helpers/values.json';

const getRedirectLanguage = () => {
    if (typeof navigator === `undefined`) {
        return "en";
    }
    const lang = navigator && navigator.language && navigator.language.split("-")[0];
    if (!lang) return "en";
    return lang;
};
export default function BlogPage({pageContext}: any) {
    // useEffect(()=>{
    //     const urlLang = getRedirectLanguage();
    //     if(urlLang!==pageContext.lang&&supported_languages.includes(urlLang)) navigate(`/${urlLang}/`, {replace: true});
    // },[])
    const blogs:Blog[]=pageContext.blogs;
    const blog = blogs.find((b) => b.slug == pageContext.slug);
    if(!blog) return null;
    const keepReadingBlog:Blog[]=[];
    for(let i=0;i<blogs.length;i++){
        if(blogs[i].slug==blog.slug){
            continue;
        } else {
            const img=getImage(blogs[i].featuredImage.localFile);
            keepReadingBlog.push({...blogs[i],compiledFeaturedImage:img});
        }
        if(keepReadingBlog.length>=2) break;

    }
    blog.compiledFeaturedImage = getImage(blog.featuredImage.localFile);
    return <Layout showStickyHeader={true} location={'/blog/'+blog.slug}>
        {/*<SEO blog={true} title={blog.title+" | GED TEST ONLINE"} description={blog.description} schema={blog.schema}/>*/}

        <div className="blog-container">
            <div className="tag">{blog.tag}</div>
            <h1 className="title">{blog.title}</h1>
            <div className="info">{blog.publishedDate||blog.publishedAt} • {blog.minToRead} min{blog.minToRead > 1 && 's'} read

            </div>
            <div className="image">{blog.compiledFeaturedImage&&<GatsbyImage alt={blog.title} image={blog.compiledFeaturedImage}/>}</div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} className="content">{blog.content.data.content}</ReactMarkdown>
            {keepReadingBlog.length>0&&<div className="keep-reading">
              <div className="heading">Keep Reading</div>
              <div className="blogs">
                  {keepReadingBlog.map(b=><Link to={(pageContext.lang==="en"?"":`/${pageContext.lang}`)+'/blog/'+b.slug}><div className="keep-reading-blog">
                      <div className="image">
                          {b.compiledFeaturedImage&&<GatsbyImage alt={b.title} image={b.compiledFeaturedImage}/>}
                      </div>
                      <div className="content">
                          <div className="heading">{b.title}</div>
                          <div className="desc">{b.description}</div>
                      </div>
                  </div></Link>)}

              </div>
            </div>}
        </div>
    </Layout>
}
