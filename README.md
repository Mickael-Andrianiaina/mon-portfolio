
# MON PORTFOLIO CV

Portfolio professionnel développé avec React + Vite.

## Installation

```bash
npm install
```

## Lancer le projet

```bash
npm run dev
```

## Mise à jour du projet

Pour publier les nouvelles modifications :

```bash
git add .
git commit -m "Mise a jour du portfolio"
git push origin main
```

## Consulter les anciennes versions

Afficher l'historique :

```bash
git log --oneline
```

## Revenir à une ancienne version

Remplacer COMMIT_ID par l'identifiant souhaité :

```bash
git switch --detach COMMIT_ID
```

## Revenir à la dernière version

```bash
git switch main
```

## Restaurer une ancienne version comme nouvelle version officielle

Après avoir retrouvé le commit souhaité :

```bash
git switch main
git revert HEAD
```

Attention : cette dernière commande annule uniquement le dernier commit de main. Pour restaurer un commit plus ancien, il faut adapter la commande.

## Technologies

- React
- Vite
- JavaScript
- CSS
- Git
- GitHub
- Vercel
