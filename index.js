// require the libraries for actions
const core = require('@actions/core');
const github = require('@actions/github');


// use an async function for the main tasks
async function main() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(GITHUB_TOKEN);
    const { context } = require('@actions/github')
    const { pull_request } = context.payload;

    console.log({ context });

    if (!context.payload.action) {
        console.warning("This action should only be used with pull requests.");
        return
    }

    if (context.payload.action === "opened") {
        await octokit.rest.issues.createComment({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: pull_request.number,
            body: 'Thank you for submitting a pull request! We will try to review this as soon as we can.'
        });
        await octokit.rest.issues.addLabels({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: pull_request.number,
            labels: ['acknowledged']
        })
    }
}

// call the function
main();
