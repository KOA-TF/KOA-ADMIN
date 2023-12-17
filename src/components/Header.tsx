import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useRecoilState } from "recoil";
import { isAuthState } from "../states/isAuthState";

export const Header = () => {
  return (
    <header className="flex h-16 w-full flex-shrink-0 items-center border-b border-gray-200 px-4">
      <div className="flex items-center gap-4">
        <HomeButton />
        <AdminName />
      </div>
      <div className="flex-1"></div>
      <LogoutButton />
    </header>
  );
};

const HomeButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.ROOT);
  };

  return (
    <button
      className="rounded p-1 hover:bg-gray-100 active:bg-transparent"
      onClick={handleClick}
    >
      <img src={"logo.svg"}></img>
    </button>
  );
};

const AdminName = () => {
  return <span className="font-bold">ADMIN</span>;
};

const LogoutButton = () => {
  const [isAuth, setIsAuth] = useRecoilState(isAuthState);

  const navigate = useNavigate();
  const handleLogout = () => {
    setIsAuth(false);
    navigate(ROUTES.AUTHENTICATION);
  };

  return (
    <>
      {isAuth ? (
        <button
          className="w-36 rounded-lg p-2 hover:bg-gray-100 active:bg-transparent"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : null}
    </>
  );
};
