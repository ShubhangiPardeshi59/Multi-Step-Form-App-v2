import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import PlanPage from "./components/PlanPage";
import Sidebar from "./components/Sidebar.js";
import AddOns from "./components/AddOns";
import FinishingUp from "./components/FinishingUp";
import ThankYou from "./components/ThankYou";

function App() {
  const [currentpage, setCurrentPage] = useState(1);
  

  const [info, setInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    billingAmount: 0,
    onlineService: 0, 
    largerStorage: 0, 
    customizableProfile: 0 },
  );

  const [activePlan, setActivePlan] = useState("");
  const [toggle, setToggle] = useState(false);

  const [checkOns, setCheckOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const onClickNextBtn = () => {
    setCurrentPage((prevState) => prevState + 1);
  };
  const onClickBackBtn = () => {
    setCurrentPage((prevState) => prevState - 1);
  };
  return (
    <div className="page-container">
      <Sidebar currentpage={currentpage} setCurrentPage={setCurrentPage} />
      {currentpage == 1 && (
        <PersonalInfo
          onClickNextBtn={onClickNextBtn}
          info={info}
          setInfo={setInfo}
        />
      )}
      {currentpage == 2 && (
        <PlanPage
          onClickNextBtn={onClickNextBtn}
          onClickBackBtn={onClickBackBtn}
          info={info}
          setInfo={setInfo}
          activePlan={activePlan}
          setActivePlan={setActivePlan}
          toggle={toggle}
          setToggle={setToggle}
        />
      )}
      {currentpage == 3 && (
        <AddOns
          onClickNextBtn={onClickNextBtn}
          onClickBackBtn={onClickBackBtn}
          info={info}
          setInfo={setInfo}
          checkOns={checkOns}
          setCheckOns={setCheckOns}
          toggle={toggle}
          setToggle={setToggle}
        />
      )}

      {currentpage == 4 && (
        <FinishingUp
          onClickNextBtn={onClickNextBtn}
          onClickBackBtn={onClickBackBtn}
          info={info}
          setInfo={setInfo}
          checkOns={checkOns}
          setCheckOns={setCheckOns}
          toggle={toggle}
          setToggle={setToggle}
          activePlan={activePlan}
          setActivePlan={setActivePlan}
        />
      )}

      {currentpage == 5 && <ThankYou />}
      {console.log(info)}
      {console.log(toggle)}
    </div>
  );
}

export default App;
/* <div className="page-r-container">
        <div className="page-r-container-header">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address and phone number.</p>
        </div>

        <div className="body">
          
        </div>
        
        <div className="footer">
          <p className="go-back-link" onClick = {onClickBackBtn}>{currentpage != 1 ? "Go Back" : ""}</p>
          <button className="btn"  onClick = {onClickNextBtn}>Next Step</button>
        </div>
        
      </div> */
