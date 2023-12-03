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
function Filter({ handleFilter, page, pageSize }) {
  const language = useSelector(selectLanguage);
  const [value, setValue] = useState(undefined);
const [optionFilter,setOptionFilter] 
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
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
  const [option, setOption] = useState(undefined);
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
                    <ckr.Group
                      value={null}
                      options={[
                        { label: "Trên 2 phòng", value: 1 },
                        { label: "Trên 3 phòng", value: 2 },
                        { label: "Trên 4 phòng", value: 3 },
                        { label: "Trên 5 phòng", value: 4 },
                      ]}
                    />
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
                    <ckr.Group
                      value={null}
                      options={[
                        { label: "Trên 2 phòng", value: 1 },
                        { label: "Trên 2 phòng", value: 2 },
                        { label: "Trên 2 phòng", value: 3 },
                        { label: "Trên 2 phòng", value: 4 },
                      ]}
                    />
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
                      value={null}
                      options={[
                        { label: "Nhà phố", value: 1 },
                        { label: "Đất thổ cư", value: 2 },
                        ,
                        { label: "Đất nền", value: 3 },
                        ,
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
                    <ckr.Group
                      value={null}
                      options={[
                        { label: "Trên 25m2", value: 1 },
                        { label: "Trên 35m2", value: 2 },
                        { label: "Trên 45m2", value: 3 },
                        { label: "Trên 50m2", value: 4 },
                      ]}
                    />
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
                    <ckr.Group
                      value={null}
                      options={[
                        { label: "Trên 2m", value: 1 },
                        { label: "Trên 3m", value: 2 },
                        { label: "Trên 4m", value: 3 },
                        { label: "Trên 5m", value: 4 },
                      ]}
                    />
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
                    <ckr.Group
                      value={null}
                      options={[
                        { label: "Trên 2m", value: 1 },
                        { label: "Trên 3m", value: 2 },
                        { label: "Trên 4m", value: 3 },
                        { label: "Trên 5m", value: 4 },
                      ]}
                    />
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
                    <Radio.Group onChange={onChange} value={value}>
                      <Space direction="vertical">
                        {language.body.filter.item.cost.option.map(
                          (item, index) => {
                            return (
                              <Radio value={item.type} key={index}>
                                {item.name}
                              </Radio>
                            );
                          }
                        )}
                      </Space>
                    </Radio.Group>
                    <Row>
                      <Col span={24}>
                        <Slider
                          range={{
                            draggableTrack: true,
                          }}
                          tooltip={{
                            formatter,
                          }}
                          min={100000}
                          max={10000000}
                          defaultValue={[500000, 2000000]}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col span={11}>
                        <InputNumber
                          min={1}
                          max={20}
                          style={{ width: "100%" }}
                          value={onChangeSlider}
                          onChange={onChangeSlider}
                        />
                      </Col>
                      <Col
                        span={2}
                        className="d-flex align-items-center justify-content-center"
                      >
                        -
                      </Col>
                      <Col span={11}>
                        <InputNumber
                          min={1}
                          max={20}
                          style={{ width: "100%" }}
                          value={onChangeSlider}
                          onChange={onChangeSlider}
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
