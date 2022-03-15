import { TinaCollection } from "@tinacms/cli"
import { iconSchema } from "./Icon"

const globalCollection: TinaCollection = {
  label: "Global",
  name: "global",
  path: "content/global",
  fields: [
    {
      type: "object",
      label: "Header",
      name: "header",
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Color",
          name: "color",
          options: [
            { label: "Default", value: "default" },
            { label: "Primary", value: "primary" },
          ],
        },
        {
          type: "object",
          label: "Nav Links",
          name: "nav",
          list: true,
          ui: {
            component: "groupList",
            defaultItem: {
              href: "home",
              label: "Home",
            },
          },
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href",
            },
            {
              type: "string",
              label: "Label",
              name: "label",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Footer",
      name: "footer",
      fields: [
        {
          type: "string",
          label: "Color",
          name: "color",
          options: [
            { label: "Default", value: "default" },
            { label: "Primary", value: "primary" },
          ],
        },
        {
          type: "object",
          label: "Social Links",
          name: "social",
          fields: [
            {
              type: "string",
              label: "Facebook",
              name: "facebook",
            },
            {
              type: "string",
              label: "Twitter",
              name: "twitter",
            },
            {
              type: "string",
              label: "Instagram",
              name: "instagram",
            },
            {
              type: "string",
              label: "Github",
              name: "github",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Theme",
      name: "theme",
      fields: [
        {
          type: "string",
          label: "Primary Color",
          name: "color",
          options: [
            {
              label: "Blue",
              value: "blue",
            },
            {
              label: "Teal",
              value: "teal",
            },
            {
              label: "Green",
              value: "green",
            },
            {
              label: "Red",
              value: "red",
            },
            {
              label: "Pink",
              value: "pink",
            },
            {
              label: "Purple",
              value: "purple",
            },
            {
              label: "Orange",
              value: "orange",
            },
            {
              label: "Yellow",
              value: "yellow",
            },
          ],
        },
        {
          type: "string",
          name: "font",
          label: "Font Family",
          options: [
            {
              label: "System Sans",
              value: "sans",
            },
            {
              label: "Nunito",
              value: "nunito",
            },
            {
              label: "Lato",
              value: "lato",
            },
          ],
        },
        {
          type: "string",
          name: "icon",
          label: "Icon Set",
          options: [
            {
              label: "Boxicons",
              value: "boxicon",
            },
            {
              label: "Heroicons",
              value: "heroicon",
            },
          ],
        },
        {
          type: "string",
          name: "darkMode",
          label: "Dark Mode",
          options: [
            {
              label: "System",
              value: "system",
            },
            {
              label: "Light",
              value: "light",
            },
            {
              label: "Dark",
              value: "dark",
            },
          ],
        },
      ],
    },
  ],
}

export { globalCollection }