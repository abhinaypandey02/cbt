export interface CertificationPageInterface {
    faqs:FAQInterface[];
    related_courses:RelatedCourseInterface[];
    headerTitle:string;
    description1:string;
    description2:string;
    slug:string;
    logo:any;
    logoAlt:string;
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
    logo:any;
    slug:string;
    metaTitle:string;
}
