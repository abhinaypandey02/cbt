exports.createPages=async function({graphql,actions}){

    actions.createRedirect({
        fromPath: `/certifications/cisco/ccna/`,
        toPath: `/certifications/cisco/ccna-200-301/`,
        statusCode: 200,
    })
    actions.createRedirect({
        fromPath: `/certifications/itil/itil4-strategic-leader/`,
        toPath: `/certifications/itil/itil-4-leader-digital-and-it-strategy`,
        statusCode: 200,
    })
    actions.createRedirect({
        fromPath: `/certifications/itil/itil-4-managing-professional/`,
        toPath: `/certifications/itil/itil-4-managing-professional-transition`,
        statusCode: 200,
    })
    actions.createRedirect({
        fromPath: `/certifications/p3o-certifications/axelos-certified-p30-foundation/`,
        toPath: `/certifications/axelos-peoplecert/p30-foundation`,
        statusCode: 200,
    })
    actions.createRedirect({
        fromPath: `/certifications/p3o-certifications/axelos-certified-p30-practitioner/`,
        toPath: `/certifications/axelos-peoplecert/p30-practitioner`,
        statusCode: 200,
    })

    const {data}=await graphql(`
        query {
  allStrapiCbtBlog {
    nodes {
      description
      schema
      slug
      content {
        data {
          content
        }
      }
      minToRead
      featuredImage {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      tag
      certification_pages {
            slug
       }
      title
      publishedAt(formatString: "MMM DD, YYYY")
      publishedDate(formatString: "MMM DD, YYYY")
    }
  }
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
          vendor{
            slug
          }
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
    const blogs = data.allStrapiCbtBlog.nodes;
    blogs.forEach((d)=>{
        actions.createPage({
            path:"/blog/"+d.slug+'/',
            component: require.resolve(`./src/components/BlogPage/index.tsx`),
            context:{slug:d.slug,blogs,lang:"en"}
        })
    })
    actions.createPage({
        path:"/blogs",
        component:require.resolve(`./src/components/BlogsList/index.tsx`),
        context: {blogs}
    })
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
                context:{...cert, vendorTitle:vendor.headerTitle, vendorRoute:"/certifications"+vendor.slug, blogs:blogs.filter(b=>b.certification_pages?.some(c=>c.slug===cert.slug))}
            })
        })

    })
}
