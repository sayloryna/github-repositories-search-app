import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import { RepositoriesPage, HomePage, NotFoundPage } from "./lazyImports";
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";

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
