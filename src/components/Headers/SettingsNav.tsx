import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Stack, Typography } from "@mui/material";
import DarkModeIcon from "../DarkModeIcon";

interface SettingsNavProps {
  open: boolean;
  handleClose: () => void;
}
const SettingsNav: React.FC<SettingsNavProps> = ({ open, handleClose }) => {
  return (
    <div>
      <React.Fragment>
        <Drawer
          sx={{ zIndex: 9999 }}
          anchor={"right"}
          open={open}
          onClose={handleClose}
        >
          <Box
            sx={{ width: 250, p: 2 }}
            role='presentation'
            onKeyDown={handleClose}
          >
            <Stack spacing={2}>
              <Typography color='text.primary' fontWeight={600} fontSize={17}>
                Cài đặt
              </Typography>
              <Divider />
              <Box>
                <Typography color='text.primary' mb={1}>
                  Chế độ
                </Typography>
                <DarkModeIcon />
              </Box>
            </Stack>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SettingsNav;
