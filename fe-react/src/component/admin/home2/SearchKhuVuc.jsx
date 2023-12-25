import { Select } from "antd";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import { useSanPhamStore } from "../../home/body/product/useSanPhamStore";
function SearchKhuVuc({ searchParam, setSearchParam }) {
    const [filterModel, setfilterModel] = useState(undefined)
    const [huyen, setHuyen] = useState(undefined)
    async function handleLayModel() {
        const data = await useSanPhamStore.actions.layKhuVucFilter();
        setfilterModel(data.data);
    }
    useEffect(() => {
        //   handleLayModel();
    }, []);
    return (
        <>
            <h6 style={{
                marginBottom: "4px",
                fontSize: "14px"
            }}>Tỉnh/TP</h6>
            <Select
                defaultValue={"Tỉnh/TP"}
                value={searchParam.tinhCode}
                style={{
                    width: 200,
                }}
                onChange={(e) => {
                    setHuyen(
                        filterModel.districts.filter((item) => {
                            return item.province_code === e;
                        })
                    );
                    setSearchParam({
                        ...searchParam,
                        tinhCode: e
                    })
                }}
                options={
                    filterModel &&
                    filterModel.provinces
                        .map((item) => {
                            return {
                                value: item.code,
                                label: item.full_name,
                            };
                        })
                }
            />
            <h6 style={{
                marginBottom: "4px",
                fontSize: "14px",
                marginTop: "8px"
            }}>Quận/Huyện</h6>
            <Select
                defaultValue={"Quận/Huyện"}
                value={searchParam.huyenCode}
                style={{
                    width: 200,
                }}
                onChange={(e) => {
                    setSearchParam({
                        ...searchParam,
                        huyenCode: e
                    })
                }}
                options={
                    huyen &&
                    huyen.map((item) => {
                        return {
                            value: item.code,
                            label: item.full_name,
                        };
                    })
                }
            />
        </>
    );
}

export default SearchKhuVuc;
