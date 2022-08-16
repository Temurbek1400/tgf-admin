import PeopleIcon from "@mui/icons-material/People";
import StyleIcon from "@mui/icons-material/Style";
import ClassIcon from "@mui/icons-material/Class";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EventNoteIcon from "@mui/icons-material/EventNote";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import CommentIcon from "@mui/icons-material/Comment";
import SettingsIcon from "@mui/icons-material/Settings";

const DEFAULT_PAGE = 0;
const DEFAULT_LIMIT = 10;

export const SIDEBAR_LIST = [
  {
    key: "1",
    icon: <PeopleIcon color="primary" />,
    text: "Users",
    path: `/users?page=${DEFAULT_PAGE}&limit=${DEFAULT_LIMIT}`,
  },
  {
    key: "2",
    icon: <StyleIcon />,
    text: "Tickets",
    path: `/tickets?page=${DEFAULT_PAGE}&limit=${DEFAULT_LIMIT}`,
  },
  {
    key: "3",
    icon: <ClassIcon />,
    text: "Fields",
    path: `/fields`,
  },
  {
    key: "4",
    icon: <AccountBoxIcon />,
    text: "Positions",
    path: `/positions`,
  },
  {
    key: "5",
    icon: <EventNoteIcon />,
    text: "Agenda",
    path: "/agenda",
  },
  {
    key: "6",
    icon: <InterpreterModeIcon />,
    text: "Speakers",
    path: "/speakers",
  },
  {
    key: "7",
    icon: <CommentIcon />,
    text: "Comments",
    path: "/comments",
  },
  {
    key: "8",
    icon: <SettingsIcon />,
    text: "Settings",
    path: "/settings",
    children: [
      {
        key: "8-1",
        text: "Map",
        path: `/settings/map`,
      },
      {
        key: "8-2",
        text: "Technical support",
        path: `/settings/tech-support`,
      },
      {
        key: "8-3",
        text: "Link",
        path: `/settings/link`,
      },
    ],
  },
];

export const sidebarOpenWith = "270px";

export const sidebarCloseWith = "80px";
