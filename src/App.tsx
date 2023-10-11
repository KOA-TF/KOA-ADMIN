import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ROUTES } from "./configs/routes";
import { AddCurriculum } from "./pages/AddCurriculum";
import { AddMember } from "./pages/AddMember";
import { Authentication } from "./pages/Authentication";
import { ManageCommentPage } from "./pages/ManageCommentPage";
import { ManageMemberPage } from "./pages/ManageMemberPage";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.AUTHENTICATION} element={<Authentication />} />
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.ROOT} element={<ManageMemberPage />} />
        <Route path={ROUTES.ADD_CURRICULUM} element={<AddCurriculum />} />
        <Route path={ROUTES.ADD_MEMBER} element={<AddMember />} />
        <Route path={ROUTES.MANAGE_COMMENT} element={<ManageCommentPage />} />
        <Route
          path={ROUTES.MANAGE_MEMBER}
          element={<ManageMemberPage />}
          index
        />
        <Route />
      </Route>
      <Route path="*" element={<Navigate to={ROUTES.ROOT} replace />}></Route>
    </Routes>
  );
};
