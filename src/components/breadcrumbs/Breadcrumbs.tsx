import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink, useLocation } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./Breadcrumbs.scss";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && x !== "overview");

  return (
    <div className="breadcrumbWrapper">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        className="breadcrumbs"
      >
        <Link component={RouterLink} to="/" className="breadcrumbsHome">
          Home
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          if (value === "product") {
            return (
              <Typography key={to} className="breadcrumbsProduct">
                {value}
              </Typography>
            );
          }

          return index === pathnames.length - 1 ? (
            <Typography key={to} className="breadcrumbsLastItem">
              {value}
            </Typography>
          ) : (
            <Link
              component={RouterLink}
              to={to}
              key={to}
              className="breadcrumbsLink"
            >
              {value}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
