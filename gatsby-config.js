/** @type {import('gatsby').GatsbyConfig} */
const strapiConfig = {
    apiURL: "http://35.188.90.216:1337",
    accessToken: "174ba3b6a5137bdcc809d6543f03cbaad5d157dd590fb1d1157d1a69ed901295b7d757a4014ee416e0e1a67c9be6d9a0b7a43b5199cf0c72c05a4a2b1ef2aff95fb8acd2fa853e45fcde3650dd6def7515c4697b371b2cc42c342bf7d7e370ba4c7d7acaae957f2694ec675012dfb9373288ae694a55297fdb18f990d865aef0",
    collectionTypes: [{
        singularName: 'certification-page', queryParams: {
            populate: {
                logo:'*',
                image:'*',
                relatedCourses : {
                    populate:{
                        image:'*'
                    }

                },
                faqs:'*'
            }
        }
    },
        {
        singularName: 'vendor', queryParams: {
            populate: {
                logo:'*',
                certifications : {
                    populate:{
                        logo:'*',
                        'certification_page':{
                            populate: {
                                logo:'*',
                                image:'*',
                                relatedCourses : {
                                    populate:{
                                        image:'*'
                                    }

                                },
                                faqs:'*'
                            }
                        }
                    }

                },
            }
        }
    }
    ],
    singleTypes: [],
};
module.exports = {
    pathPrefix: "/cbt", siteMetadata: {
        title: `new`, siteUrl: `https://www.yourdomain.tld`
    }, plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
        resolve: 'gatsby-plugin-manifest', options: {
            "icon": "src/images/icon.png"
        }
    }, {resolve:"gatsby-plugin-sharp",options: {
            defaults: {
                placeholder: `blurred`
            },
        },}, "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem', options: {
            "name": "images", "path": "./src/images/"
        }, __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem', options: {
            "name": "pages", "path": "./src/pages/"
        }, __key: "pages"
    }, {
        resolve: 'gatsby-source-strapi', options: strapiConfig
    }],
};
