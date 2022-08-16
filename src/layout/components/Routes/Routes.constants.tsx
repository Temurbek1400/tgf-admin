import { lazy } from "react";

const UsersRoutes = lazy(() => import("pages/users"));
const TicketsRoutes = lazy(() => import("pages/tickets"));
const FieldsRoutes = lazy(() => import("pages/fields"));
const PositionsRoutes = lazy(() => import("pages/positions"));
const AgendaRoutes = lazy(() => import("pages/agenda"));
const SpeakersRoutes = lazy(() => import("pages/speakers"));
const CommentsRoutes = lazy(() => import("pages/comments"));
const SettingsRoutes = lazy(() => import("pages/settings"));
const LoginRoutes = lazy(() => import("pages/login"));

export const ROUTE_LIST = [
  {
    key: "users",
    element: <UsersRoutes />,
    path: "/users/*",
  },
  {
    key: "tickets",
    element: <TicketsRoutes />,
    path: "/tickets/*",
  },
  {
    key: "fields",
    element: <FieldsRoutes />,
    path: "/fields/*",
  },
  {
    key: "positions",
    element: <PositionsRoutes />,
    path: "/positions/*",
  },

  {
    key: "agenda",
    element: <AgendaRoutes />,
    path: "/agenda/*",
  },
  {
    key: "speakers",
    element: <SpeakersRoutes />,
    path: "/speakers/*",
  },
  {
    key: "comments",
    element: <CommentsRoutes />,
    path: "/comments/*",
  },
  {
    key: "settings",
    element: <SettingsRoutes />,
    path: "/settings/*",
  },
  {
    key: "login",
    element: <LoginRoutes />,
    path: "/login",
  },
];
