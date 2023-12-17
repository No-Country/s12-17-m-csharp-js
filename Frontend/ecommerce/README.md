## Getting Started

Install all dependencies:

```bash
npm install
# or
yarn install
# or
pnpm dev
# or
bun dev
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Installed Packages

- React Icons
- NextJS 14.0.3

# Backend recommendations
- [ ] While signing up or signing in, automatically return the user object (with their id)including the token field (do not return the password field).
  - The purpose of returning a token during the sign-up process is to eliminate the need for an additional request to retrieve the token, thereby optimizing the frontend operations.
  - So I can also display the user name after logging in.

- [ ] While creating a product add up to 4 images so it complains with the original design.