import { useState, useEffect, useRef } from "react";

import { patrickHand } from "@/lib/fonts";
import * as SC from "./styles";

export const Sort = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Trending");
  const sortContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortContainerRef.current &&
        !sortContainerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (sortOption: any) => {
    setSelectedSort(sortOption);
    setMenuOpen(false);
  };

  return (
    <SC.SortContainer ref={sortContainerRef}>
      <SC.SortButton className={patrickHand.className} onClick={handleClick}>
        Sort: {selectedSort}
      </SC.SortButton>
      {menuOpen && (
        <SC.Menu>
          <SC.MenuItem
            onClick={() => handleMenuClick("Trending")}
            selected={selectedSort === "Trending"}
            className={patrickHand.className}
          >
            Trending
          </SC.MenuItem>
          <SC.MenuItem
            onClick={() => handleMenuClick("Newest")}
            selected={selectedSort === "Newest"}
            className={patrickHand.className}
          >
            Newest
          </SC.MenuItem>
          <SC.MenuItem
            onClick={() => handleMenuClick("Popular")}
            selected={selectedSort === "Popular"}
            className={patrickHand.className}
          >
            All time popular
          </SC.MenuItem>
        </SC.Menu>
      )}
    </SC.SortContainer>
  );
};
