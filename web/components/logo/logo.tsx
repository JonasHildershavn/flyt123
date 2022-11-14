import cn from "classnames";
import { useEffect, useState } from "react";

import { useWindowScrollPositions } from "../../js/useWindowScrollPosition";

const Logo: React.FC = () => {
  const scrollY = useWindowScrollPositions(1);

  return (
    <div
      className="logo"
      style={{
        opacity: 1.5 - scrollY / 175,
      }}
    >
      <span className={cn("logo__letter", "logo__letter--f")}>F</span>
      <span className={cn("logo__letter", "logo__letter--l")}>L</span>
      <span className={cn("logo__letter", "logo__letter--y")}>Y</span>
      <span className={cn("logo__letter", "logo__letter--t")}>T</span>
    </div>
  );
};

export default Logo;
