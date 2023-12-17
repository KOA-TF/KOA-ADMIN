import { Link as ReactRouterLink } from "react-router-dom";
import classNames from "classnames";

import { ROUTES } from "../constants/routes";
import { useRecoilState } from "recoil";
import { showSidebarState } from "../states/showSidebarState";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SIDEBAR_ITEMS: SidebarItemProps[] = [
  { label: "학회원 관리", href: ROUTES.MANAGE_MEMBER },
  { label: "학회원 추가", href: ROUTES.ADD_MEMBER },
  { label: "댓글 신고접수", href: ROUTES.MANAGE_COMMENT },
];

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(showSidebarState);

  return (
    <aside
      className={classNames("relative flex flex-col  bg-gray-100 pt-16", {
        "w-0": !showSidebar,
        "w-48": showSidebar,
      })}
    >
      {showSidebar
        ? SIDEBAR_ITEMS.map((item) => <SidebarItem key={item.href} {...item} />)
        : null}
      <button
        className={classNames(
          "z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-100 active:bg-gray-200",
          {
            "absolute -right-4 top-4": showSidebar,
            "absolute -left-4 top-4": !showSidebar,
          },
        )}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </aside>
  );
};

interface SidebarItemProps {
  label: string;
  href: string;
}

const SidebarItem = ({ label, href }: SidebarItemProps) => {
  const pathname = window.location.pathname;

  const shouldMatchForRoot = href === ROUTES.MANAGE_MEMBER;
  const isMatch = pathname.endsWith(href);
  const isActive =
    isMatch ||
    (shouldMatchForRoot &&
      (pathname.endsWith(ROUTES.BASE) || pathname.endsWith(ROUTES.BASE + "/")));

  return (
    <ReactRouterLink
      className={classNames(
        "flex h-16 w-full items-center justify-center text-xl font-semibold hover:no-underline",
        {
          "bg-blue-500 text-white": isActive,
          "text-gray-600": !isActive,
        },
      )}
      to={href}
    >
      {label}
    </ReactRouterLink>
  );
};
