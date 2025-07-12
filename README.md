# ChatSeller Documentation

Documentation officielle de ChatSeller - Agent IA Commercial pour e-commerce.

## 🚀 Site de documentation

**URL :** [docs.chatseller.app](https://docs.chatseller.app)

## 📚 Contenu

Cette documentation couvre :

- **Guide de démarrage** : Installation et configuration rapide
- **Référence API** : Endpoints et exemples d'intégration
- **Exemples pratiques** : Cas d'usage Shopify, WooCommerce, etc.
- **Best practices** : Optimisation et conseils d'expert

## 🛠 Développement local

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Clone du repository
git clone https://github.com/Dukka-ChatSeller/chatseller-docs.git
cd chatseller-docs

# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev
```

La documentation sera accessible sur `http://localhost:5173`

### Structure

```
├── .vitepress/
│   └── config.ts          # Configuration VitePress
├── guide/
│   ├── introduction.md    # Introduction générale
│   ├── quick-start.md     # Guide de démarrage rapide
│   ├── configuration.md   # Configuration avancée
│   └── widget/
│       ├── integration.md
│       ├── customization.md
│       └── events.md
├── api/
│   ├── overview.md        # Vue d'ensemble API
│   ├── authentication.md
│   ├── endpoints.md
│   └── ressources/
├── examples/
│   ├── basic-integration.md
│   ├── shopify.md
│   ├── woocommerce.md
│   └── custom-site.md
└── public/
    ├── images/
    └── assets/
```

## ✏️ Contribution

### Ajouter du contenu

1. **Nouvelle page** : Créer un fichier `.md` dans le dossier approprié
2. **Navigation** : Mettre à jour `.vitepress/config.ts`
3. **Images** : Placer dans `public/images/`

### Guidelines d'écriture

- **Tone** : Professionnel mais accessible
- **Langue** : Français en priorité, anglais pour l'API
- **Exemples** : Toujours inclure du code fonctionnel
- **Screenshots** : Utiliser des images haute résolution

### Workflow

1. Fork le repository
2. Créer une branche feature
3. Ajouter/modifier le contenu
4. Tester localement avec `npm run dev`
5. Soumettre une Pull Request

## 📝 Conventions

### Markdown

```markdown
# Titre principal (H1)
## Section (H2)
### Sous-section (H3)

<!-- Code avec syntax highlighting -->
```javascript
const config = {
  shopId: 'your-shop-id'
};
```

<!-- Alertes -->
::: tip Conseil
Utilisez toujours HTTPS en production
:::

::: warning Attention
Cette fonctionnalité est en beta
:::

::: danger Important
Ne jamais exposer votre clé secrète
:::
```

### Code examples

- **JavaScript** : Syntaxe ES6+
- **PHP** : Version 7.4+
- **HTML** : HTML5 sémantique
- **CSS** : Classes Tailwind quand possible

## 🔧 Scripts disponibles

```bash
# Développement avec hot reload
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview

# Serve en mode production
npm run serve
```

## 🚀 Déploiement

### Vercel (automatique)

Le site est automatiquement déployé sur Vercel à chaque push sur `main`.

- **URL de staging** : [chatseller-docs-staging.vercel.app](https://chatseller-docs-staging.vercel.app)
- **URL de production** : [docs.chatseller.app](https://docs.chatseller.app)

### Configuration Vercel

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".vitepress/dist",
  "framework": "vitepress"
}
```

## 📊 Analytics

Le site utilise :

- **Google Analytics** : Suivi des visites
- **Hotjar** : Heatmaps et enregistrements
- **Feedback widget** : Collecte d'avis sur la documentation

## 🎨 Personnalisation

### Thème

Le site utilise le thème par défaut de VitePress avec :

- **Couleurs** : Palette ChatSeller (rose #ec4899)
- **Fonts** : Inter (système)
- **Composants** : Personnalisés dans `.vitepress/theme/`

### Assets

- **Logo** : `public/logo.svg`
- **Favicon** : `public/favicon.ico`
- **Images** : `public/images/`
- **OG Image** : `public/og-image.jpg`

## 🌍 Internationalisation

### Langues supportées

- **Français** : Langue principale
- **Anglais** : API et développeurs
- **Wolof** : Guide utilisateur local (à venir)

### Structure i18n

```
├── fr/
│   ├── guide/
│   └── api/
├── en/
│   ├── guide/
│   └── api/
└── wo/
    └── guide/
```

## 📞 Support

### Pour la documentation

- **GitHub Issues** : [Issues](https://github.com/Dukka-ChatSeller/chatseller-docs/issues)
- **Discord** : [#documentation](https://discord.gg/chatseller)
- **Email** : [docs@chatseller.app](mailto:docs@chatseller.app)

### Pour le produit

- **Support général** : [support@chatseller.app](mailto:support@chatseller.app)
- **Discord Community** : [discord.gg/chatseller](https://discord.gg/chatseller)
- **Twitter** : [@chatseller](https://twitter.com/chatseller)

## 📄 Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour les détails.

---

Développé avec ❤️ par l'équipe Dukka
