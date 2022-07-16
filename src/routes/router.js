const { default: Catalog } = require("~/pages/Catalog");
const { default: Details } = require("~/pages/Details");
const { default: Home } = require("~/pages/Home");

const publicRoutes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/:category",
    component: Catalog,
  },
  {
    path: "/:category/:id",
    component: Details,
  },
  {
    path: "/:category/search/:keyword",
    component: Catalog,
  },
];

// private router
const privateRoutes = [];

export { publicRoutes, privateRoutes };
