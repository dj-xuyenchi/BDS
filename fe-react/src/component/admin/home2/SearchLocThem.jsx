import { Divider, Radio, Space } from "antd";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
function SearchLocThem({ searchParam, setSearchParam }) {
    return (
        <>
            <div style={{
                width: "200px"
            }}>
                <h6 style={{
                    marginBottom: "4px",
                    fontSize: "14px",
                }}>Số phòng ngủ</h6>
                <Radio.Group onChange={(e) => {
                    setSearchParam({
                        ...searchParam,
                        soPhongNgu: e.target.value
                    })
                }} value={searchParam.soPhongNgu}>
                    <Space direction="vertical">
                        <Radio value={2}>Trên 2 phòng</Radio>
                        <Radio value={3}>Trên 3 phòng</Radio>
                        <Radio value={4}>Trên 4 phòng</Radio>
                        <Radio value={5}>Trên 5 phòng</Radio>
                    </Space>
                </Radio.Group>
                <h6 style={{
                    marginBottom: "4px",
                    fontSize: "14px",
                    marginTop: "8px"
                }}>Số phòng vệ sinh</h6>
                <Radio.Group onChange={(e) => {
                    setSearchParam({
                        ...searchParam,
                        soNhaVeSinh: e.target.value
                    })
                }} value={searchParam.soNhaVeSinh} >
                    <Space direction="vertical">
                        <Radio value={2}>Trên 2 phòng</Radio>
                        <Radio value={3}>Trên 3 phòng</Radio>
                        <Radio value={4}>Trên 4 phòng</Radio>
                        <Radio value={5}>Trên 5 phòng</Radio>
                    </Space>
                </Radio.Group >
                <Divider />
                <h6 style={{
                    marginBottom: "4px",
                    fontSize: "14px",
                    marginTop: "8px"
                }}>Mặt tiền</h6>
                <Radio.Group onChange={(e) => {
                    setSearchParam({
                        ...searchParam,
                        chieuNgang: e.target.value
                    })
                }} value={searchParam.chieuNgang} >
                    <Space direction="vertical">
                        <Radio value={2}>Trên 2m</Radio>
                        <Radio value={3}>Trên 3m</Radio>
                        <Radio value={4}>Trên 4m</Radio>
                        <Radio value={5}>Trên 5m</Radio>
                    </Space>
                </Radio.Group >
                <h6 style={{
                    marginBottom: "4px",
                    fontSize: "14px",
                    marginTop: "8px"
                }}>Chiều dài</h6>
                <Radio.Group onChange={(e) => {
                    setSearchParam({
                        ...searchParam,
                        chieuDai: e.target.value
                    })
                }} value={searchParam.chieuDai} >
                    <Space direction="vertical">
                        <Radio value={2}>Trên 2m</Radio>
                        <Radio value={3}>Trên 3m</Radio>
                        <Radio value={4}>Trên 4m</Radio>
                        <Radio value={5}>Trên 5m</Radio>
                    </Space>
                </Radio.Group >
            </div>
        </>
    );
}

export default SearchLocThem;
