# Github Repositories Search App

Github repositories navigator that allows the user to see the list of repositories a Github user has and they can be filtered by name and/or Language.

## Deployment

You can see a deployed version with Netlify at [Github Repositories](https://github-repositories-navigator.netlify.app/)

## Installation Instructions 🚀

1. Clone the repository:
   ```
   git clone https://github.com/your-username/github-repositories-search-app.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Compile the code:

   ```
   npm run build
   ```

4. Run the code

   ```
   npm run preview
   ```

## Usage Instructions

### Basic Usage

To start or run the project, use the following command:

```
npm run dev
```

### CLI Commands 📟

```
- `npm run dev`: Start the development server.
- `npm run build`: Build the project.
- `npm run lint`: Run ESLint to lint the project.
- `npm run preview`: Preview the built project (This is the deploy version)
- `npm run prepare`: Prepare Husky for git hooks.
- `npm run test`: Run tests using Vitest.
- `npm run test:coverage`: Run tests and generate a coverage report in `lcov` format
```

## Features

- Simple app with a main search bar where users can enter a Github username (this is the home page).
- Upon entering a valid username, the app navigates to `/search/username` and loads the first 30 repositories.
- Displays a loading indicator while fetching data from the API.
- Shows a "no user found" page if the username is invalid.
- Provides additional search functionality to filter repositories by name and language.
- Displays a total result count.
- Clicking on the user's avatar navigates to the user's profile in Github
- Clicking on a repository name navigates to the repository page on Github.

## Additional Sections

### Statistics 📊

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sayloryna_github-repositories-search-app&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=sayloryna_github-repositories-search-app)[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sayloryna_github-repositories-search-app&metric=bugs)](https://sonarcloud.io/summary/new_code?id=sayloryna_github-repositories-search-app)[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=sayloryna_github-repositories-search-app&metric=coverage)](https://sonarcloud.io/summary/new_code?id=sayloryna_github-repositories-search-app)

### Things to Improve 👷‍♂️🚧

- Change the way repositories are filtered to use a client-side method, possibly utilizing the Github API v4.
- Implement storybooks.
- Improve the UX/UI design.
- Add a Sass mix for the `display:flex` atributte, one with direction `row` and one with direction `column.` when its centered
- Add pagination for repositories or change the request to use the `per_page` header to increase the number of repositories shown.
- Add a `sort by` filter as the API supports a `sort` header parameter.
- Include more information in repository cards, such as stars and the number of commits, to resemble the original Github interface.

### Github Workflows and Husky Hooks

#### Workflows 🛑

1. **Configuration Check**:
   - Ensure there is a `.editorconfig` file.
   - Verify `node_modules` and `dist` are gitignored.
   - Check for no ESLint warnings.
   - Validate commit messages.
2. **Sonar Coverage**:
   - Workflow for checking Sonar coverage.
3. **Test Checks**:
   - Ensure all tests pass.

#### Husky Hooks 🐺

1. **pre-commit**:
   - Check that commits are not made on the `main` branch.
   - Run lint-staged to execute `Prettier` and ensure `ESLint` has zero warnings on TypeScript files.
2. **pre-push**:
   - Verify branch names start with `feature/`, `bugfix/`, or `hotfix/`.
3. **commit-lint**:
   - Ensure commit messages start with a capital letter and are between 10 and 72 characters long.
