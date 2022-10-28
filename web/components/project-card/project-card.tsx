import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import { SanityProjectTag } from "../../models/sanity-project-tags";
import Tag, { tagText } from "../tag/tag";

interface ProjectCardProps {
  _id: string;
  title: string;
  intro: string;
  tags: SanityProjectTag[];
  slug: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  _id,
  title,
  intro,
  tags,
  slug,
}) => {

  const allCategories = ['development', 'design', 'content', 'administration', 'other']
  // const activeTags: string[] = []
  // if (tags !== undefined) {
  //   allCategories.forEach((category) => {
  //     if (tags.find(tag => tag.category === category) !== undefined) {
  //       activeTags.push(category)
  //     }
  //   })
  // }
  const updateCatgories = () => {
    if (tags === undefined) return
    const activeCategories = []
    console.log('Tags:', tags)
    for (const category of allCategories) {
      if (tags.find(tag => tag.category == category) !== undefined) {
        activeCategories.push(category)
      }
    }
    console.log('Categories:', activeCategories)
    setCategories(activeCategories)
  }
  const [categories, setCategories] = useState<string[]>([]) 
  useEffect(() => {
    updateCatgories();
  }, [])
  return (
    <a
      key={_id}
      className="project-card"
      href={`/project/${slug}`}
    >
      <h2 className="project-card__title">{title}</h2>
      <p>{intro}</p>
      <div className="project-card__tags">
        {
          categories.map(category => (
            <Tag key={category} category={category} text={tagText(category)}/>
          ))
        }
      </div>
    </a>
  );
} 

export default ProjectCard;
