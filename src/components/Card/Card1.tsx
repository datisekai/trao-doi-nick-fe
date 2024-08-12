import { Box, Button, Chip, Grid, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FlexBox from "../FlexBox";

const dataMapping = [
  {
    label: "Server",
    value: 1,
  },
  {
    label: "Hành tinh",
    value: "Xayda",
  },
  {
    label: "Bông tai c2",
    value: "Có",
  },
  {
    label: "Set kích hoạt",
    value: "Có",
  },
  {
    label: "Đăng ký",
    value: "Ảo",
  },
  {
    label: "Mở thành viên",
    value: "Có",
  },
  {
    label: "Đi fullmap",
    value: "Có",
  },
  {
    label: "Quay 5000tv",
    value: "Có",
  },
];

export default function Card1() {
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <Link href="/1">
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: secondary.main,
          ".css-46bh2p-MuiCardContent-root:last-child": {
            pb: 1,
          },
          ":hover": {
            cursor: "pointer",
          },
          position: "relative",
        }}
      >
        <LazyLoadImage
          src="/images/card1.jpg"
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Box sx={{ position: "absolute", top: 5, right: 5 }}>
          <Chip
            color="primary"
            label="ID: 12345"
            sx={{ borderRadius: 1 }}
            size="small"
          />
        </Box>
        <CardContent>
          <FlexBox alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Typography
                variant="body2"
                fontSize={14}
                component="span"
                color="primary"
              >
                datisekai
              </Typography>
              <Typography
                color="primary"
                gutterBottom
                variant="h5"
                component="div"
                fontSize={18}
                fontWeight={600}
              >
                200,000đ
              </Typography>
            </Box>
            <Box>
              <Button color="primary" variant="contained" size="small">
                Xem ngay
              </Button>
            </Box>
          </FlexBox>
          <Divider />
          <Grid container spacing={0.5} paddingY={1}>
            {dataMapping.map((item, index) => (
              <Grid item xs={6} key={index}>
                <FlexBox alignItems={"center"}>
                  <FaCaretRight size={13} className="mr-1" />
                  <Typography fontSize={12}>
                    {item.label}: <b>{item.value}</b>
                  </Typography>
                </FlexBox>
              </Grid>
            ))}
          </Grid>
          {/* 
          <FlexBox
            mt={1}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
              <ArticleIcon color="action" fontSize="small" />
              <Typography>4</Typography>
            </Stack>
            <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
              <RemoveRedEyeIcon color="action" fontSize="small" />
              <Typography>4</Typography>
            </Stack>
          </FlexBox> */}
        </CardContent>
      </Card>
    </Link>
  );
}
