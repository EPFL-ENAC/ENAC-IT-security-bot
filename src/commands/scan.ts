import { Context } from "probot";

async function scan(context: Context) {

  const prParams = context.pullRequest();

  const diff = await context.octokit.rest.pulls.get({
    owner: prParams.owner,
    repo: prParams.repo,
    pull_number: prParams.pull_number
  });
  
  const issueComment = context.issue({
    body: JSON.stringify(diff.data, null, 2)
  });
  await context.octokit.rest.issues.createComment(issueComment);
}


export default scan;