import { Probot } from "probot";
import {help, scan} from "./commands/index.js";

export default (app: Probot) => {
  app.on(["issue_comment.created", "issue_comment.edited", "discussion_comment"], async (context) => {
    context.log.info(context);
    if(context.payload.comment.body.startsWith("/enac") && context.isBot === false) {
      switch(context.payload.comment.body.split(" ")[1]) {
        case "scan":
          await scan(context);
          break;
        case "help":
          await help(context);
          break;
      }
    }
  });
};
