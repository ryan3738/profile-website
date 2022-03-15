import { defineSchema } from "@tinacms/cli";
import { globalCollection } from "./Global";
import { blogPostsCollection } from "./BlogPosts";
import { authorsCollection } from "./Authors";
import { pagesCollection } from "./Pages";

export default defineSchema({
  collections: [
    blogPostsCollection,
    globalCollection,
    authorsCollection,
    pagesCollection,
  ],
});
