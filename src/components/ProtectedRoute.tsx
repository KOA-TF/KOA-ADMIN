import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useLayoutEffect } from "react";
import { ROUTES } from "../constants/routes";
import { useRecoilValue } from "recoil";
import { isAuthState } from "../states/isAuthState";

export const ProtectedRoute = () => {
  const navigate = useNavigate();

  const isAuth = useRecoilValue(isAuthState);

  useLayoutEffect(() => {
    if (!isAuth) {
      navigate(ROUTES.AUTHENTICATION);
    }
  }, [isAuth, navigate]);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
