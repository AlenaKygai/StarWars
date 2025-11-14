// Loading indicator component
import { memo } from "react";
import "./Loader.scss";

// Props interface for Loader component
type TLoaderProps = {
  isLoading?: boolean;
};

// Loader component - displays loading animation when data is being fetched
const Loader = (props: TLoaderProps) => {
  const { isLoading } = props;

  // Don't render anything if not loading
  if (!isLoading) return null;

  return (
    <div className="Loader">
      <div className="Loader__container">
        {/* Animated loading GIF */}
        <img src="/loader.gif" alt="Loading..." className="Loader__image" />
      </div>
    </div>
  );
};

export default memo(Loader);
