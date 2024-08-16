import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useActiveButton } from "../../contexts/ActiveButtonContext";

const UrlHighlight = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { pathname } = useLocation();
  const { setActiveButton } = useActiveButton();

  useEffect(() => {
    if (pathname === "/product/idp" || pathname === "/product/idm") {
      setActiveButton("overview");
    } else {
      const pathSegments = pathname.split("/");
      const lastSegment = pathSegments[pathSegments.length - 1];
      setActiveButton(lastSegment);
    }
  }, [pathname, setActiveButton]);

  return <>{children}</>;
};

export default UrlHighlight;
