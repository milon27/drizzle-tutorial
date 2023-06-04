## user will have list of blogs, blog can have many category also each category will have many blogs

### part 1 (project setup)

- setup a typescript project
  ```bash
      npm init -y
      pnpm i -D typescript ts-node @types/node nodemon
      npx tsc --init
      # then copy paste tsconfig from here: https://github.com/milon27/nestpress/blob/master/tsconfig.json
  ```
- install drizzle orm and drizzle kit
  ```
  pnpm i drizzle-orm mysql2 dotenv
  pnpm i -D drizzle-kit
  ```
- setup folder structure
  - src
    - db
      - db.ts
      - schema
        - user.schema.ts
    - app.ts
- Create a simple user schema [id(AI),name,email,password,role,createdAt]
- db.ts create connection with db
- migration with drizzle-kit
  - create config file for drizzle [from doc]
  - generate a migration npm script `drizzle-kit generate:mysql`
  - apply migration to our database
    - create a migrator file
    - create npm script to run deploy migration
- insert a user and query that user

### part 2 (start building a project)

- update drizzle orm
- install dotenv (create config folder, use db.ts , migrator.ts file)
- schemas/tables we will have `users, blogs, category , contact details`
  - `users` table contain user details
  - `role`
    - 1 user will have 1 role (1-1) e.g. user is an admin or customer
  - `blogs` table contain blog
    - each `blog` will have a author,1 `user` will have many `blog` (1-M)
  - `category`
    - 1 category can have many blog,1 blog can have many category `(N-M)`
- define user, role
- define blog
- define category, blog2category
- \*define the types also
- \*define the relations
- import all schema in db.ts with logger
