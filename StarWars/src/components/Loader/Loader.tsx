import { memo } from "react";
import "./Loader.scss";

type TLoaderProps = {
  isLoading?: boolean;
};

const Loader = (props: TLoaderProps) => {
  const { isLoading } = props;

  if (!isLoading) return null;

  return (
    <div className="Loader">
      <div className="Loader__container">
        <img
          src="src/assets/loader.gif"
          alt="Loading..."
          className="Loader__image"
        />
      </div>
    </div>
  );
};

export default memo(Loader);
