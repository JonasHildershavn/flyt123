import cn from "classnames";
import { useEffect, useState } from "react";
import {
  SanityProjectTag,
  CategoryText,
} from "../../models/sanity-project-tags";
import Tag from "../tag/tag";

interface TagsProps {
  tags: SanityProjectTag[];
}
const allCategories = [
  "development",
  "design",
  "content",
  "administration",
  "other",
];

const Tags: React.FC<TagsProps> = ({ tags }) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (tags === undefined) return;
    const activeCategories = [];
    for (const category of allCategories) {
      if (tags.find((tag: any) => tag.category == category) !== undefined) {
        activeCategories.push(category);
      }
    }
    setCategories(activeCategories);
  }, [tags]);

  return (
    <div className="tags">
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
  );
};

export default Tags;
