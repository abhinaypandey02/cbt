exports.createPages=async function({graphql,actions}){
    const {data}=await graphql(`
        query {
  allStrapiVendor {
    nodes {
      metaDescription
      metaTitle
      pageDescription
      slug
      pageTitle
      logo {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      headerTitle
      certifications {
        description
        title
        logo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        certification_page {
          description1
          description2
          faqs {
            answer
            question
          }
          headerTitle
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          metaDescription
          metaTitle
          logoAltText
          slug
          related_courses {
            slug
            metaTitle
            logo {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
}

    `)
    data.allStrapiVendor.nodes.forEach(vendor=>{
        actions.createPage({
            path:"/certifications"+ vendor.slug,
            component:require.resolve(`./src/components/Vendor/index.tsx`),
            context:vendor
        })
        vendor.certifications.forEach(cert=>{
            actions.createPage({
                path:"/certifications"+ vendor.slug+cert.certification_page.slug,
                component:require.resolve(`./src/components/CertificationPage/index.tsx`),
                context:{...cert.certification_page, vendorTitle:vendor.headerTitle, vendorRoute:"/certifications"+vendor.slug}
            })
        })

    })
}
