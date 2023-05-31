/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2023-05-29 10:57:55
 * @LastEditors: Seven
 * @LastEditTime: 2023-05-31 11:02:12
 */
import React, { useState } from "react";
import NewProtal from "../newProtal/newProtal";
import { CloseOutlined } from "@ant-design/icons";
import "./modal.css";
export default function Modal(props) {
  const {
    visible, //bool Modal控制显隐
    title, //string Modal标题
    children, //Modal中content内容
    onClose, //Modal的关闭事件
    confirm, //Modal的确认事件
    afterClose, //func Modal完全关闭后的回调
    bodyStyle, //object Modal body的样式
    cancelText, // string|ReactNode 取消按钮文字
    centered, //bool 居中展示Modal
    closeable, //bool 是否展示右上角的关闭按钮
    closeIcon, //自定义关闭图标
    destroyOnClose, //bool 关闭时销毁Modal里的子元素
    footer, //null|ReactNode 底部内容，当不需要底部默认按钮时，可以设置为footer={null}
    keyboard, //bool 是否支持键盘的esc键退出
    mask, // bool 是否展示遮罩
    maskcloseable, //bool 点击蒙层是否允许关闭
    maskStyle, //object 遮罩样式
    okText, //string|ReactNode 确认按钮的文本
    width, //string Modal宽度
  } = props;
  const [visibleModal, setVisibleModal] = useState(visible);
  //    首次渲染使用父组件的状态更新modal中的visible状态，只调用一次
  console.log("哈哈哈———————", visible, title, children);
  const closeModal = () => {
    console.log("大家好，我叫取消，听说你们想点我？傲娇脸👸");
    onClose && onClose();
    setVisibleModal(false);
  };

  const onConfim = () => {
    console.log("大家好，我叫确认，楼上的取消是我儿子，脑子有点那个~");
    confirm && confirm();
    setVisibleModal(false);
  };
  const maskClick = () => {
    console.log("大家好，我是蒙层，我被点击了");
    onClose && onClose();
    setVisibleModal(false);
  };
  return (
    visibleModal && (
      <NewProtal>
        <div className="modal-wrapper">
          <div className="modal" style={{ width: width }}>
            <div className="modal-title">{title ? title : "标题"}</div>
            {closeable && (
              <span className="modal-Icon">
                {closeIcon || <CloseOutlined />}
              </span>
            )}
            <div className="modal-content">{children ? children : "内容"}</div>
            {footer === null ? null : (
              <div>
                {footer ? (
                  footer
                ) : (
                  <div className="modal-operator">
                    <button
                      className="modal-operator-close"
                      onClick={closeModal}
                    >
                      {cancelText}
                    </button>
                    <button
                      className="modal-operator-confim"
                      onClick={onConfim}
                    >
                      {okText}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          {mask && (
            <div className="mask" style={maskStyle} onClick={maskClick}></div>
          )}
        </div>
      </NewProtal>
    )
  );
}
