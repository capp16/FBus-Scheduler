import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import BusRoute from "../../components/trackBus/trackBus";
import Header from "../../components/header/header";
import "./home.scss";
// import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { ListAltOutlined, SearchOffOutlined, SearchOutlined } from "@mui/icons-material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useContext} from "react";
import { UserContext } from "../../context/userContext";
import Login from "../../pages/login/Login"
import PollRoundedIcon from '@mui/icons-material/PollRounded';
import { Link } from "react-router-dom";

const Home = () => {
  const { userDetails,showLogin } = useContext(UserContext);
  console.log(showLogin,"00000000")
  let currentUser = userDetails && userDetails.userType ?  userDetails.userType.toLowerCase() : 'guest'
  // let widgetData=[
  //   {
  //     title: "No. of buses currently running",
  //     isMoney: false,
  //     isCount:true,
  //     count: 34,
  //     colorCode:true,
  //     total:141,
  //   },
  //   {
  //     title: "No. of supervisors",
  //     isMoney: false,
  //     isCount:true,
  //     count: 11,
      
  //   },  {
  //     title: "No. of aquifers depletion greather than 50%",
  //     isMoney: false,
  //     isCount:true,
  //     count: 21,
  //     colorCode:true,
  //     total:141,
      
  //   },
  //   {
  //     title: "Generate survey",
  //     isMoney: false,
  //     isCount:true,
  //     count: 98,
  //     icon: (
  //       <Link to="/survey">
  //       <PollRoundedIcon
  //         className="icon"
  //         style={{
  //           backgroundColor: "rgba(128, 0, 128, 0.2)",
  //           color: "purple",
  //         }}
  //       />
  //       </Link>
  //     ),
  //   }
  // ];;
 
  return (
    <>
    <div className={`home ${showLogin ?'opacity-less' :''} `}>
      <Sidebar />
      
      <div className="homeContainer">
        <div><Header/></div> 
        {/* <div className="widgets">
          {widgetData.map((el)=>{
            return <Widget data={el} />
          })}
        </div> */}
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Capacity Vs Month Graph)" aspect={2 / 1} />
        </div>
        <div>
          <BusRoute/>
        </div>
        {userDetails && userDetails.userType &&  userDetails.userType === 'Supervisor' &&<div className="listContainer">
          <div className="listTitle">Latest Trackings:-</div>
          <Table />
        </div>}

      </div>
    </div>
    {showLogin && <Login />}

    </>
    
  );
};

export default Home;
