import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, ListItem, Button } from "@material-ui/core";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ListIcon from "@material-ui/icons/List";

const links = [
  {
    title: "Dashboard",
    href: "/feed",
    icon: AssessmentIcon,
  },
  {
    title: "Add Collection",
    href: "/add-collection",
    icon: AddRoundedIcon,
  },
  {
    title: "List of collection",
    href: "/list-collections",
    icon: ListIcon,
  },
];

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "flex-start",
    letterSpacing: 0,
    padding: "10px 8px",
    textTransform: "none",
    width: "100%",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: "auto",
  },
  active: {
    color: theme.palette.primary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: theme.palette.primary.main,
    },
  },
}));

const NavItems = (className) => {
  const classes = useStyles();
  return (
    <div>
      {links.map(({ title, icon: Icon, href }) => {
        return (
          <ListItem className={clsx(classes.item, className)}>
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={Link}
              to={href}
            >
              <Icon className={classes.icon} />
              <span className={classes.title}>{title}</span>
            </Button>
          </ListItem>
        );
      })}
    </div>
  );
};

export default NavItems;
