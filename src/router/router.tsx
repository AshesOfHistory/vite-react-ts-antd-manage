/*
 * @Author: 沧澜
 * @Date: 2024-03-18 23:27:42
 * @LastEditors: 沧澜
 * @LastEditTime: 2024-03-18 23:28:07
 * @Description: 
 */
import { useRoutes } from "react-router-dom";
import { routerMap } from "./routerMap";
function Router() {
  const routerTab = useRoutes(routerMap); //注册前端路由表
  return <div>{routerTab}</div>;
}
export default Router;
