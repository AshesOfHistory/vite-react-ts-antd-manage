/*
 * @Author: 沧澜
 * @Date: 2024-03-19 21:32:57
 * @LastEditors: 沧澜
 * @LastEditTime: 2024-03-19 22:16:35
 * @Description:
 */
import { proxy } from "valtio";
import { IValtioStore } from "./@types/app";
/**
 * 定义数据 本质上是通过 valtio 自带的工厂函数把状态对象集成到数据总线中，然后返回全局唯一的全局状态对象
 */
const valtioStore = proxy<IValtioStore>({
  isShow: false,
});
/**
 * 操作数据
 */
export const toggleShow = () => {
  valtioStore.isShow = !valtioStore.isShow;
};

export default valtioStore;
