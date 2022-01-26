// require the libraries for actions
const core = require('@actions/core');
const github = require('@actions/github');
const context = github.context;

// use an async function for the main tasks
async function main() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const input_1 = core.getInput('input_1');

    console.log(input_1);
    core.info("INFO: Workflow was triggered by: " + context.eventName + " event");
    core.info("INFO: Workflow was triggered by: " + context.actor);
    core.notice("This is a notice");
    core.warning("This is a warning");
    core.error("This is an error");

    console.log(context);
}

// call the function
main();
