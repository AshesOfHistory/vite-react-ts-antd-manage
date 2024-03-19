/*
 * @Author: 沧澜
 * @Date: 2024-03-19 21:31:49
 * @LastEditors: 沧澜
 * @LastEditTime: 2024-03-19 22:18:14
 * @Description:
 */
import { useSnapshot as UseSnapshot } from "valtio";
import { Button } from "antd";
import valtioStore, { toggleShow } from "../valtioStore";

function changeValtioShow() {
  const { isShow } = UseSnapshot(valtioStore);
  return (
    <div>
      changeValtioShow isShow状态: {String(isShow)}
      <Button onClick={toggleShow}>切换状态</Button>
    </div>
  );
}

export default changeValtioShow;
