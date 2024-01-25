import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'index',
    {
      type: "doc",
      id: "setup/index",
      label: "Setup",
    },
    {
      type: 'category',
      label: 'Basic',
      collapsible: false,
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Basic",
        slug: "/basic",
      },
      items: [
        {
          type: "doc",
          id: "basic/routing",
          label: "Routing",
        },
        {
          type: "doc",
          id: "basic/http-status",
          label: "HTTP status",
        },
        {
          type: "doc",
          id: "basic/dto",
          label: "Form Validation - dto",
        },
        {
          type: "doc",
          id: "basic/pagination",
          label: "Pagination",
        },
        {
          type: "doc",
          id: "basic/serializers",
          label: "Serializers",
        }
      ]
    },
    {
      type: 'category',
      label: 'Dive in',
      collapsible: false,
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Dive In",
        slug: "/dive-in",
      },
      items: [
        {
          type: "doc",
          id: "dive-in/file-storage",
          label: "File Storage",
        },
        {
          type: "doc",
          id: "dive-in/mail",
          label: "Mail",
        },
        {
          type: "doc",
          id: "dive-in/scheduler",
          label: "Scheduler",
        },
      ]
    },
    {
      type: 'category',
      label: 'Raw Query',
      collapsible: false,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "raw-query/index",
          label: "sql query",
        },
        {
          type: "doc",
          id: "raw-query/serializers",
          label: "serializers",
        }
      ]
    }
    
  ],
   
};

export default sidebars;
