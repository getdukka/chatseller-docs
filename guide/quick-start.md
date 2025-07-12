# Démarrage rapide

Intégrez ChatSeller sur votre site e-commerce en moins de 10 minutes.

## Prérequis

- Un site web existant (Shopify, WooCommerce, Wix, ou site custom)
- Accès aux fichiers HTML de votre site
- Un compte ChatSeller (gratuit)

## Étape 1 : Créer votre compte

1. Rendez-vous sur [dashboard.chatseller.app](https://dashboard.chatseller.app)
2. Cliquez sur "S'inscrire"
3. Remplissez les informations de votre boutique
4. Confirmez votre email

## Étape 2 : Configuration initiale

### Informations de base

Dans le dashboard, configurez :

- **Nom de votre boutique** : Ex. "Ma Boutique Fashion"
- **Domaine** : Ex. "maboutique.com"
- **Description** : Quelques mots sur vos produits

### Configuration de l'agent IA

- **Nom de l'agent** : Ex. "Rose", "Aminata", "Sophie"
- **Avatar** : Upload d'une photo ou génération automatique
- **Message d'accueil** : Ex. "Bonjour ! Je suis Rose, votre conseillère shopping. Comment puis-je vous aider ?"

## Étape 3 : Intégration du widget

### Méthode automatique (recommandée)

Copiez ce code dans la section `<head>` ou juste avant `</body>` de vos pages produit :

```html
<script src="https://widget.chatseller.app/dist/chatseller.umd.js"></script>
<script>
  ChatSeller.init({
    shopId: 'VOTRE_SHOP_ID', // Récupéré depuis le dashboard
    theme: 'modern',
    primaryColor: '#ec4899',
    position: 'bottom-right',
    buttonText: 'Parler à une conseillère',
    language: 'fr'
  });
</script>
```

### Configuration avec attributs data

Alternative plus simple, ajoutez cet attribut à votre script :

```html
<script 
  src="https://widget.chatseller.app/dist/chatseller.umd.js"
  data-shop-id="VOTRE_SHOP_ID"
  data-theme="modern"
  data-primary-color="#ec4899"
  data-language="fr">
</script>
```

## Étape 4 : Test et vérification

### Vérifier l'intégration

1. Visitez votre page produit
2. Le bouton ChatSeller doit apparaître en bas à droite
3. Cliquez pour ouvrir le chat
4. Testez une conversation

### Debug si ça ne fonctionne pas

Ouvrez la console développeur (F12) et vérifiez :

```javascript
// Vérifier que ChatSeller est chargé
console.log(window.ChatSeller);

// Vérifier la configuration
console.log(window.ChatSeller.config);
```

## Étape 5 : Ajouter votre base de connaissance

### Upload de contenu

Dans le dashboard, section "Base de connaissance" :

1. **Upload PDF** : Catalogues, fiches produits, FAQ
2. **Données CSV** : Liste produits avec prix, descriptions
3. **Saisie manuelle** : Questions fréquentes, politiques

### Exemple de contenu basique

```
Produit : Le Jeu Pour les Couples
Prix : 14 000 FCFA
Description : Jeu de société pour renforcer les liens entre couples
Contenu : 200+ cartes questions, guide, boîte premium
Livraison : 48h Dakar, 5 jours régions
Paiement : Mobile Money, Orange Money, à la livraison
```

## Étape 6 : Configuration des modes de paiement

Définissez les options de paiement disponibles :

- **Mobile Money** : Orange Money, Wave, Free Money
- **Paiement à la livraison**
- **Virement bancaire**
- **Autres** (à préciser)

## Intégrations spécifiques

### Shopify

```liquid
<!-- Dans theme.liquid, avant </body> -->
<script src="https://widget.chatseller.app/dist/chatseller.umd.js"></script>
<script>
  ChatSeller.init({
    shopId: '{{ settings.chatseller_shop_id }}',
    productId: '{{ product.id }}',
    productName: '{{ product.title }}',
    productPrice: {{ product.price | divided_by: 100.0 }},
    theme: 'modern',
    language: 'fr'
  });
</script>
```

### WooCommerce

```php
// Dans functions.php
function add_chatseller_widget() {
    if (is_product()) {
        global $product;
        ?>
        <script src="https://widget.chatseller.app/dist/chatseller.umd.js"></script>
        <script>
          ChatSeller.init({
            shopId: '<?php echo get_option('chatseller_shop_id'); ?>',
            productId: '<?php echo $product->get_id(); ?>',
            productName: '<?php echo $product->get_name(); ?>',
            productPrice: <?php echo $product->get_price(); ?>,
            theme: 'modern',
            language: 'fr'
          });
        </script>
        <?php
    }
}
add_action('wp_footer', 'add_chatseller_widget');
```

## Personnalisation avancée

### Thèmes disponibles

```javascript
// Thème moderne (par défaut)
theme: 'modern'

// Thème minimal
theme: 'minimal'

// Thème custom
theme: 'custom'
```

### Couleurs

```javascript
// Couleur principale
primaryColor: '#ec4899' // Rose ChatSeller

// Autres exemples
primaryColor: '#3b82f6' // Bleu
primaryColor: '#10b981' // Vert
primaryColor: '#f59e0b' // Orange
```

### Positions

```javascript
// Positions disponibles
position: 'bottom-right' // Par défaut
position: 'bottom-left'
position: 'top-right'
position: 'top-left'
```

### Langues

```javascript
// Langues supportées
language: 'fr' // Français (par défaut)
language: 'en' // Anglais
language: 'wo' // Wolof
```

## Vérification finale

### Checklist

- [ ] Widget visible sur les pages produit
- [ ] Chat s'ouvre correctement (desktop et mobile)
- [ ] Agent répond aux questions de base
- [ ] Collecte d'informations fonctionne
- [ ] Dashboard affiche les conversations

### Métriques à surveiller

Dans le dashboard Analytics :

- **Taux d'ouverture** : % visiteurs qui ouvrent le chat
- **Engagement** : Nombre moyen de messages par conversation
- **Conversion** : % conversations qui deviennent des commandes

## Prochaines étapes

Une fois l'installation de base terminée :

1. [Personnaliser l'apparence](/guide/widget/customization)
2. [Optimiser la base de connaissance](/guide/ai/knowledge-base)
3. [Configurer les analytics](/guide/dashboard/analytics)
4. [Intégrer avec vos outils](/guide/integrations)

## Support

Besoin d'aide ? Contactez-nous :

- 💬 [Discord Community](https://discord.gg/chatseller)
- 📧 [support@chatseller.app](mailto:support@chatseller.app)
- 📞 WhatsApp : +221 XX XXX XX XX

---

**Temps estimé d'intégration :** 5-10 minutes  
**Difficulté :** Débutant  
**Support :** 24/7 via Discord
