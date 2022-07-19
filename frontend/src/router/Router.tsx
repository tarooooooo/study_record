import { memo, FC } from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../components/pages/Home";
import {homeRoutes} from "./HomeRoutes";


export const Router: FC = memo(() => {
  return(
    <Routes>
      <Route path='/'/>
      <Route
        path='/home'
      >
        <Route index element={<Home/>}/>
        {homeRoutes.map((route) => (
          <Route path={route.path} element={route.children}/>
        ))}
      </Route>
    </Routes>
  )
});
