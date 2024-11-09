import classNames from "classnames";
import type React from "react";
import { forwardRef } from "react";

import styles from "./Spinner.module.scss";

interface SpinnerProps {
  size?: "xs" | "s" | "m" | "l" | "xl";
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "m", className, style, ariaLabel = "Loading" }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.bounding, styles[size], className)}
        style={style}
        role="status"
        aria-label={ariaLabel}
      >
        <div className={styles.spinner} />
      </div>
    );
  },
);

Spinner.displayName = "Spinner";

export { Spinner };
