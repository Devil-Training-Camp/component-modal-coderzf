/*
 * @Author: Echo 9177696+liwensidun@user.noreply.gitee.com
 * @Date: 2023-05-29 16:24:09
 * @LastEditors: Seven
 * @LastEditTime: 2023-05-29 16:51:39
 * @FilePath: \modaldesign\src\newProtal\newProtal.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// ReactDOM.createPortal(
//   child, // 要渲染的元素
//   container // 指定渲染的父元素
// );
import { createPortal } from "react-dom";

const node = document.createElement("div");
document.body.appendChild(node);

export default function newProtal(props) {
  const { children } = props;

  return createPortal(children, node);
}
