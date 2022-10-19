import React from 'react';
import {Link} from "gatsby";
import {Blog} from "../../interfaces/Blog";
import Layout from "../Layout";
import './styles.scss';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
export default function Blogs(props:{pageContext:{blogs:Blog[]},location:any}) {
    let blogs:Blog[] = props.pageContext.blogs.map((b:Blog)=>{
        const compiledFeaturedImage=getImage(b.featuredImage.localFile);
        return {...b,compiledFeaturedImage};
    });

    return (
        <Layout location={props.location}>
            <div className="blogsList">
                <div className="heading">
                    CBT Proxy Blogs
                </div>
                <div className="desc">
                    Blogs to know more about how CBT Proxy works.
                </div>
                <div className="blogs">
                    {blogs.map((blog) => <Link to={"/blog/"+blog.slug} ><div key={blog.title} className="blog">
                        <div className="image">{blog.compiledFeaturedImage&&<div><GatsbyImage alt={blog.title} image={blog.compiledFeaturedImage}/></div>}</div>
                        <span className="tag">{blog.tag}</span>
                        <div className="title">{blog.title}</div>
                        <div className="date">{blog.publishedDate||blog.publishedAt} • {blog.minToRead} min{blog.minToRead > 1 && 's'} read
                        </div>
                        <div className="content">{blog.description}</div>
                    </div></Link>)}
                </div>
            </div>

        </Layout>);
}
