import React from 'react';
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import './styles.scss';
import {Blog} from "../../interfaces/Blog";
export default function BlogsContainer({blogs}:{blogs?:Blog[]}){
    if(!blogs) return null;
    const compiledBlogs=blogs.map(b=>({...b, compiledFeaturedImage:getImage(b.featuredImage.localFile)}))
    if(compiledBlogs.length===0) return null;
    return <div className="blogs">
        <div className="heading">Read Our Latest News</div>
        <div className="elements">
            {compiledBlogs.map(blog=><div className="element">
                    <div className="image">
                        {blog.compiledFeaturedImage&&<GatsbyImage alt={blog.title} image={blog.compiledFeaturedImage}/>}
                    </div>
                    <div className="title">
                        {blog.title}
                    </div>
                    <div className="desc">
                        {blog.description}
                    </div>
                    <div className="bottom">
                        <div className="date">
                            {blog.publishedAt}
                        </div>
                        <Link to={"/blog/"+blog.slug}>
                            <div className="read">
                                <StaticImage placeholder="blurred" src="../../images/arrow.png" alt="read more"/>
                            </div>
                        </Link>

                    </div>
                </div>)}

        </div>
    </div>
}
