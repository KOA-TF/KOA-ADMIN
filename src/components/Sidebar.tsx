import { Link as ReactRouterLink } from "react-router-dom";
import classNames from "classnames";

import { ROUTES } from "../constants/routes";

const SIDEBAR_ITEMS: SidebarItemProps[] = [
  { label: "학회원 관리", href: ROUTES.MANAGE_MEMBER },
  { label: "학회원 추가", href: ROUTES.ADD_MEMBER },
  { label: "댓글 신고접수", href: ROUTES.MANAGE_COMMENT },
];

export const Sidebar = () => {
  return (
    <aside className="flex w-48 flex-col bg-gray-100 pt-16">
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem key={item.href} {...item} />
      ))}
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
