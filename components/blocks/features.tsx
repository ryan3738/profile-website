import { Actions } from "../actions";
import { Section } from "../section";
import { Container } from "../container";
import { Icon } from "../icon";
import Image from "next/image";

export const Feature = ({ featuresColor, data }) => {
  return (
    <section
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: "16rem" }}
    >
      {data.image && (
        <div className="px-6 max-w-4xl lg:max-w-6xl flex justify-center mx-auto">
          <Image
            src={data.image}
            alt={data.title}
            className="mb-14 block h-auto max-w-full mx-auto object-cover rounded-md"
            width={640}
            height={360}
            layout="intrinsic"
          />
        </div>
      )}
      {data.icon.name && data.icon.style && data.icon.color &&
      <Icon parentColor={featuresColor} data={data.icon} />
      }
      {data.title && (
        <h3 className="text-2xl font-semibold title-font">{data.title}</h3>
      )}
      {data.text && (
        <p className="text-base opacity-80 leading-relaxed">{data.text}</p>
      )}
      {data.tags && (
        <ul className="flex flex-row flex-wrap gap-4  leading-relaxed">
        {data.tags.map((tag) => (
          <li key={tag} className="flex items-center justify-center leading-relaxed shadow bg-teal-500 rounded-full p-1 px-4 text-center">{tag}</li>
          ))}
        </ul>
      )}
      {data.actions && <Actions actions={data.actions} />}
    </section>
  );
};

export const Features = ({ data }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-wrap gap-x-10 gap-y-8 text-left`}
        size="large"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return <Feature featuresColor={data.color} key={i} data={block} />;
          })}
      </Container>
    </Section>
  );
};
