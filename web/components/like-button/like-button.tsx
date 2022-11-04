import { useEffect, useState } from "react";
import cn from "classnames";

import Star from "../../assets/star.svg";
import { height } from "@mui/system";

interface LikeButtonProps {
  target: string;
  width?: string;
  height?: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  target,
  width = "40px",
  height = "40px",
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
    } else {
      localStorage.setItem(
        "likes",
        JSON.stringify(currentItems.filter((item: string) => item !== target))
      );
      setIsAdded(false);
    }
  };
  return (
    <button
      className={cn("like-button", { "like-button--active": isAdded })}
      onClick={() => handleOnClick(target)}
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