import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, Navigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { UserContext } from "../../context/userContext";
import { useContext,useEffect,useState } from "react";

import {
  MapOutlined,
  SourceOutlined,
  TrackChangesOutlined,
} from "@mui/icons-material";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Panel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>

          <Link to="/analysis" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Account</span>
            </li>
          </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Bus</span>
            </li>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Route</span>
            </li>
          </Link>
          {/* <Link to="/aquifers" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Aquifers</span>
            </li>
          </Link> */}
          {/* <li>
            <SourceOutlined className="icon" />
            <span>About</span>
          </li> */}

          {/* <Link to="/analysis" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Analysis</span>
          </li>
          </Link> */}

          {/* <Link to="/globalmaps" style={{ textDecoration: "none" }}>
            <li>
              <MapOutlined className="icon" />
              <span>Live Map</span>
            </li>
          </Link> */}

          

          
          {/* <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li> */}
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
        
          
          
      
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
