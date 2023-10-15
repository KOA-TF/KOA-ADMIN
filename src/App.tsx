import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ROUTES } from "./configs/routes";
import { AddCurriculum } from "./pages/AddCurriculum";
import { AddMember } from "./pages/AddMember";
import { Authentication } from "./pages/Authentication";
import { ManageComment } from "./pages/ManageComment";
import { ManageMember } from "./pages/ManageMember";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.AUTHENTICATION} element={<Authentication />} />
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.ROOT} element={<ManageMember />} />
        <Route path={ROUTES.ADD_CURRICULUM} element={<AddCurriculum />} />
        <Route path={ROUTES.ADD_MEMBER} element={<AddMember />} />
        <Route path={ROUTES.MANAGE_COMMENT} element={<ManageComment />} />
        <Route path={ROUTES.MANAGE_MEMBER} element={<ManageMember />} index />
        <Route />
      </Route>
    </Routes>
  );
};
