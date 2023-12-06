import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
    name: "user",
    initialState: {
        token: "",
        quyenList: [''],
        nguoiDung: { id: -1 }
    },
    reducers: {

    }
})