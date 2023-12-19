# contact_form
 Ce projet est un simple formulaire de contact construit avec Express.js et Pug, et est conçu pour être déployé avec Docker.

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Naviguez vers le répertoire du projet dans votre terminal.
3. Exécutez `docker-compose up --build` pour construire les images Docker pour le projet.

## Utilisation

1. après Exécuter `docker-compose up --build` les services Docker, y compris le serveur web, la base de données PostgreSQL et Adminer seront démarrés.
2. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour voir le formulaire de contact.
3. Accédez à `http://localhost:8080` pour voir l'interface Adminer pour la base de données PostgreSQL.

## Fonctionnalités

- Validation des entrées du formulaire avec des expressions régulières.
- Affichage des messages d'erreur en rouge au-dessus du formulaire.
- Déploiement avec Docker et Docker Compose.
