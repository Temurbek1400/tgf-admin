import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { AppBarProps } from "./Drawer.types";
import { List } from "@mui/material";

export const drawerWidth = 240;

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeaderStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerStyled = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const CustomListStyled = styled(List)`
  .MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters {
    padding: 8px 20px;
    border-radius: 0 !important;

    .MuiAccordionSummary-content.MuiAccordionSummary-contentGutters.css-o4b71y-MuiAccordionSummary-content {
      margin: 0;

      .MuiListItemButton-root.MuiListItemButton-gutters.MuiButtonBase-root.css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root {
        padding: 0;
        &:hover {
          background: transparent;
        }

        .MuiTouchRipple-root.css-8je8zh-MuiTouchRipple-root {
          display: none !important;
        }
      }
    }
  }
  .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
    min-height: 32px !important;
  }
  .MuiCollapse-root.MuiCollapse-entered.css-pwcg7p-MuiCollapse-root {
    .MuiCollapse-wrapper.MuiCollapse-vertical.css-smkl36-MuiCollapse-wrapper {
      .MuiAccordionDetails-root.css-15v22id-MuiAccordionDetails-root {
        padding: 0 !important;
      }
    }
  }
`;

// export const MuiDrawerStyledContent = styled.div``;
