import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
const BLOGS=[
    {
        compiledFeaturedImage:<StaticImage src={'../../../images/blogs/1.png'} alt={"Blog Image"}/>,
        title:"Blog Tittle",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan venenatis lectus et bibendum. In vestibulum erat a finibus auctor",
        publishedAt:"May 23, 2020",
        slug:"blogg"
    },{
        compiledFeaturedImage:<StaticImage src={'../../../images/blogs/1.png'} alt={"Blog Image"}/>,
        title:"Blog Tittle",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan venenatis lectus et bibendum. In vestibulum erat a finibus auctor",
        publishedAt:"May 23, 2020",
        slug:"blogg"
    },{
        compiledFeaturedImage:<StaticImage src={'../../../images/blogs/1.png'} alt={"Blog Image"}/>,
        title:"Blog Tittle",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan venenatis lectus et bibendum. In vestibulum erat a finibus auctor",
        publishedAt:"May 23, 2020",
        slug:"blogg"
    },{
        compiledFeaturedImage:<StaticImage src={'../../../images/blogs/1.png'} alt={"Blog Image"}/>,
        title:"Blog Tittle",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan venenatis lectus et bibendum. In vestibulum erat a finibus auctor",
        publishedAt:"May 23, 2020",
        slug:"blogg"
    }
]
export default function Blogs(){
    return <div className="blogs">
        <div className="heading">Read Our Latest News</div>
        <div className="elements">
            {BLOGS.map(blog=><div className="element">
                    <div className="image">
                        {blog.compiledFeaturedImage}
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
                                <StaticImage placeholder="blurred" src="../../../images/arrow.png" alt="read more"/>
                            </div>
                        </Link>

                    </div>
                </div>)}

        </div>
    </div>
}
