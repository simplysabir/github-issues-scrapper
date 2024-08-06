
# GitHub Issues Scrapper

A powerful API tool for scraping various types of GitHub issues from specified repositories.

## Description
GitHub Issues Scrapper is a user-friendly API designed to streamline the process of fetching GitHub issues. Catering to developers and project managers, this tool provides an efficient way to scrape different categories of issues, including 'Good First Issues', 'Help Wanted', 'First Timers Only', and all issues from any GitHub repository. It's ideal for identifying potential contributions, tracking project needs, and managing open source involvement.

## Features
- **Good First Issues:** Fetches issues labeled as good first issues, perfect for newcomers.
- **Help Wanted Issues:** Retrieves issues marked as needing help, suitable for more experienced contributors.
- **First Timers Only:** Collects issues specifically reserved for first-time contributors.
- **All Issues:** Provides a comprehensive list of all issues in a specified repository.

## Installation and Setup

### Prerequisites
- Node.js
- Basic knowledge of JavaScript and API interaction

### Setting Up the Project
1. **Clone the Repository:**
   ```
   git clone https://github.com/simplysabir/github-issues-scrapper
   cd github-issues-scrapper
   ```

2. **Install Dependencies:**
   ```
   pnpm install --frozen-lockfile
   ```

3. **Running the Server:**
   ```
   pnpm start
   ```

## Usage
Once the server is running, you can use the following endpoints to scrape GitHub issues or simply use the deployed api:

1. **Good First Issues:**
   ```
   /api/goodfirstissues/:org/:repo
   ```
   Example: `https://githubscrapper.simplysabir.xyz/api/goodfirstissues/coral-xyz/backpack`

2. **Help Wanted Issues:**
   ```
   /api/helpwantedissues/:org/:repo
   ```
   Example: `https://githubscrapper.simplysabir.xyz/api/helpwantedissues/coral-xyz/backpack`

3. **First Timers Only:**
   ```
   /api/firsttimersonly/:org/:repo
   ```
   Example: `https://githubscrapper.simplysabir.xyz/api/firsttimersonly/coral-xyz/backpack`

4. **All Issues:**
   ```
   /api/all/:org/:repo
   ```
   Example: `https://githubscrapper.simplysabir.xyz/api/all/coral-xyz/backpack`

## Contributions
Your contributions are highly valued. For any enhancements, bug fixes, or feature requests, feel free to fork the repository and submit a pull request. If you're planning significant changes, please open an issue first to discuss what you would like to change.

Explore more of my work and contributions on [GitHub](https://github.com/simplysabir) or [Portfolio](https://simplysabir.live/).
