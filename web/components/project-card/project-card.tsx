import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import {
  CategoryText,
  SanityProjectTag,
} from "../../models/sanity-project-tags";
import Tag from "../tag/tag";
import cn from "classnames";

import Heading from "../heading/heading";

interface ProjectCardProps {
  _id: string;
  title: string;
  intro: string;
  tags: SanityProjectTag[];
  slug: any;
  theme?: string;
}

const themes: { [key: string]: string } = {
  white: "white",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  _id,
  title,
  intro,
  tags,
  slug,
  theme = "",
}) => {
  const allCategories = [
    "development",
    "design",
    "content",
    "administration",
    "other",
  ];

  const updateCatgories = () => {
    if (tags === undefined) return;
    const activeCategories = [];
    for (const category of allCategories) {
      if (tags.find((tag) => tag.category == category) !== undefined) {
        activeCategories.push(category);
      }
    }
    setCategories(activeCategories);
  };
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    updateCatgories();
  }, []);
  return (
    <a
      key={_id}
      title={title}
      className={cn("project-card", {
        [`project-card--${themes[theme]}`]: themes[theme],
      })}
      href={`/project/${slug}`}
    >
      <Heading level={3} className="project-card__title" theme="pinkUnderline">
        {title}
      </Heading>
      <p>{intro}</p>
      <div className="project-card__tags">
        {tags &&
          tags.length > 0 &&
          categories.map((category) => (
            <Tag
              key={category}
              category={category}
              text={CategoryText[category]}
            />
          ))}
      </div>
    </a>
  );
};

export default ProjectCard;
