import { TinaCollection } from "@tinacms/cli";

const blogPostsCollection: TinaCollection = {
  label: "Blog Posts",
    name: "posts",
      path: "content/posts",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
          },
          {
            type: "reference",
            label: "Author",
            name: "author",
            collections: ["authors"],
          },
          {
            type: "datetime",
            label: "Posted Date",
            name: "date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "hh:mm A",
            },
          },
          {
            type: "image",
            name: "heroImg",
            label: "Hero Image",
          },
          {
            type: "string",
            label: "Excerpt",
            ui: {
              component: "textarea",
            },
            name: "excerpt",
          },
          {
            type: "string",
            label: "Body",
            ui: {
              component: "markdown",
            },
            name: "body",
            isBody: true,
          },
        ],
};

export { blogPostsCollection };