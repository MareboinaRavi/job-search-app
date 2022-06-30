import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import DatabaseServices from "./DatabaseServices";
import Branding from "./Branding";
import ComboProducts from "./ComboProducts";
import Xpressjobsite from "./Xpressjobsite";
import SMS from "./SMS";
import Jobposting from "./Jobposting";

const BuyTabs = () => {
  const blue = {
    50: "#FFFFFF",
    100: "#C2E0FF",
    200: "#80BFFF",
    300: "#66B2FF",
    400: "#000",
    500: "#270D44",
    600: "#270D44",
    700: "#0059B2",
    800: "#004C99",
    900: "#003A75",
  };

  const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: fit-content;
    padding: 12px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    &:hover {
      /* font-weight:800; */
    }

    &:focus {
      color: #fff;
      border-radius: 3px;
      outline: 2px solid ${blue[200]};
      outline-offset: 2px;
    }

    &.${tabUnstyledClasses.selected} {
      background-color: ${blue[50]};
      color: ${blue[600]};
      font-weight:600;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const TabPanel = styled(TabPanelUnstyled)`
    width: auto;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;

  const TabsList = styled(TabsListUnstyled)`
    min-width: fit-content;
    background-color: ${blue[500]};
    width:fit-content;
    margin:auto;
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `;

  return (
    <div style={{ backgroundColor: "#ecf0f1",paddingBottom:"1px" }}>
      <div className="container">

        <div className="Buyservices">
          <TabsUnstyled defaultValue={0}>
            <div className="Tab_list_main">
              <div className="Tabs_main">
                <TabsList>
                  <Tab>DATA BASE</Tab>
                  <Tab>JOB POSTING</Tab>
                  {/* <Tab>SMS</Tab> */}

                  <Tab>COMBO PRODUCTS</Tab>
                  <Tab>BRANDING</Tab>
                  {/* <Tab>XPRESS WEBSITE</Tab> */}
                </TabsList>
              </div>
            </div>
            <TabPanel value={0}>
              <DatabaseServices />
            </TabPanel>
            <TabPanel value={1}>
              <Jobposting />
            </TabPanel>
            {/* <TabPanel value={2}>
              <SMS/>
            </TabPanel> */}
            <TabPanel value={2}>
              <ComboProducts />
            </TabPanel>
            <TabPanel value={3}>
              <Branding />
            </TabPanel>

            {/* <TabPanel value={5}>
              <Xpressjobsite />
            </TabPanel> */}
          </TabsUnstyled>
        </div>
      </div>
    </div>
  );
};

export default BuyTabs;
