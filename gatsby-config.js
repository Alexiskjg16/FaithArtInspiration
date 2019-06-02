
module.exports = {
   siteMetadata: {
      title: 'Faith Art Inspiration',
      author: 'Alexis Grisham'
    },

 plugins: [
    {
       resolve: 'gatsby-source-contentful',
       options: {
          spaceId: '9wmtp459ugez',
          accessToken:'sEgSdDtLAl0rDesJ-mDgF5gP1ad3mchXRqS3w05wvp4'
       }
    },
    'gatsby-plugin-sass',
    {
       resolve:'gatsby-source-filesystem',
       options: {
          name:'src',
          path: `${__dirname}/src/`
       }
    },
    'gatsby-plugin-sharp',
    {
       resolve: 'gatsby-transformer-remark',
       options: {
          plugins: [
             'gatsby-remark-relative-images',
             {
                resolve: 'gatsby-remark-images',
                options: {
                   maxWidth: 750,
                   linkImagesToOriginal: false,
                }
             }
          ]
       }
    },
 ],
}
