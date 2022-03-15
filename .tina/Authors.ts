import { TinaCollection } from '@tinacms/cli';

const authorsCollection: TinaCollection = {
  label: "Authors",
    name: "authors",
      path: "content/authors",
        fields: [
          {
            type: "string",
            label: "Name",
            name: "name",
          },
          {
            type: "string",
            label: "Avatar",
            name: "avatar",
          },
        ],
};

export { authorsCollection };