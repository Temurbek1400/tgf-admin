import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export const DRAWER_LIST = [
  {
    key: "1",
    icon: <MailIcon />,
    text: "Send ",
  },
  {
    key: "2",
    icon: <InboxIcon />,
    text: "Inbox",
  },
  {
    key: "3",
    icon: <InboxIcon />,
    text: "Inbox",
    children: [
      {
        key: "qwe",
        icon: <MailIcon />,
        text: "Send mail",
      },
      {
        key: "fwef",
        icon: <InboxIcon />,
        text: "Inbox",
      },
      {
        key: "egregerg",
        icon: <InboxIcon />,
        text: "Inbox",
      },
    ],
  },
  {
    key: "qwe",
    icon: <MailIcon />,
    text: "qweqweqwe",
    children: [
      {
        key: "qwe",
        icon: <MailIcon />,
        text: "Send mail",
      },
      {
        key: "fwef",
        icon: <InboxIcon />,
        text: "Inbox",
      },
      {
        key: "egregerg",
        icon: <InboxIcon />,
        text: "Inbox",
      },
    ],
  },
  {
    key: "4",
    icon: <MailIcon />,
    text: "Send mail",
  },
  {
    key: "5",
    icon: <InboxIcon />,
    text: "Inbox",
  },
];
