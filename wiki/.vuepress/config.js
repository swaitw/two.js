var sourceFiles = require('../../utils/source-files');

for (var i = 0; i < sourceFiles.length; i++) {
  var name = sourceFiles[i];
  sourceFiles[i] = name.replace('src/', '').replace('.js', '/');
}

module.exports = {
  themeConfig: {
    repo: 'jonobr1/two.js',
    repoLabel: 'Github',
    docsDir: 'wiki',
    docsBranch: 'jsdocs',
    editLinks: true,
    editLinkText: 'See a typo? Help us improve it.',
    smoothScroll: true,
    nav: [],
    lastUpdated: 'Last Updated',
    activeHeaderLinks: false,
    searchPlaceholder: 'Search...',
    nav: [
      {
        text: 'Overview', link: '/'
      },
      // {
      //   text: 'Examples', link: '/examples/'
      // },
      // {
      //   text: 'Projects', link: '/projects/'
      // },
      {
        text: 'Documentation', link: '/documentation/two/'
      },
      // {
      //   text: 'Sponsors', link: '/sponsor'
      // }
    ],
    sidebar: {
      '/documentation/': sourceFiles
      // '/documentation/': [
      //   'two/',
      //   'registry/',
      //   'vector/',
      //   'anchor/',
      //   'matrix/',
      //   'renderers/svg/',
      //   'renderers/canvas/',
      //   'renderers/webgl/',
      //   'shape/',
      //   'path/',
      //   'shapes/line/',
      //   'shapes/rectangle/',
      //   'shapes/ellipse/',
      //   'shapes/circle/',
      //   'shapes/polygon/',
      //   'shapes/arc-segment/',
      //   'shapes/star/',
      //   'shapes/rounded-rectangle/',
      //   'text/',
      //   'effects/gradient/',
      //   'effects/linear-gradient/',
      //   'effects/radial-gradient/',
      //   'effects/texture/',
      //   'effects/sprite/',
      //   'effects/image-sequence/',
      //   'group/'
      // ]
    },
    markdown: {
      lineNumbers: true
    },
    plugins: ['@vuepress/medium-zoom', '@vuepress/nprogress']
  }
};
