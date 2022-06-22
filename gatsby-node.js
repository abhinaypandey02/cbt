exports.createPages=async function({graphql,actions}){
    const {data}=await graphql(`
        query{
          allStrapiCertificationPage {
            nodes {
              relatedCourses {
                imageAlt
                url
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              faqs {
                answer
                question
              }
              slug
              logoAltText
              headerTitle
              aboutTitle
              description1
              description2
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
    `)
    data.allStrapiCertificationPage.nodes.forEach(node=>{
        console.log(node.description1)
        actions.createPage({
            path:"/certification"+ node.slug,
            component:require.resolve(`./src/components/CertificationPage/index.tsx`),
            context:node
        })
    })
}