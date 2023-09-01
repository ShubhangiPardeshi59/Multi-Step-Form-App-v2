
import archadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";

import Plan from "./Plan";
import "./PlanPage.css";

export default function PageTwo(props) {
  
  const onClickPlan = (plan,amount) => ()=>{
    // Use the amount directly when the plan is clicked
    props.setActivePlan(plan);
    props.setInfo({...props.info,billingAmount:amount}); 
  };
  
  const onClickSwitch = () =>{
    props.setToggle(!props.toggle)
  }
  
  const onClickNextBtn = () =>{
    if(props.activePlan !== ""){
      props.onClickNextBtn()
    }
  }
  return (
    <div className="page-r-container">
      <div className="page-r-container-header">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="body">
        <div className="plan-section">
          <div className="plan-container">
            <Plan
              className={props.activePlan == 'Arcade' ? "plan plan-active" : "plan"}
              onClick={onClickPlan("Arcade",props.toggle ? 90 : 9)}
            >
              <div className="plan-img">
                <img src={archadeImg}></img>
              </div>
              <div className="plan-text">Arcade</div>
              <small>{props.toggle ? "$ 90/yr" : "$ 9/mo"}</small>
              <div> <small>{props.toggle && "Two months free"}</small></div>
             
            </Plan>
            <Plan
              className={props.activePlan == 'Advanced' ? "plan plan-active" : "plan"}
              onClick={onClickPlan("Advanced",props.toggle ? 120 : 12)}
            >
              <div className="plan-img">
                <img src={advancedImg}></img>
              </div>
              <div className="plan-text">Advanced</div>
              <small>{props.toggle ? "$ 120/yr" : "$ 12/mo"}</small>
              <div><small>{props.toggle && "Two months free"}</small></div>
              
            </Plan>
            <Plan
              className={props.activePlan == 'Pro' ? "plan plan-active" : "plan"}
              onClick={onClickPlan("Pro",props.toggle ? 150 : 15)}
            >
              <div className="plan-img">
                <img src={proImg}></img>
              </div>
              <div className="plan-text">Pro</div>
              <small>{props.toggle ? "$ 150/yr" : "$ 15/mo"}</small>
              <div><small>{props.toggle && "Two months free"}</small></div>
              
            </Plan>
          </div>

          <div className="toggle-container">
            <div className="small-font">
              <small>Monthly</small>
            </div>
            <div>
              <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" checked = {props.toggle} onChange = {onClickSwitch} />
                <div className="slider round"></div>
              </label>
            </div>

            <div className="small-font">
              <small>Yearly</small>
            </div>
          </div>
        </div>
      </div>

      
      <div className="footer">
        <p className="go-back-link" onClick={props.onClickBackBtn}>
          Go Back
        </p>
        <button className="btn" type="submit" onClick={onClickNextBtn}>
          Next Step
        </button>
      </div>
    </div>
    
  );
  }
