import { useEffect, useState } from "react";
import cn from "classnames";

import Star from "../../assets/star.svg";

interface LikeButtonProps {
  target: string;
  width?: string;
  height?: string;
  like?: (val: boolean) => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  target,
  width = "40px",
  height = "40px",
  like = () => {},
}) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(
      (localStorage.getItem("likes") !== null
        ? JSON.parse(String(localStorage.getItem("likes")))
        : []
      ).includes(target)
    );
  }, [target]);

  const handleOnClick = (target: string) => {
    const currentItems: Array<string> =
      localStorage.getItem("likes") !== null
        ? JSON.parse(String(localStorage.getItem("likes")))
        : [];

    if (!isAdded) {
      currentItems.push(target);

      localStorage.setItem("likes", JSON.stringify(currentItems));
      setIsAdded(true);
      like(true);
    } else {
      localStorage.setItem(
        "likes",
        JSON.stringify(currentItems.filter((item: string) => item !== target))
      );
      setIsAdded(false);
      like(false);
    }
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <button
      className={cn("like-button", { "like-button--active": isAdded })}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleOnClick(target);
      }}
      style={{
        width: width,
        height: height,
      }}
    >
      <div className="like-button__icon">
        <Star />
      </div>
    </button>
  );
};

export default LikeButton;
