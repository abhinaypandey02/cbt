import React from 'react';
import './styles.scss';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {RelatedCourseInterface} from "../../../interfaces/CertificationPageInterface";
import {Link} from "gatsby";

function Logo({course, vendorRoute}:any){
    return <Link to={vendorRoute+course.slug}>
        <GatsbyImage image={course.compiledImage} alt={course.metaTitle}/>
    </Link>
}

export default function RelatedCourse({courses, vendorRoute}: { courses: RelatedCourseInterface[], vendorRoute:string }) {
    const compiledCourses = courses.map(c => ({...c, compiledImage: getImage(c.logo?.localFile)}));
    return <div className="related-course">
        <div className="heading">
            Related Courses
        </div>
        <div className="elements">{compiledCourses.map(c => (c.compiledImage ?  <Logo course={c} vendorRoute={vendorRoute}/>: null))}
        </div>
    </div>
}
