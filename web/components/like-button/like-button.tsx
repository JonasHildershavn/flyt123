import { useCallback, useEffect, useState } from "react";
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

  const updateIsAdded = useCallback(() => {
    setIsAdded(
      (sessionStorage.getItem("removeLikes")
        ? JSON.parse(String(sessionStorage.getItem("removeLikes")))
        : []
      ).includes(target)
        ? false
        : (sessionStorage.getItem("addLikes")
            ? JSON.parse(String(sessionStorage.getItem("addLikes")))
            : []
          ).includes(target)
        ? true
        : (sessionStorage.getItem("likes") &&
          sessionStorage.getItem("likes") !== "undefined"
            ? JSON.parse(String(sessionStorage.getItem("likes")))
            : []
          ).includes(target)
    );
  }, [target]);

  useEffect(() => {
    updateIsAdded();
    window.addEventListener("storage", () => {
      updateIsAdded();
    });
  }, [updateIsAdded]);

  useEffect(() => {
    like(isAdded);
  }, [isAdded, like]);

  const handleOnClick = (target: string) => {
    const currentItemsToRemove: Array<string> =
      sessionStorage.getItem("removeLikes") !== null
        ? JSON.parse(String(sessionStorage.getItem("removeLikes")))
        : [];

    if (currentItemsToRemove.includes(target)) {
      sessionStorage.setItem(
        "removeLikes",
        JSON.stringify(
          currentItemsToRemove.filter((item: string) => item !== target)
        )
      );
      setIsAdded(true);
    } else {
      const currentItemsToAdd: Array<string> =
        sessionStorage.getItem("addLikes") !== null
          ? JSON.parse(String(sessionStorage.getItem("addLikes")))
          : [];
      if (currentItemsToAdd.includes(target)) {
        sessionStorage.setItem(
          "removeLikes",
          JSON.stringify(
            currentItemsToAdd.filter((item: string) => item !== target)
          )
        );
        setIsAdded(false);
      } else {
        const currentItems: Array<string> =
          sessionStorage.getItem("likes") !== null
            ? JSON.parse(String(sessionStorage.getItem("likes")))
            : [];

        if (!isAdded) {
          currentItems.push(target);

          sessionStorage.setItem("likes", JSON.stringify(currentItems));
          setIsAdded(true);
        } else {
          sessionStorage.setItem(
            "likes",
            JSON.stringify(
              currentItems.filter((item: string) => item !== target)
            )
          );
          setIsAdded(false);
        }
      }
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
