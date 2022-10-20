import { useEffect, useState } from "react";
import cn from "classnames";

interface LikeButtonProps {
  target: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ target }) => {
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
    >
      like
    </button>
  );
};

export default LikeButton;
