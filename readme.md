## user will have list of blogs, blog can have many category also each category will have many blogs

- part 1 (project setup)

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
