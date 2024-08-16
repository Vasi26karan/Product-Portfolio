import { useParams } from "react-router-dom";
import React from "react";
import Missing from "../components/missing/Missing";
import NavigationBar from "../components/navigationBar/NavigationBar";

const ValidProductRoute: React.FC<{ component: React.FC }> = ({
  component: Component,
}) => {
  const { productId } = useParams<{ productId: string }>();

  if (!productId) {
    return <Missing />;
  }

  return (
    <div>
      <NavigationBar productId={productId} />
      <Component />
    </div>
  );
};

export default ValidProductRoute;
