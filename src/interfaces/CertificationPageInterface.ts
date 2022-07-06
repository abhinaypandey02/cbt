export interface CertificationPageInterface {
    faqs:FAQInterface[];
    relatedCourses:RelatedCourseInterface[];
    headerTitle:string;
    aboutTitle:string;
    description1:string;
    description2:string;
    slug:string;
    logo:any;
    logoAlt:string;
    image:string;
    schema?:string;
    metaTitle:string;
    metaDescription:string;
    vendorRoute:string;
    vendorTitle:string;
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