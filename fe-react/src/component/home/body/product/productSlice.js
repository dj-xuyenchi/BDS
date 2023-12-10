import { createSlice } from "@reduxjs/toolkit";
const INIT_PRODUCT = {
    isLoading: true,
    tinhCode: null,
    huyenCode: null
}
export default createSlice({
    name: "product",
    initialState: INIT_PRODUCT,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setSanPham: (state, action) => {
            state.data = action;
        },
        setTinh: (state, action) => {
            state.tinhCode = action.payload;
        },
        setHuyen: (state, action) => {
            state.huyenCode = action.payload;
        }
    }
})