import { Box, useTheme } from "@mui/material";
import MainLayout from "../components/layout/MainLayout";
import UserLayout from "../components/layout/UserLayout";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { increment, decrement } from "../redux/slice";
import Filter1 from "../components/Filter/Filter1";

const Home = () => {
  const { value } = useAppSelector((state) => state.counter);
  const { user } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  const {
    palette: { grey },
  }: any = useTheme();

  console.log(user);

  return (
    <MainLayout isSlider={false}>
      <Box bgcolor={grey[900]} sx={{ minHeight: "100vh", pb: 10 }}>
        <Filter1 />
        <Section1 title="" />
        {/* <Section1 title="Top lượt xem" /> */}
        {/* <Section1 title="Top yêu thích" /> */}
        {/* <Section2 title="Đại học Sài Gòn" /> */}
        {/* <Section2 title="Đại học Sư Phạm" /> */}
      </Box>
    </MainLayout>
  );
};

export default Home;
