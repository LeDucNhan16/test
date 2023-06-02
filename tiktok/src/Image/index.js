import { forwardRef, useState } from "react";
import Images from "../assets/Images";
import style from "./Image.module.scss";
import classNames from "classnames";

const Image = forwardRef(
  ({ alt, src, fallback = Images.noImage, className, ...props }, ref) => {
    const [fallbackImg, setFallbackImg] = useState("");

    const handleFallback = () => {
      setFallbackImg(fallback);
    };

    return (
      <img
        className={classNames(style.wrapper, className)}
        ref={ref}
        src={fallbackImg || src}
        alt={alt}
        {...props}
        onError={handleFallback}
      />
    );
  }
);

export default Image;