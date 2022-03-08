# See My Sins Pattern Library - Styled-Components and TypeScript

### Includes<!-- omit in toc -->

- [React.js](https://reactjs.org/)

- [TypeScript](https://www.typescriptlang.org)

- [ESLint](https://eslint.org)

- [Prettier](https://prettier.io)

- [Stylelint](https://stylelint.io)

- [Styled Components](https://styled-components.com/)

- [Storybook](https://storybook.js.org/)

- [Jest](https://jestjs.io/)

## Contents<!-- omit in toc -->

- [Philosophy](#philosophy)

- [Minimal code = Small bundle size](#minimal-code--small-bundle-size)

- [Scalable](#scalable)

- [Reusable](#reusable)

- [Fast](#fast)

- [Accessible](#accessible)

- [Requirements](#requirements)

- [Getting started](#getting-started)

- [Snippets](#snippets)

- [File Structure](#file-structure)

- [Scripting](#scripting)

- [Linting](#linting)

- [Styling](#styling)

- [Formatting](#formatting)

- [Storybook](#storybook)

- [Testing](#testing)

- [Commiting](#commiting)

- [Commit messages](#commit-messages)

- [Example](#example)

- [Deploying](#deploying)

## Philosophy

### Minimal code = Small bundle size

The library needs to be fast to load so the production build bundle size needs to be small.

### Scalable

This project might only ever be used by 100 people, but it also might be used by 1m people. Make sure your code can handle the scalability.

### Reusable

We like to be able to share code here. Make sure all of your code is easily reusable and keep it well documented. You might not be here forever, but your code might be! To help with this, the project uses [Storybook](https://storybook.js.org/) and each component should include a story alongside it.

### Fast

Speed currently leads the way to be able to perform well on Google. Consider speed always. Always consider if what your writing is the most efficient way to do it. Use tools like the Chrome DevTools Performance panel to keep check.

### Accessible

We want our websites to be accessible for all. The project is using [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) via ESLint to check for best coding practices and [axe-core](https://github.com/dequelabs/axe-core) tests for end-to-end accessiblity tests.

It also uses the [Storybook a11y plugin](https://storybook.js.org/addons/@storybook/addon-a11y/) which allows you to catch accessibility issues during initial development.

## Requirements

- Node.js and yarn

## Getting started

Run the following command on your local environment:

```
$ cd my-project-name
```

```
$ yarn prepare
```

This will enable husky

```
$ yarn run storybook
```

This will run storybook locally in development mode with live reload:

Open http://localhost:6006 with your browser to see the library storybook.

### Snippets

Snippets can be used to speed up the development process.

To use snippets:

1. Copy the [typescriptreact.snippet] file contents.

2. Press `cmd + p` in VSCode and type in `Configure User Snippets`.

3. Then type `typescript`.

4. Paste in the new snippets.

5. Access the snippets by typing snippet short code: (you may need to use ctrl to open up intellisense)

## File Structure

```
.
├── public # Static files
├── src.
    └── Components
        └── {Atomic Type} # Atom/Molecule/Organism.
           ├── Component.tsx # Component.
           ├── Component.stories.tsx # Component Storybook file.
           ├── Component.test.tsx # Jest Component Test file.
           └── Style.Tsx #Styled component.
```

## Scripting

The project is using Typescript v4.

### Linting

The project is using eslint to handle the linting, following the [airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) rules.

## Styling

### Styled Components

The Library uses Styled Components, you should be able to do everything with them.

```javascript
import styled from 'styled-components';

const button = styled.button(`
	display: flex;
`);
```

You can also extend base components with styled:

```javascript
import styled from 'styled-components';
import Button from './Button';

const NewButton = styled(Button)(`
	background: red;
`);
```

You can also use dynamic values for styling:

```javascript
import styled from 'styled-components';
import Button from './Button';

const NewButton = styled(Button)(`
	background: red;
`);
```

⚠️ -- To extend components using this method your base component must accept className as a prop ⚠️

It is also possible to add dynamic values to your styles.

```

import styled from 'styled-components';

export const StyledButton = styled.button<{ someValue: string }>`
  display: ${({ someValue }) => someValue};
`;

```

More info can be found [here](https://styled-components.com/)


### Formatting

The project uses Prettier to keep file formatting consistent so you shouldn't have to worry too much! It is also using Stylelint to pick up any stylesheet errors and to keep non-formatting related code consistent.

Stylelint follows the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) rulesets.

## Storybook

To start Storybook run:

```
$ yarn run sb

```

You can also run Storybook Docs:

```

$ yarn storybook-docs

```

## Testing

This project uses [Jest ](https://jestjs.io/) for testing.

Any tests go alongside the component file. See the [File Structure](#file-structure) for more detail.

To run tests you can use the following commands:

```

$ yarn run test

```

## Commiting

Please stick to the following standards when writing commit messages. It will help us track changes to the code base much more efficiently.

### Commit messages

Format: `<type>: <subject> [<jobnumber>]`

### Example

```
feat: add button component [#T123]
^------^^-----------^^--------
│      │            │
│      │            └───────> Job number based on software
│      │                      used, followed by ticket/card number.
│      │
│      └-> Summary in present tense.
│
└-> Type: See examples below.
```

Type Examples:

- `build`: (changes that affect the build system or external dependencies (example scopes: yarn, npm))

- `chore`: (updating grunt tasks etc; no production code change)

- `ci`: (changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs))

- `docs`: (changes to the documentation)

- `feat`: (new feature for the user, not a new feature for build script)

- `fix`: (bug fix for the user, not a fix to a build script)

- `perf`: (a code change that improves performance)

- `refactor`: (refactoring production code, eg. renaming a variable)

- `revert`: (reverting a previous commit)

- `style`: (formatting, missing semi colons, etc; no production code change)

- `test`: (adding missing tests, refactoring tests; no production code change)

## Deploying

You can run a build and deploy with:

```
$ yarn run deploy
```

This will deploy to git hub as a package, you will need to update the package.json version number as follows

BreakingChange.Feature.Fix

```
{
  ...
  "version": "0.0.1",
  ...
}
```

Before being able to deploy you must have .npmrc located in ~/.npmrc which should follow as below

```
  registry=https://registry.npmjs.org/
  @YOUR-GITHUB-USERNAME:registry=https://npm.pkg.github.com/
  //npm.pkg.github.com/:_authToken=YOUR-GITHUB-TOKEN
```

For more information about this configuration file read [this](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc).
