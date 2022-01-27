// require the libraries for actions
const core = require('@actions/core');
const github = require('@actions/github');

// use an async function for the main tasks
async function main() {

    // get the inputs
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const input_1 = core.getInput('input_1');

    const context = github.context;
    const octokit = github.getOctokit(GITHUB_TOKEN)

    core.notice("Event type : "+context.eventType);
    core.notice("Event actor: "+context.actor);
    console.log(context)
}

// call the function
main();

