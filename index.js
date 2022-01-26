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
    core.info("INFO: Workflow was triggered by: " + context.eventName + " event");
    core.info("INFO: Workflow was triggered by: " + context.actor);
    core.notice("NOTICE: This is a notice");
    core.warning("WARNING: This is a warning");
    core.error("ERROR: This is an error");

    console.log(context);
}

// call the function
main();
