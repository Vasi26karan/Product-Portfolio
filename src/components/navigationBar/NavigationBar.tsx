import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ReferencesButton from "../buttons/ReferencesButton";
import TeamMembersButton from "../buttons/TeamMembersButton";
import OverviewButton from "../buttons/OverviewButton";
import ConsumersButton from "../buttons/ConsumersButton";
import Breadcrumb from "../breadcrumbs/Breadcrumbs";
import "./NavigationBar.scss";
import { useCallback, useMemo, useState } from "react";

const NavigationBar = ({ productId }: { productId: string }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const drawerContent = useMemo(
    () => (
      <List>
        <ListItemButton component={Link} to={`/product/${productId}/overview`}>
          <ListItemText primary="Overview" />
        </ListItemButton>
        <ListItemButton component={Link} to={`/product/${productId}/consumers`}>
          <ListItemText primary="Consumers" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to={`/product/${productId}/references`}
        >
          <ListItemText primary="References" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to={`/product/${productId}/team-members`}
        >
          <ListItemText primary="Team Members" />
        </ListItemButton>
        <ListItemButton component="a" href="mailto:contact@company.com">
          <ListItemText primary="Contact Us" />
        </ListItemButton>
      </List>
    ),
    [productId]
  );

  return (
    <div className="stickyContainer">
      <AppBar position="static" className="navbar">
        <Toolbar className="toolbar">
          <Typography
            variant="h6"
            component="div"
            className="productLinkContainer"
          >
            <Link to="/products" className="productLink">
              PRODUCTS
            </Link>
          </Typography>
          {isTabletOrMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <>
              <Stack direction="row" spacing={2} className="navButtons">
                <Link to={`/product/${productId}/overview`}>
                  <OverviewButton />
                </Link>
                <Link to={`/product/${productId}/consumers`}>
                  <ConsumersButton />
                </Link>
                <Link to={`/product/${productId}/references`}>
                  <ReferencesButton />
                </Link>
                <Link to={`/product/${productId}/team-members`}>
                  <TeamMembersButton />
                </Link>
              </Stack>
              <Button
                variant="contained"
                href="mailto:contact@company.com"
                className="contactUsButton"
              >
                Contact Us
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <hr className="line" />
      <Breadcrumb />
      <hr className="line" />
    </div>
  );
};

export default NavigationBar;
