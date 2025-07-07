import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://github.com/davidjpetersen/LearningDesignPatterns',
  integrations: [
    starlight({
      title: 'Learning Design Patterns',
      logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg' },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/davidjpetersen/LearningDesignPatterns' }
      ],
      editLink: {
        baseUrl: 'https://github.com/davidjpetersen/LearningDesignPatterns/edit/main/src/content/docs/',
      },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Design Patterns',
          collapsed: false,
          items: [{ autogenerate: { directory: 'design-patterns', collapsed: false } }],
        },
        {
          label: 'Problem Patterns',
          collapsed: false,
          items: [{ autogenerate: { directory: 'problem-patterns', collapsed: false } }],
        },
        {
          label: 'Practice Patterns',
          collapsed: false,
          items: [{ autogenerate: { directory: 'practice-patterns', collapsed: false } }],
        },
        {
          label: 'Case Patterns',
          collapsed: false,
          items: [{ autogenerate: { directory: 'case-patterns', collapsed: false } }],
        },
        {
          label: 'Inquiry Patterns',
          collapsed: false,
          items: [{ autogenerate: { directory: 'inquiry-patterns', collapsed: false } }],
        },
      ],
    }),
  ],
});
