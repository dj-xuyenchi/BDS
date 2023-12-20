import { useSelector } from "react-redux";
import "./style.css";
import { selectLanguage } from "../../../../language/selectLanguage";
import { FiFilter } from "react-icons/fi";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Col, InputNumber, Radio, Row, Slider, Space, Tag } from "antd";
import { Checkbox as ckr } from "antd";
import { useEffect, useState } from "react";
import { fixMoney } from "../../../../extensions/fixMoney";
import Tag1 from "../../../common/tag/Tag1";
import { useFilterStore } from "./useFilter";
import { selectProduct } from "../product/selectProduct";
function Filter({ tinhHuyen, page, pageSize, handleLayDuLieu }) {
  const language = useSelector(selectLanguage);

  const [value, setValue] = useState(undefined);
  const [optionFilter, setOptionFilter] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const formatter = (value) => {
    return fixMoney(value);
  };
  const [inputValue, setInputValue] = useState(1);
  const [inputValueSlider, setInputValueSlider] = useState(1);
  const onChangeSlider = (newValue) => {
    setInputValue(newValue);
  };
  const [soPhongNgu, setSoPhongNgu] = useState(undefined);
  const [soNhaVeSinh, setSoNhaVeSinh] = useState(undefined);
  const [loaiBatDongSan, setLoaiBatDongSan] = useState(undefined);
  const [dienTichSuDung, setDienTichSuDung] = useState(undefined);
  const [matTien, setMatTien] = useState(undefined);
  const [chieuDai, setChieuDai] = useState(undefined);
  const [giaTien, setGiaTien] = useState([0, 10000000000]);
  function handleFilter(ngu, veSinh, dienTich, tien, dai, gia) {
    handleLayDuLieu({
      soPhongNgu: ngu ? ngu : soPhongNgu,
      soPhongVeSinh: veSinh ? veSinh : soNhaVeSinh,
      dienTichSuDung: dienTich ? dienTich : dienTichSuDung,
      chieuNgang: tien ? tien : matTien,
      chieuDai: dai ? dai : chieuDai,
      min: gia ? gia[0] : giaTien[0],
      max: gia ? gia[1] : giaTien[1],
      tinhCode: tinhHuyen ? tinhHuyen.tinhCode : null,
      huyenCode: tinhHuyen ? tinhHuyen.huyenCode : null,
    });
  }
  useEffect(() => {
    handleFilter(null, null, null, null, null, null);
  }, [tinhHuyen]);
  return (
    <>
      <div className="filter-container">
        <div className="title">
          <span>{language.body.filter.title}</span>
          <div>
            <FiFilter />
          </div>
        </div>
        <div
          className="filter-item"
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              marginBottom: "8px",
              width: "100%",
            }}
            onClick={() => {
              window.location = "http://localhost:3000";
            }}
          >
            <Tag className="tag" color="purple">
              Xóa tất cả
            </Tag>
          </div>
          {true && (
            <Accordion allowMultiple allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Số phòng ngủ
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "8px",
                      width: "90%",
                    }}
                  >
                    <Radio.Group
                      onChange={(e) => {
                        setSoPhongNgu(e.target.value);
                        handleFilter(
                          e.target.value,
                          null,
                          null,
                          null,
                          null,
                          null
                        );
                      }}
                      value={soPhongNgu}
                    >
                      <Radio value={2}>Trên 2 phòng</Radio>
                      <Radio value={3}>Trên 3 phòng</Radio>
                      <Radio value={4}>Trên 4 phòng</Radio>
                      <Radio value={5}>Trên 5 phòng</Radio>
                    </Radio.Group>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Số phòng vệ sinh
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "8px",
                      width: "90%",
                    }}
                  >
                    <Radio.Group
                      onChange={(e) => {
                        handleFilter(
                          null,
                          e.target.value,
                          null,
                          null,
                          null,
                          null
                        );
                        setSoNhaVeSinh(e.target.value);
                      }}
                      value={soNhaVeSinh}
                    >
                      <Radio value={2}>Trên 2 phòng</Radio>
                      <Radio value={3}>Trên 3 phòng</Radio>
                      <Radio value={4}>Trên 4 phòng</Radio>
                      <Radio value={5}>Trên 5 phòng</Radio>
                    </Radio.Group>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Loại bất động sản
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "8px",
                      width: "90%",
                    }}
                  >
                    <ckr.Group
                      value={loaiBatDongSan}
                      onChange={(e) => {
                        setLoaiBatDongSan(e);
                      }}
                      options={[
                        { label: "Nhà phố", value: 1 },
                        { label: "Đất thổ cư", value: 2 },
                        { label: "Đất nền", value: 3 },
                        { label: "Chung cư", value: 4 },
                      ]}
                    />
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Diện tích sử dụng
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "8px",
                      width: "90%",
                    }}
                  >
                    <Radio.Group
                      onChange={(e) => {
                        handleFilter(
                          null,
                          null,
                          e.target.value,
                          null,
                          null,
                          null
                        );
                        setDienTichSuDung(e.target.value);
                      }}
                      value={dienTichSuDung}
                    >
                      <Radio value={20}>Trên 20m2</Radio>
                      <Radio value={30}>Trên 30m2</Radio>
                      <Radio value={40}>Trên 40m2</Radio>
                      <Radio value={50}>Trên 50m2</Radio>
                    </Radio.Group>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Mặt tiền
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "8px",
                      width: "90%",
                    }}
                  >
                    <Radio.Group
                      onChange={(e) => {
                        handleFilter(
                          null,
                          null,
                          null,
                          e.target.value,
                          null,
                          null
                        );
                        setMatTien(e.target.value);
                      }}
                      value={matTien}
                    >
                      <Radio value={2}>Trên 2m</Radio>
                      <Radio value={3}>Trên 3m</Radio>
                      <Radio value={4}>Trên 4m</Radio>
                      <Radio value={5}>Trên 5m</Radio>
                    </Radio.Group>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Chiều dài
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "8px",
                      width: "90%",
                    }}
                  >
                    <Radio.Group
                      onChange={(e) => {
                        handleFilter(
                          null,
                          null,
                          null,
                          null,
                          e.target.value,
                          null
                        );
                        setChieuDai(e.target.value);
                      }}
                      value={chieuDai}
                    >
                      <Radio value={2}>Trên 2m</Radio>
                      <Radio value={3}>Trên 3m</Radio>
                      <Radio value={4}>Trên 4m</Radio>
                      <Radio value={5}>Trên 5m</Radio>
                    </Radio.Group>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {language.body.filter.item.cost.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "8px",
                      width: "90%",
                    }}
                  >
                    <Row>
                      <Col span={24}>
                        <Slider
                          range={{
                            draggableTrack: true,
                          }}
                          tooltip={{
                            formatter,
                          }}
                          min={500000000}
                          max={10000000000}
                          defaultValue={giaTien}
                        />
                      </Col>
                      <Col span={24}>
                        <InputNumber
                          value={giaTien[0]}
                          style={{
                            width: "49%",
                          }}
                          formatter={(value) =>
                            `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          }
                          parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
                          onChange={(e) => {
                            setGiaTien([e, giaTien[1]]);
                            handleFilter(null, null, null, null, null, [
                              e,
                              giaTien[1],
                            ]);
                          }}
                        />
                        -
                        <InputNumber
                          style={{
                            width: "49%",
                          }}
                          value={giaTien[1]}
                          formatter={(value) =>
                            `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          }
                          parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
                          onChange={(e) => {
                            setGiaTien([giaTien[0], e]);
                            handleFilter(null, null, null, null, null, [
                              giaTien[1],
                              e,
                            ]);
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </div>
    </>
  );
}

export default Filter;
