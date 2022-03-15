import { TinaCollection } from '@tinacms/cli';
import { contentBlockSchema } from './Content';
import { featureBlockSchema } from './Feature';
import { heroBlockSchema } from './Hero';
import { testimonialBlockSchema } from './Testimonial';

const pagesCollection: TinaCollection = {
  label: "Pages",
  name: "pages",
  path: "content/pages",
  fields: [
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      templates: [
        heroBlockSchema,
        featureBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
      ],
    },
  ],
}

export { pagesCollection };