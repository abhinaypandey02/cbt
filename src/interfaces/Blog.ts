import { IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";

export interface Blog{
    title:string;
    description:string;
    publishedAt:string;
    publishedDate?:string;
    featuredImage:Picture;
    slug:string;
    schema?:string;
    tag:string;
    minToRead:number;
    content: { data:{content: string } };
    compiledFeaturedImage?:IGatsbyImageData;

}
interface Author{
    name:string;
    about:string;
    picture:Picture;
    compiledPicture?:IGatsbyImageData;
}
interface Picture{
    localFile:ImageDataLike;
}
