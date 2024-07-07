import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RepositoriesPage from "../pages/RepositoriesPage/RepositoriesPage";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path={"/"} element={<HomePage />} index />
      <Route path="/search/:username" element={<RepositoriesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default mainRouter;
