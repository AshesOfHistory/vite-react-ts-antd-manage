/*
 * @Author: 沧澜
 * @Date: 2024-03-18 23:08:38
 * @LastEditors: 沧澜
 * @LastEditTime: 2024-03-18 23:09:10
 * @Description: 
 */
/**
 * 设置token
 * @param token
 * @returns
 */
export const setToken = (token: string) =>
  window.localStorage.setItem("auth_token", token);
/**
 * 获取token
 * @returns
 */
export const getToken = () => window.localStorage.getItem("auth_token");
/**
 * 获取token
 * @returns
 */
export const clearToken = () => window.localStorage.removeItem("auth_token");
