import {
  Button,
  Link as LinkUI,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
} from "@nextui-org/react";

import { useEffect, useState } from "react";

import { IconApiMarvel, IconMarvel } from "./icons/";

import { Link, useLocation } from "react-router-dom";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

enum Color {
  FOREGROUND = "foreground",
  PRIMARY = "primary",
  SECUNDARY = "secondary",
  SUCCESS = "success",
  DANGER = "danger",
}

const menuItems = [
  {
    title: "INICIO",
    href: "/",
    isActive: true,
    color: Color.DANGER,
  },
  {
    title: "HÈROES",
    href: "/characters",
    isActive: false,
    color: Color.FOREGROUND,
  },
  {
    title: "ACERCA DE",
    href: "/about",
    isActive: false,
    color: Color.FOREGROUND,
  },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    const mode = localStorage.getItem("mode");

    if (mode === null) {
      return false;
    }

    return mode === "dark" ? true : false;
  });

  useEffect(() => {
    isDark
      ? (document.querySelector(".main")?.classList.add("dark"),
        localStorage.setItem("mode", "dark"))
      : (document.querySelector(".main")?.classList.remove("dark"),
        localStorage.setItem("mode", "light"));
  }, [isDark]);

  const { pathname } = useLocation();

  const path = pathname.split("/")[1];

  menuItems.forEach((menuItem) => {
    menuItem.href === `/${path}`
      ? ((menuItem.isActive = true), (menuItem.color = Color.DANGER))
      : ((menuItem.isActive = false), (menuItem.color = Color.FOREGROUND));
  });

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll={!isMenuOpen}
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
    >
      {/* ---------------responsive------------------- */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="dark:text-white"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <IconMarvel />
        </NavbarBrand>
      </NavbarContent>

      {/* ------------------------------------------- */}

      <NavbarContent justify="start" className="hidden sm:flex">
        <NavbarBrand>
          <Link
            className="cursor-pointer hover:scale-110 hover:opacity-60 "
            to={"/"}
          >
            <IconMarvel />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${index}`}>
            <NavbarItem isActive={item.isActive}>
              <LinkUI color={item.color} className="w-full" size="lg">
                <Link to={item.href}>{item.title}</Link>
              </LinkUI>
            </NavbarItem>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={LinkUI}
            color="warning"
            href="https://developer.marvel.com/"
            target="_blank"
            variant="flat"
          >
            <IconApiMarvel />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Switch
            defaultChecked={isDark}
            size="lg"
            color="success"
            startContent={isDark ? <SunIcon /> : <MoonIcon />}
            endContent={isDark ? <SunIcon /> : <MoonIcon />}
            onClick={() => setIsDark((isDark) => !isDark)}
          ></Switch>
        </NavbarItem>
      </NavbarContent>

      <div className="dark:bg-black">
        <NavbarMenu className="bg-inherit overflow-hidden">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${index}`}>
              <NavbarItem className="text-center py-2" isActive={item.isActive}>
                <LinkUI
                  color={item.color}
                  className={item.isActive ? "" : "text-fuchsia-500"}
                  size="lg"
                >
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    className="dark:text-white"
                    to={item.href}
                  >
                    {item.title}
                  </Link>
                </LinkUI>
              </NavbarItem>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
    </Navbar>
  );
};
