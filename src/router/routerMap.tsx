/*
 * @Author: 沧澜
 * @Date: 2024-03-18 23:18:17
 * @LastEditors: 沧澜
 * @LastEditTime: 2024-03-19 22:00:08
 * @Description:
 */
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import User from "../pages/User";
import Community from "../pages/Community";
import Valtio from "../pages/ReactStatusTools/valtio";
import Layout from "../layout";
import PrivateRoute from "./privateRoute";

export const routerMap = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/Valtio",
        element: <Valtio />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  }, //其他没有被注册过的路径统一重定位到login
];
