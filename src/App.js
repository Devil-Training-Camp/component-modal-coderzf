import React, { useState } from "react";
import Modal from "./Modal/modal.jsx";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "./App.css";
function App() {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    console.log("我是onClose回调");
    setVisible(false);
  };
  const confirm = () => {
    console.log("我是onClose回调");
    setVisible(false);
  };
  return (
    <div className="app">
      <button onClick={showModal}>点击这里打开Modal</button>
      {visible && (
        <Modal
          visible={visible}
          title="这里是自定义的title"
          confirm={confirm}
          onClose={closeModal}
          width="800px"
          okText={"确定1"}
          cancelText={"取消1"}
          closeable={true}
          closeIcon={<ExclamationCircleOutlined />}
          footer={false}
          // maskStyle={{ backgroundColor: "yellow" }}
          mask={true}
        >
          {/* <h1> 这里是content内容，哈哈哈</h1> */}
          这里是content内容，哈哈哈
        </Modal>
      )}
    </div>
  );
}

export default App;
