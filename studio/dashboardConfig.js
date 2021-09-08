export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '613904b3e21ed2008dc0ebc8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7c51xrx8',
                  apiId: '8a6f33fa-3f27-4420-a560-d81e958dce5e'
                },
                {
                  buildHookId: '613904b3e2d3960097da2e87',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qtegoxne',
                  apiId: 'dce87538-b46f-4c03-b810-c8009e0291be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cmacdougall12/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qtegoxne.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
