import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel } from "./-components/tab-panel";
import { ChangePassword } from "./-components/change-password";
import { CloseAccount } from "./-components/close-account";

export const Route = createFileRoute("/(main)/_main/_protected/account/")({
  component: RouteComponent,
});

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function RouteComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="text-xl px-std-content text-center">Account</div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="account tabs">
          <Tab label="Password" {...a11yProps(0)} />
          <Tab label="Close Account" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ChangePassword />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CloseAccount />
      </TabPanel>
    </div>
  );
}
