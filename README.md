# La Galería App
This is the repo for the 'La Galería App'.

## Generalities
This project is an inventory, prices and accountability manager for the famous and prodigious bakery 'La Galería', based in Cartagena, Colombia. It is intended to be used in a web browser from a mobile device. The idea is to keep simple authentication strategies, for the only user that needs to access the app will be the administrator.

## Specifications
The project is made with Next.JS, using TypeScript as the language. In general, the tools are described as follows:

* **TypeScript** as language.
* **PNPM** for package managing.
* **Prisma** as the ORM.
* **SQLite** for the database in development, intended to use **Postgres** in production.

**IMPORTANT**: Please do not use **by any means** NPM for package installing and updating. This could break the package versions flow and mess with inner running scripts; not to mention all of the security concerns that are currently associated to NPM.

## Structure
The project follows a Clean Architecture-ish architecture, in which the code is organized in:

- Repositories: these are responsible of retrieving data from the database and applying the required changes to it.
- DTOs: interfaces intended to model the structure of the data that is received and sent by the repositories.
- Interfaces: miscellaneous interfaces required in certain parts of the code that unify data structures.
- Actions: functions that group features created in the repositories, so that they can be called as form submit actions in React pages and components.
- Utils: directory conformed by several useful functions that accomplish specific logic and shall be called in certain parts of the code.
- App: where the routes, pages and layouts lie. The inner directory structure defines the URL routes structure, taking the directory names as slugs of the corresponding route of the page in question. This obeys to the NextJS intended behavior, which can be checked in (https://nextjs.org/docs/app/getting-started/project-structure#nested-routes)[this link].
- Components: useful React components that divide responsibilities and keep the code organized and scale-friendly.
- Hooks: useful React custom hooks, that can be called from several components and therefore allow logic placement in a more organized manner, keeping the code scale-friendly.