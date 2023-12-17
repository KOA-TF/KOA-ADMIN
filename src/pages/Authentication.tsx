import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Header } from "../components/Header";
import { useSetRecoilState } from "recoil";
import { isAuthState } from "../states/isAuthState";

export const Authentication = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <Header />
      <main className="flex flex-1 items-center justify-center ">
        <div className="flex h-[340px] flex-col items-center justify-center gap-10 rounded-xl bg-white p-12 shadow-sm">
          <Title />
          <Form />
        </div>
      </main>
    </div>
  );
};

const Title = () => {
  return (
    <h1 className="text-xl font-bold">관리자용 비밀번호를 입력해주세요</h1>
  );
};

const Form = () => {
  // TODO: implement login
  const navigate = useNavigate();
  const setIsAuth = useSetRecoilState(isAuthState);

  const handleSubmit = () => {
    setIsAuth(true);
    navigate(ROUTES.ROOT);
  };

  return (
    <div className="flex gap-4">
      <input
        className="w-80 rounded-lg bg-gray-100 px-5 py-4 outline-blue-600"
        placeholder={"비밀번호 입력하기"}
        type={"password"}
      />
      <button
        className="w-40 rounded-lg bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600"
        onClick={handleSubmit}
      >
        로그인
      </button>
    </div>
  );
};
