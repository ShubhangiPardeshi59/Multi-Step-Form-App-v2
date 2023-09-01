
import "./AddOns.css"

export default function AddOns(props) {
   
    const onClickCheckbox1 = (amount) =>(event) =>{
          props.setCheckOns({...props.checkOns, onlineService : event.target.checked})
          props.setInfo({...props.info, onlineService : event.target.checked ? amount : 0})
          console.log(props.checkOns);
    }

    const onClickCheckbox2 = (amount) =>(event) =>{
      props.setCheckOns({...props.checkOns, largerStorage : event.target.checked})
      props.setInfo({...props.info, largerStorage : event.target.checked ? amount : 0})
      console.log(props.checkOns);
}
const onClickCheckbox3 = (amount) =>(event) =>{
  props.setCheckOns({...props.checkOns, customizableProfile : event.target.checked})
  props.setInfo({...props.info, customizableProfile : event.target.checked ? amount : 0})
  console.log(props.checkOns);
}

const onClickNextBtn = () =>{
  if(props.checkOns.onlineService == true || 
    props.checkOns.largerStorage == true ||
    props.checkOns.customizableProfile == true
    ){
      props.onClickNextBtn();
    }
}
  return (
    <div className="page-r-container">
      <div className="page-r-container-header">
        <h1>Pick add-ons</h1>
        <p>Add ons help enhance your gaming experience</p>
      </div>
      <div className="body">

        <div className={props.checkOns.onlineService ? "add-ons ons-active" : "add-ons"}>
            <div className="add-ons-checkbox">
                <input type="checkbox"  id="checkbox1" name="checkbox1" 
                checked = {props.checkOns.onlineService}
                onChange = {onClickCheckbox1(props.toggle ? 10 : 1)}/>
            </div>
            <div className="add-ons-text">
                <div className="add-ons-text1">Online Services</div>
                <div className="add-ons-text2">Access to multiplayer games</div>
            </div>
            <div className="add-ons-amount">{props.toggle ? "+$10/yr" : "+$1/mo"}</div>
        </div>

        <div className={props.checkOns.largerStorage ? "add-ons ons-active" : "add-ons"}>
            <div className="add-ons-checkbox">
                <input type="checkbox"  id="checkbox1" name="checkbox1"
                checked = {props.checkOns.largerStorage}
               onChange = {onClickCheckbox2(props.toggle ? 20 : 2)}
                />
            </div>
            <div className="add-ons-text">
                <div className="add-ons-text1">Larger Storage</div>
                <div className="add-ons-text2">Extra 1TB of cloud save</div>
            </div>
            <div className="add-ons-amount">{props.toggle ? "+$20/yr" : "+$2/mo"}</div>
        </div>

        <div className={props.checkOns.customizableProfile ? "add-ons ons-active" : "add-ons"}>
            <div className="add-ons-checkbox">
                <input type="checkbox"  id="checkbox1" name="checkbox1" 
                checked = {props.checkOns.customizableProfile}
             onChange = {onClickCheckbox3(props.toggle ? 20 : 2)}
                />
            </div>
            <div className="add-ons-text">
                <div className="add-ons-text1">Customizable Profit</div>
                <div className="add-ons-text2">Custome theme on your profile</div>
            </div>
            <div className="add-ons-amount">{props.toggle ? "+$20/yr" : "+$2/mo"}</div>
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
