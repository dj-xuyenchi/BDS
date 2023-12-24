import { Button, Modal, notification, Tooltip } from "antd";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { usePhongBanAdmin } from "./usePhongBanAdmin";
function ModalXoa({ phongBanId, fetchData }) {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (type, title, des, placement) => {
    if (type === "error") {
      api.error({
        message: title,
        description: des,
        placement,
      });
    } else {
      api.success({
        message: title,
        description: des,
        placement,
      });
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  async function handleXoa() {
    const data = await usePhongBanAdmin.actions.xoaPhongBan(phongBanId);
    if (!data.data) {
      openNotification(
        "error",
        "Hệ thống",
        "Vui lòng chuyển hết nhân viên hiện tại xang phong ban khác",
        "bottomRight"
      );
      return;
    }
    openNotification("success", "Hệ thống", "Xóa thành công", "bottomRight");
    fetchData();
  }
  return (
    <>
      {contextHolder}
      <Tooltip title="Xóa">
        {" "}
        <Button
          style={{ color: "red" }}
          shape="circle"
          icon={<MdDeleteOutline />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />{" "}
      </Tooltip>
      <Modal
        title={"Xóa phòng ban"}
        open={isModalOpen}
        onOk={() => {
          handleXoa();
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        centered
      >
        Xác nhận phòng ban
      </Modal>
    </>
  );
}

export default ModalXoa;
