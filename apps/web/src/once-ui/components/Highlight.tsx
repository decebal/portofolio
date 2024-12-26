import type React from "react";
import { Text } from "./Text";
import styles from "./Highlight.module.scss";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Text
      as="span"
      className={`${styles.highlight} ${className || ""}`}
    >
      {children}
    </Text>
  );
};
