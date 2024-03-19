/*
 * @Author: 沧澜
 * @Date: 2024-03-18 23:06:10
 * @LastEditors: 沧澜
 * @LastEditTime: 2024-03-19 22:20:59
 * @Description:
 */
import { AppstoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Flex } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
// import { clearToken } from "../tools/auth";
import "./index.less";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("React状态管理库", "react-status-manage", <AppstoreOutlined />, [
    getItem("Valtio", "valtio", null),
  ]),
  getItem(
    "Javascript常用表单页面",
    "common-page",
    null,
    [
      getItem("高级表单", "pro-form", <AppstoreOutlined />),
      getItem("高级表格", "pro-table", <AppstoreOutlined />),
    ],
    "group"
  ),
  getItem(
    "Javascript 算法",
    "suanfa",
    null,
    [
      getItem("链表", "linked-list"),
      getItem("双向链表", "double-linked-list"),
      getItem("栈", "stack"),
      getItem("堆", "heap"),
      getItem("散列（哈希表）", "hash-table"),
      getItem("队列", "queue"),
      getItem("优先队列", "priority-queue"),
      getItem("字典树", "trie"),
      getItem("树", "tree", null, [
        getItem("二叉查找树", "binary-search-tree"),
        getItem("AVL树", "AVL-tree"),
        getItem("红黑树", "red-black-tree"),
        getItem("线段树", "segment-tree"),
        getItem("树状数组", "fenwick-tree"),
      ]),
      getItem("图", "map"),
      getItem("并查集", "disjoint-set"),
      getItem("布隆过滤器", "bloom-filter"),
      getItem("动态规划", "dynamic-programming"),
    ],
    "group"
  ),
];

export default function Layout() {
  const navigator = useNavigate();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    // console.log("click ", e);
    navigator(`/${key}`);
  };

  return (
    <>
      <Flex className="layout-wrapper">
        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["valtio"]}
          defaultOpenKeys={["tree", "common-page", "react-status-manage"]}
          mode="inline"
          items={items}
        ></Menu>
        <Flex className="content-wrapper" flex={"1 0"}>
          <Outlet />
          <div>222</div>
        </Flex>
      </Flex>
    </>
  );
}
