/*
 * @Author: 沧澜
 * @Date: 2024-03-18 23:22:35
 * @LastEditors: 沧澜
 * @LastEditTime: 2024-03-19 22:25:17
 * @Description:
 */
import { Button } from "antd";
import { setToken } from "../../tools/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Login() {
  const navigator = useNavigate();
  const handleLogin = () => {
    const preToken: object = {
      token: "hjsdbvfjhysebfjkd762354",
      expired: Date.now(),
    };
    // console.log(JSON.stringify(preToken));
    setToken(JSON.stringify(preToken)); //模拟设置token
    // 默认跳转到 valtio 页面
    navigator(`/valtio`);
  };

  return (
    <div className="login-wrapper">
      <Button
        type={"primary"}
        onClick={() => {
          handleLogin();
        }}
        style={{ marginRight: "15px" }}
      >
        登录进入系统主页
      </Button>
    </div>
  );
}
