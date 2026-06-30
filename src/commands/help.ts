import { Context } from "probot";

async function help(context: Context) {
    const issueCommentHelp = context.issue({
        body: "This is a help message for the bot. Use `/enac scan` to initiate a scan or `/enac help` to see this message."
    });
    
    await context.octokit.rest.issues.createComment(issueCommentHelp);
}

export default help;