// require the libraries for actions
const core = require('@actions/core');
const github = require('@actions/github');
const context = github.context;

// use an async function for the main tasks
async function main() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(GITHUB_TOKEN)
    const input_1 = core.getInput('input_1');

    console.log(input_1);
    core.info("INFO: This workflow was triggered by a "+context.eventName+" event");
    core.notice("NOTICE: This workflow was triggered by a "+context.eventName+" event");
    core.warning("WARNING: This workflow was triggered by a "+context.eventName+" event");
    core.error("ERROR: This workflow was triggered by a "+context.eventName+" event");
    console.log(context);
}

// call the function
main();
