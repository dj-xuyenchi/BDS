import { Checkbox } from "antd";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
function SearchLoaiNhaDat({ searchParam, setSearchParam }) {
    const options =
        [
            { label: "Nhà phố", value: 1 },
            { label: "Đất thổ cư", value: 2 },
            { label: "Đất nền", value: 3 },
            { label: "Chung cư", value: 4 },
        ]
    const onChange = (checkedValues) => {
        setSearchParam({
            ...searchParam,
            loaiBatDongSan: checkedValues
        })
    };
    return (
        <>
            <Checkbox.Group value={searchParam.loaiBatDongSan} options={options} onChange={onChange} />
        </>
    );
}

export default SearchLoaiNhaDat;
