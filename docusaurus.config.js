
module.exports = {
  title: 'Zenon Framework',
  tagline: 'The next evolution in RP frameworks',
  url: 'https://NightRider18133.github.io',
  baseUrl: '/zenon-docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'NightRider18133',
  projectName: 'zenon-docs',
  themeConfig: {
    navbar: {
      title: 'Zenon Docs',
      logo: {
        alt: 'Zenon Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {href: 'https://github.com/NightRider18133/zenon-framework', label: 'GitHub', position: 'right'},
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};
