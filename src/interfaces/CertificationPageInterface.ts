export interface CertificationPageInterface {
    faqs:FAQInterface[];
    relatedCourses:RelatedCourseInterface[];
    headerTitle:string;
    aboutTitle:string;
    description:string;
    slug:string;
    logo:any;
    logoAlt:string;
}
export interface FAQInterface{
    question:string;
    answer:string;
}
export interface RelatedCourseInterface{
    image:any;
    url:string;
    imageAlt:string;
}