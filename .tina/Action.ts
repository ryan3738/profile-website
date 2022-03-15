import { TinaField } from "@tinacms/cli";

const actionSchema: TinaField = {
  label: "Actions",
  name: "actions",
  type: "object",
  list: true,
  ui: {
    component: "groupList",
    defaultItem: {
      label: "Action Label",
      type: "button",
      icon: true,
      link: "/",
    },
  },
  fields: [
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Type",
      name: "type",
      type: "string",
      options: [
        { label: "Button", value: "button" },
        { label: "Link", value: "link" },
      ],
    },
    {
      label: "Icon",
      name: "icon",
      type: "boolean",
    },
    {
      label: "Link",
      name: "link",
      type: "string",
    },
  ],
};

export { actionSchema };