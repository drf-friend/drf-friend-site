import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DRF FRIEND',
  tagline: 'drf friend',
  favicon: 'https://1394606196-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FKRlUBxf5Oga6lWXzGdEv%2Fuploads%2FiJKpLfVhsZDDvClcDlvm%2Fdrf-friend-logo.svg?alt=media&token=d6d19e29-fe8e-4640-a4ef-5dae210c1975',

  // Set the production url of your site here
  url: 'https://drf-friend.code4mk.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CODE4MK', // Usually your GitHub org/user name.
  projectName: 'drf_friend', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      { 
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            require.resolve("./src/refine-theme/css/fonts.css"),
            require.resolve("./src/refine-theme/css/custom.css"),
            require.resolve("./src/css/custom.css"),
          ],
      },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function tailwindcss() {
        return {
            name: "docusaurus-tailwindcss",
            configurePostCss(postcssOptions) {
                postcssOptions.plugins.push(require("tailwindcss"));
                postcssOptions.plugins.push(require("autoprefixer"));
                return postcssOptions;
            },
        };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'drf-friend',
      logo: {
        alt: 'My Site Logo',
        src: 'https://1394606196-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FKRlUBxf5Oga6lWXzGdEv%2Fuploads%2FiJKpLfVhsZDDvClcDlvm%2Fdrf-friend-logo.svg?alt=media&token=d6d19e29-fe8e-4640-a4ef-5dae210c1975',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        
        {
          href: 'https://github.com/code4mk/drf-friend',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} code4mk.org`,
    },
    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.dracula,
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
        },
        {
            className: "code-block-hidden",
            line: "hide-next-line",
            block: { start: "hide-start", end: "hide-end" },
        },
        {
            className: "theme-code-block-added-line",
            line: "added-line",
            block: { start: "added-start", end: "added-end" },
        },
        {
            className: "theme-code-block-removed-line",
            line: "removed-line",
            block: { start: "removed-start", end: "removed-end" },
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
