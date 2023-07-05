# Testing Vue.js Applications 2023

We're following along with the book _Testing Vue.js Applications_ from 2018. The concepts are the same today, but the tooling has changed a bit.

-  webpack --> Vite
-  jest --> vitest
-  ? --> ?

We'll see as we go.

jest had a --watch mode but vitest seems to do that by default and with HMR

## Order to introduce concepts vs implementation details...

Work out something loose here to chop up and scoot around later

## What can you do with just vitest?

Basic examples

`expects(something).toBe(something)`
`expects(something.text()).toContain("string")`

Talk about basic async situations

Right here ---- it would be good to go into as much exploration of the core vitest methods before adding other libraries ---

## Why would you want to add in `@vue/test-utils`?

mounting components. helper functions and methods. `mount(component)` (gets you that "wrapper") `text()` `find(selector)` `findAll(selector)` `attributes()`

## Why would you want to add in `testing-library`?

...

Current page in the book: 59
