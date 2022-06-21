import React from 'react';
import './styles.scss';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {RelatedCourseInterface} from "../../../interfaces/CertificationPageInterface";
import {Link} from "gatsby";

export default function RelatedCourse({courses}: { courses: RelatedCourseInterface[] }) {
    const compiledCourses = courses.map(c => ({...c, compiledImage: getImage(c.image?.localFile)}));
    return <div className="related-course">
        <div className="heading">
            Related Courses
        </div>
        <div className="elements">{compiledCourses.map(c => (c.compiledImage ? <Link to={c.url}>
            <GatsbyImage image={c.compiledImage} alt={c.imageAlt}/>
        </Link> : null))}
        </div>
    </div>
}
