import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zenon-docs/__docusaurus/debug',
    component: ComponentCreator('/zenon-docs/__docusaurus/debug', '604'),
    exact: true
  },
  {
    path: '/zenon-docs/__docusaurus/debug/config',
    component: ComponentCreator('/zenon-docs/__docusaurus/debug/config', '27a'),
    exact: true
  },
  {
    path: '/zenon-docs/__docusaurus/debug/content',
    component: ComponentCreator('/zenon-docs/__docusaurus/debug/content', 'dab'),
    exact: true
  },
  {
    path: '/zenon-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/zenon-docs/__docusaurus/debug/globalData', '961'),
    exact: true
  },
  {
    path: '/zenon-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/zenon-docs/__docusaurus/debug/metadata', 'b65'),
    exact: true
  },
  {
    path: '/zenon-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/zenon-docs/__docusaurus/debug/registry', '407'),
    exact: true
  },
  {
    path: '/zenon-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/zenon-docs/__docusaurus/debug/routes', 'd98'),
    exact: true
  },
  {
    path: '/zenon-docs/docs',
    component: ComponentCreator('/zenon-docs/docs', 'd62'),
    routes: [
      {
        path: '/zenon-docs/docs',
        component: ComponentCreator('/zenon-docs/docs', 'f2e'),
        routes: [
          {
            path: '/zenon-docs/docs',
            component: ComponentCreator('/zenon-docs/docs', '2ff'),
            routes: [
              {
                path: '/zenon-docs/docs/apps/phone',
                component: ComponentCreator('/zenon-docs/docs/apps/phone', '528'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zenon-docs/docs/exports/inventory',
                component: ComponentCreator('/zenon-docs/docs/exports/inventory', '084'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zenon-docs/docs/intro',
                component: ComponentCreator('/zenon-docs/docs/intro', '066'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zenon-docs/docs/jobs/ems',
                component: ComponentCreator('/zenon-docs/docs/jobs/ems', '0b4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zenon-docs/docs/jobs/police',
                component: ComponentCreator('/zenon-docs/docs/jobs/police', '3c7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zenon-docs/docs/setup/database-import',
                component: ComponentCreator('/zenon-docs/docs/setup/database-import', '464'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zenon-docs/docs/setup/server-setup',
                component: ComponentCreator('/zenon-docs/docs/setup/server-setup', 'c78'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
