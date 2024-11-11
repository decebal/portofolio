"use client";

import styles from "@/app/gallery/Gallery.module.scss";
import { gallery } from "@/app/resources";
import { SmartImage } from "@/once-ui/components";
import Masonry from "react-masonry-css";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  // noinspection TypeScriptUnresolvedReference
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid as string}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map((image, index) => (
        <SmartImage
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
          src={image.src}
          alt={image.alt}
          className={styles.gridItem}
        />
      ))}
    </Masonry>
  );
}
