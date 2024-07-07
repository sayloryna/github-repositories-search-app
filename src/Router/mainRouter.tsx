import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePAge/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path={""} element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default mainRouter;
