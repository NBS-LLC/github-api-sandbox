import { Octokit } from "@octokit/rest";

const octokit = new Octokit();
const { data: issues } = await octokit.rest.issues.listForRepo({
  owner: "NBS-LLC",
  repo: "ng-spotify-importer",
});

console.log(
  issues
    .filter((issue) => issue.pull_request === undefined)
    .map((issue) => issue.title)
);
