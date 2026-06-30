import { Probot } from "probot";

export default (app: Probot) => {
  app.on(["issue_comment.created", "issue_comment.edited", "discussion_comment"], async (context) => {
    context.log.info(context);
    if(context.payload.comment.body.startsWith("/enac") && context.isBot === false) {
      switch(context.payload.comment.body.split(" ")[1]) {
        case "scan":
          const issueComment = context.issue({
            body: "This will be a scan somedays...",
          });
          await context.octokit.rest.issues.createComment(issueComment);
          break;
        case "help":
          const issueCommentHelp = context.issue({
            body: "No worries, I can help you!\n\nprefix: /enac\n\nCommands:\n- help: Display this help message.\n- scan: Scan the repository for security issues.",
          });
          await context.octokit.rest.issues.createComment(issueCommentHelp);
          break;
      }
    }
  });
};
