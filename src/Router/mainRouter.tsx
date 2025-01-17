import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import { RepositoriesPage, NotFoundPage, HomePage } from "./lazyImports";
import Loading from "../components/Loading/Loading";
import UserNotFoundPage from "../pages/UserNotFoundPage/UserNotFoundPage";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path={"/"}
        element={
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        }
        index
      />
      <Route
        path="/search/:username"
        element={
          <Suspense fallback={<Loading />}>
            <RepositoriesPage />
          </Suspense>
        }
      />
      <Route
        path="/nouser"
        element={
          <Suspense fallback={<Loading />}>
            <UserNotFoundPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Route>,
  ),
);

export default mainRouter;
