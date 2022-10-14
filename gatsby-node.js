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
      certification_pages {
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

    `)
    data.allStrapiVendor.nodes.forEach(vendor=>{
        actions.createPage({
            path:"/certifications"+ vendor.slug,
            component:require.resolve(`./src/components/Vendor/index.tsx`),
            context:vendor
        })
        vendor.certification_pages.forEach(cert=>{
            actions.createPage({
                path:"/certifications"+ vendor.slug+cert.slug,
                component:require.resolve(`./src/components/CertificationPage/index.tsx`),
                context:{...cert, vendorTitle:vendor.headerTitle, vendorRoute:"/certifications"+vendor.slug}
            })
        })

    })
}
