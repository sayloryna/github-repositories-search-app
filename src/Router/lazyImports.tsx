import { lazy } from "react";

export const RepositoriesPage = lazy(
  () => import("../pages/RepositoriesPage/RepositoriesPage"),
);

export const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

export const NotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage"),
);
