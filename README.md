# Frangin Frangine — Saint-Bonnet-en-Champsaur

Maquette indépendante pour **Frangin Frangine**, boulangerie-pâtisserie et point de snacking situé dans la zone artisanale du Moulin à Saint-Bonnet-en-Champsaur.

## Vérification et statut

Établissement recoupé comme actif dans les sources publiques consultées (fiche touristique Champsaur & Valgaudemar, annuaire professionnel et fiche locale). Les horaires, produits, tarifs et jours fériés doivent être confirmés par l’équipe avant mise en ligne officielle. Le site est une réalisation indépendante, non présentée comme le site officiel.

## Liens

- Site Cloudflare Pages : [frangin-frangine.pages.dev](https://frangin-frangine.pages.dev)
- Dépôt GitHub : [AMWEBDESIGNER/frangin-frangine](https://github.com/AMWEBDESIGNER/frangin-frangine)
- Téléphone public : 04 92 23 48 08

## Sources publiques

- [Fiche Champsaur & Valgaudemar](https://www.champsaur-valgaudemar.com/en/offres/boulangerie-frangin-frangine-saint-bonnet-en-champsaur-en-2823595/)
- [Fiche établissement vérifiée](https://uneboulangerie.fr/05/saint-bonnet-en-champsaur/frangin-frangine-saint-bonnet-u7w)
- [Annuaire professionnel](https://www.allbiz.fr/frangin-frangine-saint-bonnet-04-92-23-48-08)

La photo de la boutique `shop.jpg` provient de la fiche touristique Apidae. Les autres photographies proviennent d’Unsplash : [pain tranché](https://unsplash.com/photos/1509440159596-0249088772ff), [pains](https://unsplash.com/photos/1549931319-a545dcf3bc73), [croissants](https://unsplash.com/photos/1555507036-ab1f4038808a) et [assortiment](https://unsplash.com/photos/1608198093002-ad4e005484ec). Les droits restent attachés à leurs auteurs respectifs.

La photographie `frangin-facebook.png`, fournie par le commanditaire depuis la page Facebook de l’établissement, montre l’enseigne, le logo existant et l’aménagement réel. Elle sert de référence principale à la direction artistique : noir et gris, typographie éditoriale, panneaux OSB et structures métalliques. Le logo visible sur cette photo est utilisé directement ; aucun logo de remplacement n’a été créé.

## Personnalisation

Site statique HTML, CSS et JavaScript, sans compilation. Le contenu se modifie dans `index.html`, l’identité dans `styles.css` et le sélecteur de produits dans `app.js`.

Pour toute évolution, conserver le logo existant de l’établissement. Ne produire une nouvelle identité graphique qu’après confirmation explicite qu’aucun logo officiel ou historique n’existe.

Les produits exacts, tarifs, horaires, droit d’utilisation des photographies et éventuels liens de commande doivent être confirmés par la boulangerie avant utilisation officielle. Les pages `la-maison.html`, `produits.html`, `snacking.html`, `infos-pratiques.html` et `contact.html` constituent le parcours complet ; `pages.css` et `pages.js` portent les composants partagés.

## Motion design et provenance du code

Animations réalisées en CSS vanilla, avec respect de `prefers-reduced-motion`, et une révélation progressive inspirée du pattern public [Scroll animation: IntersectionObserver and CSS](https://codepen.io/oscar-jite/pen/qBzwOVq). La logique reste locale, légère et adaptée à l’identité de chaque établissement ; aucune dépendance payante ni contenu généré n’est requis.

## Informations pratiques livrées

`site-enhance.js` ajoute sur l’accueil un bloc dédié à l’adresse, aux horaires, aux services, au téléphone et à l’itinéraire, ainsi qu’un footer local complet. Les informations signalées « à confirmer » doivent être validées par l’établissement avant mise en production commerciale.
