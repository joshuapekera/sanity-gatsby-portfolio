export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2645a632a23143fc66a55b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9r6a792d',
                  apiId: 'af08d923-c103-471e-8c24-878b73a922e8'
                },
                {
                  buildHookId: '5e2645a7644824242abd6e96',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7mdgz9vk',
                  apiId: '85039060-f329-4d4e-9895-70fc7ab8cfae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshuapekera/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7mdgz9vk.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
