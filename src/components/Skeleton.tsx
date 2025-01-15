import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="325" rx="5" ry="5" width="252" height="88" />
    <circle cx="126" cy="126" r="126" />
    <rect x="0" y="276" rx="5" ry="5" width="252" height="25" />
    <rect x="0" y="436" rx="5" ry="5" width="90" height="30" />
    <rect x="111" y="436" rx="20" ry="20" width="143" height="40" />
  </ContentLoader>
);

export default Skeleton;
