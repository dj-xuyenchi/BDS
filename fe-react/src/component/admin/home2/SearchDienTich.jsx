import { Radio, Space } from "antd";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
function SearchDienTich({ searchParam, setSearchParam }) {
    return (
        <>
            <Radio.Group onChange={(e) => {
                setSearchParam({
                    ...searchParam,
                    dienTich: e.target.value
                })
            }} value={searchParam.dienTich}>
                <Space direction="vertical">
                    <Radio value={20}>Trên 20m<sup>2</sup></Radio>
                    <Radio value={30}>Trên 30m<sup>2</sup></Radio>
                    <Radio value={40}>Trên 40m<sup>2</sup></Radio>
                    <Radio value={50}>Trên 50m<sup>2</sup></Radio>
                </Space>
            </Radio.Group>
        </>
    );
}

export default SearchDienTich;
