# My Site 2.0

This is a complete rebuilding of my own site using a full Typescript stack with NextJS on the frontend running with an Express server powering GraphQL. The idea was to rebuild my site in a more flexiable way using TypeScript technologies that provide
an easy to extend base that will be used in a whole host of applications I create.

The idea with putting a GraphQL backend was to aim to unify all my endpoints and databases making for a much nicer interface for me to work with.

I wanted to experiment with NextJS to see how it would work compared to the normal create-react-app

## Technologies

- TypeScript
- ApolloGrapQL
- NextJS
  -Docker

## How to use it?

- To install: `npm install` `yarn install`
- To Run Dev server with HMR: `npm run dev`
- To Run Tests with HMR: `npm run test:watch`

## Using Docker With args

Docker is reliant upon a JWT Secret key as a result when building the image it should be supplied as follows:

```bash
docker build --tag=my-site-2.0-2 --build-arg JWT_SECRET=XXX .
```

If none is supplied in the build script the failback default will be used.
This will prevent errors in the final bundle but it is not very secure so it is adviced to always supply a secret to docker
