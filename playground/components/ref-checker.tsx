import React, { forwardRef } from "react";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

interface RefCheckerProps {
  blok: SbBlokData;
}

const RefChecker = forwardRef<HTMLDivElement, RefCheckerProps>(
  ({ blok }, ref) => {
    return (
      <div
        {...storyblokEditable(blok)}
        data-test="ref-checker"
        key={blok._uid}
        ref={ref}
      >
        Shoud have a passed ref
      </div>
    );
  }
);

RefChecker.displayName = "RefChecker";

export default RefChecker;
