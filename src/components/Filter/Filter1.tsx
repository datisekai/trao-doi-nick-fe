import React from "react";
import WidthLayout from "../layout/WidthLayout";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const filterSchemas = [
  {
    key: "id",
    label: "Mã số",
    type: "text",
  },
  {
    key: "price",
    label: "Khoảng giá",
    type: "select",
    options: [
      {
        label: "Dưới 100k",
        value: "from=0&to=100000",
      },
      {
        label: "100k - 300k",
        value: "from=100000&to=300000",
      },
      {
        label: "300k = 500k",
        value: "from=300000&to=500000",
      },
      {
        label: "500k - 1 triệu",
        value: "from=500000&to=1000000",
      },
      {
        label: "1 triệu - 2 triệu",
        value: "from=1000000&to=2000000",
      },
      {
        label: "Trên 2 triệu",
        value: "from=2000000",
      },
    ],
  },
  {
    key: "server",
    label: "Server",
    type: "select",
    options: [
      {
        label: "Server 1",
        value: "1",
      },
      {
        label: "Server 2",
        value: "2",
      },
      {
        label: "Server 3",
        value: "3",
      },
    ],
  },
  {
    key: "hanh_tinh",
    label: "Hành tinh",
    type: "select",
    options: [
      {
        label: "Xayda",
        value: "xayda",
      },
      {
        label: "Trái đất",
        value: "traidat",
      },
      {
        label: "Namek",
        value: "namek",
      },
    ],
  },
  {
    key: "bong_tai_c2",
    label: "Bông tai c2",
    type: "select",
    options: [
      {
        label: "Có",
        value: "1",
      },
      {
        label: "Không",
        value: "0",
      },
    ],
  },
  {
    key: "set_kich_hoat",
    label: "Set kích hoạt",
    type: "select",
    options: [
      {
        label: "Có",
        value: "1",
      },
      {
        label: "Không",
        value: "0",
      },
    ],
  },
  {
    key: "dang_ky",
    label: "Đăng ký",
    type: "select",
    options: [
      {
        label: "Ảo",
        value: "ao",
      },
      {
        label: "Thật",
        value: "that",
      },
    ],
  },
  {
    key: "mo_thanh_vien",
    label: "Mở thành viên",
    type: "select",
    options: [
      {
        label: "Đã mở",
        value: "1",
      },
      {
        label: "Chưa mở",
        value: "0",
      },
    ],
  },
  {
    key: "full_map",
    label: "Đi full map",
    type: "select",
    options: [
      {
        label: "Có",
        value: "1",
      },
      {
        label: "Không",
        value: "0",
      },
    ],
  },
  {
    key: "quay_5000tv",
    label: "Đã quay 5000 tv",
    type: "select",
    options: [
      {
        label: "Có",
        value: "1",
      },
      {
        label: "Không",
        value: "0",
      },
    ],
  },
];

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Filter1 = () => {
  const {
    palette: { primary, secondary },
  }: any = useTheme();
  return (
    <Box pt={3}>
      <WidthLayout>
        <Typography color="text.primary" fontSize={17} fontWeight={"bold"}>
          Bộ lọc tìm kiếm
        </Typography>
        <Box mt={1} sx={{ backgroundColor: "secondary.main", borderRadius: 2 }}>
          <Grid container spacing={1} p={3}>
            {filterSchemas.map((item, index) => {
              const { key, label, type, options = [] } = item;

              return (
                <Grid item xs={6} md={4} lg={3} key={key}>
                  {type === "text" && (
                    <TextField
                      label={label}
                      className="w-full"
                      variant="outlined"
                      size="medium"
                    />
                  )}
                  {type === "select" && (
                    <FormControl fullWidth>
                      <InputLabel>{label}</InputLabel>
                      <Select label={label} size="medium">
                        {options.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                </Grid>
              );
            })}

            <Grid item xs={6} md={4} lg={3}>
              <Button
                className="w-full h-full"
                variant="contained"
                color="primary"
                size="large"
              >
                Áp dụng
              </Button>
            </Grid>
          </Grid>

          <Box px={1} sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs>
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
        </Box>
        {/* <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel> */}
      </WidthLayout>
    </Box>
  );
};

export default Filter1;
