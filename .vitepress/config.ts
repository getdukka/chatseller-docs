import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ChatSeller Documentation',
  description: 'Documentation officielle de ChatSeller - Agent IA Commercial pour e-commerce',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'API', link: '/api/overview' },
      { text: 'Exemples', link: '/examples/basic-integration' },
      { text: 'Dashboard', link: 'https://dashboard.chatseller.app' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide de démarrage',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation rapide', link: '/guide/quick-start' },
            { text: 'Configuration', link: '/guide/configuration' }
          ]
        },
        {
          text: 'Widget',
          items: [
            { text: 'Intégration', link: '/guide/widget/integration' },
            { text: 'Personnalisation', link: '/guide/widget/customization' },
            { text: 'Événements', link: '/guide/widget/events' }
          ]
        },
        {
          text: 'Dashboard',
          items: [
            { text: 'Vue d\'ensemble', link: '/guide/dashboard/overview' },
            { text: 'Conversations', link: '/guide/dashboard/conversations' },
            { text: 'Analytics', link: '/guide/dashboard/analytics' }
          ]
        },
        {
          text: 'IA et Base de connaissance',
          items: [
            { text: 'Configuration de l\'IA', link: '/guide/ai/setup' },
            { text: 'Base de connaissance', link: '/guide/ai/knowledge-base' },
            { text: 'Optimisation', link: '/guide/ai/optimization' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Vue d\'ensemble', link: '/api/overview' },
            { text: 'Authentification', link: '/api/authentication' },
            { text: 'Endpoints', link: '/api/endpoints' }
          ]
        },
        {
          text: 'Ressources',
          items: [
            { text: 'Shops', link: '/api/shops' },
            { text: 'Conversations', link: '/api/conversations' },
            { text: 'Orders', link: '/api/orders' },
            { text: 'Analytics', link: '/api/analytics' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Exemples d\'intégration',
          items: [
            { text: 'Intégration basique', link: '/examples/basic-integration' },
            { text: 'Shopify', link: '/examples/shopify' },
            { text: 'WooCommerce', link: '/examples/woocommerce' },
            { text: 'Site custom', link: '/examples/custom-site' }
          ]
        },
        {
          text: 'Cas d\'usage',
          items: [
            { text: 'E-commerce mode', link: '/examples/fashion-store' },
            { text: 'Produits digitaux', link: '/examples/digital-products' },
            { text: 'Services', link: '/examples/services' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dukka-ChatSeller' },
      { icon: 'twitter', link: 'https://twitter.com/chatseller' }
    ],

    footer: {
      message: 'Publié sous licence MIT.',
      copyright: 'Copyright © 2025 - ChatSeller'
    },

    editLink: {
      pattern: 'https://github.com/Dukka-ChatSeller/chatseller-docs/edit/main/:path',
      text: 'Éditer cette page sur GitHub'
    },

    search: {
      provider: 'local'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#ec4899' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'fr_FR' }],
    ['meta', { property: 'og:title', content: 'ChatSeller Documentation' }],
    ['meta', { property: 'og:site_name', content: 'ChatSeller Docs' }],
    ['meta', { property: 'og:image', content: '/og-image.jpg' }],
    ['meta', { property: 'og:url', content: 'https://docs.chatseller.app/' }]
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  }
})
