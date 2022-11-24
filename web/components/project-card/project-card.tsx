import { useEffect, useState } from "react";

import cn from "classnames";

import { SanityProjectTag } from "../../models/sanity-project-tags";

import LikeButton from "../like-button/like-button";
import Heading from "../heading/heading";
import Tags from "../tags/tags";

interface ProjectCardProps {
  _id: string;
  title: string;
  intro: string;
  tags: SanityProjectTag[];
  slug: any;
  theme?: string;
  likable: boolean;
}

const themes: { [key: string]: string } = {
  muddish: "muddish",
  blue: "blue",
  lime: "lime",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  _id,
  title,
  intro,
  tags,
  slug,
  theme = "",
  likable = true,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(
      (localStorage.getItem("likes") !== null
        ? JSON.parse(String(localStorage.getItem("likes")))
        : []
      ).includes(title)
    );
  }, [title]);

  const handleLike = (val: boolean) => {
    setIsLiked(val);
  };

  return (
    <a
      key={_id}
      title={title}
      className={cn("project-card", {
        [`project-card--${themes[theme]}`]: themes[theme],
        "project-card--liked": isLiked,
      })}
      href={`/project/${slug}`}
    >
      <div className="project-card__title-spacer">
        <Heading level={3} className="project-card__title">
          {title}
        </Heading>
      </div>

      <p className="project-card__intro">{intro}</p>
      <Tags tags={tags} />
      {likable && (
        <div className="project-card__like-button">
          <LikeButton target={title} like={handleLike} />
        </div>
      )}
    </a>
  );
};

export default ProjectCard;
