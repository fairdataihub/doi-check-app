/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log.info("Yay, the app was loaded!");

  app.on("installation.created", async (context) => {
    const owner = context.payload.installation.account.login;

    for (const repo of context.payload.repositories) {
      const repoName = repo.name;

      try {
        // Get the README
        const readme = await context.octokit.rest.repos.getReadme({
          owner,
          repoName,
        });

        // Get the decoded content
        const readmeContent = Buffer.from(
          readme.data.content,
          "base64"
        ).toString();

        // Check if a doi is present in the readme
        const doiRegex = /10.\d{4,9}\/[-._;()/:A-Z0-9]+/i;
        const doi = doiRegex.exec(readmeContent);

        /**
         * !TODO: Check if the doi is valid
         * Potentially use the crossref api or resolve the DOI manually
         */

        if (doi) {
          console.log("DOI found");
        } else {
          // throw an error to trigger the catch block
          throw new Error("DOI not found");
        }
      } catch (error) {
        console.log("Opening issue...");

        const repoIssue = await context.octokit.rest.issues.create({
          owner,
          repo: repoName,
          title: "Could not find a DOI in the README",
          body: ISSUE_MESSAGE,
        });

        return repoIssue;
      }
    }
  });
};

const ISSUE_MESSAGE = `# DOI Checker 🔍

## Status ℹ️

We went through the README in your repository and couldn't find any DOI references.

## What you can do 💡

### Add a DOI 📝

If you have a DOI for your software, please add it to your README. You can do this by adding a line like this to your README:

    [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.123456.svg)](https://doi.org/10.5281/zenodo.123456)

If you don't have a DOI yet, you can get one from platforms like [Zenodo 📦](https://zenodo.org/), [Figshare 📊](https://figshare.com/) or [DataCite 📚](https://datacite.org/). 

### FAIRshare 🌟

To help you get started, we've created an application that you can use to upload your software to Zenodo and/or Figshare and get a DOI for it. You can find the application at [fairdataihub.org/fairshare 🔍](https://fairdataihub.org/fairshare).`;
