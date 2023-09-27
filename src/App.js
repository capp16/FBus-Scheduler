import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import BusDetail from "./pages/busdetail/busdetail";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import "./style/dimension.css";
import "./style/flex.css";
import "./style/styles.css";

import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import KnowYourAquifer from "./pages/know-your-aquifer";
import GlobalMaps from "./pages/global-maps/global-maps";
import { UserContext } from "./context/userContext";
import Analysis from "./pages/analysis/analysis"
import Survey from "./components/generateSurvey/generateSurvey";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { userDetails } = useContext(UserContext);
  const value = useContext(UserContext);
  console.log(value, "VAL");
  useEffect(() => {
    let userDetails = localStorage.getItem("userDetails");
    console.log(userDetails, "USER DETAILS");
    if (userDetails) {
      value.dispatch({ type: "SAVE", payload: userDetails });
    }
  }, []);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":busId" element={<BusDetail />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="survey" element={<Survey />}></Route>
            <Route path="aquifers" element={<KnowYourAquifer />}></Route>
            <Route path="globalmaps" element={<GlobalMaps />}></Route>
            <Route path="analysis" element={<Analysis />}></Route>
            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}
            <Route path="login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
