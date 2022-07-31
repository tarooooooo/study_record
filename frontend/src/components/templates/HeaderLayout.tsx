import { memo, ReactNode, FC } from "react"
import { Outlet } from "react-router-dom";
import { HeaderComponents } from "../organisms/layout/Hearder";

export const HeaderLayout = memo(() => {
  return (
    <>
      <HeaderComponents/>
      <Outlet/>
    </>
  )
});

