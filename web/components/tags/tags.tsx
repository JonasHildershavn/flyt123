import cn from "classnames";
import { useEffect, useState } from "react";
import {
  SanityProjectTag,
  CategoryText,
} from "../../models/sanity-project-tags";
import Tag from "../tag/tag";

interface TagsProps {
  tags: SanityProjectTag[];
  theme?: string;
  onlyTopLevel?: boolean;
}

const allCategories = [
  "development",
  "design",
  "content",
  "administration",
  "other",
];

const themes: { [key: string]: string } = {
  left: "tags--left",
  right: "tags--right",
};

const Tags: React.FC<TagsProps> = ({
  tags,
  theme = "right",
  onlyTopLevel = true,
}) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (tags === undefined || tags === null) return;

    const activeCategories = [];
    for (const category of allCategories) {
      if (tags.find((tag: any) => tag.category == category) !== undefined) {
        activeCategories.push(category);
      }
    }
    setCategories(activeCategories);
  }, [tags]);

  return (
    <div className={cn("tags", { [themes[theme]]: themes[theme] })}>
      {tags &&
        tags.length > 0 &&
        (onlyTopLevel
          ? categories.map((category) => (
              <Tag
                key={category}
                category={category}
                text={CategoryText[category]}
              />
            ))
          : tags.map(({ tag, category }) => (
              <>
                {console.log(tag, category)}
                <Tag key={category} category={category} text={tag} />
              </>
            )))}
    </div>
  );
};

export default Tags;
