import "./FinishingUp.css";
export default function FinishingUp(props) {
 
  const plantAmount = () => {
    if (props.activePlan == "Arcade") {
      return props.toggle ? "$90/yr" : "$9/mo";
    } else if (props.activePlan == "Advanced") {
      return props.toggle ? "$120/yr" : "$12/mo";
    } else if (props.activePlan == "Pro") {
      return props.toggle ? "$150/yr" : "$15/mo";
    }
  };

  const sum = () => {
    const sum =
      props.info.onlineService +
      props.info.largerStorage +
      props.info.customizableProfile +
      props.info.billingAmount;

    return sum;
  };
  return (
    <div className="page-r-container">
      <div className="page-r-container-header">
        <h1>Finishing Up</h1>
        <p>Double check everything looks ok before confirming</p>
      </div>
      <div className="body">
        <div className="charges-container">
          <div className="charges-container-top">
            <div className="charges-container-top-left">
              <div className="plan-name">
                {props.activePlan} ({props.toggle ? "Yearly" : "Monthly"})
              </div>
              <div className="change-link">
                <a heref="#">
                  <small>Change</small>
                </a>
              </div>
            </div>
            <div className="charges-container-top-right">{plantAmount()}</div>
          </div>
          <hr />
          <div className="charges-container-bottom">
            {props.checkOns.onlineService && (
              <div className="charges-container-ons">
                <div className="charges-container-ons-left">Online Service</div>
                <div className="charges-container-ons-right">
                  {props.toggle ? "$10/yr" : "$1/mo"}
                </div>
              </div>
            )}
             {props.checkOns.largerStorage && (
              <div className="charges-container-ons">
                <div className="charges-container-ons-left">Local Storage</div>
                <div className="charges-container-ons-right">
                  {props.toggle ? "$20/yr" : "$2/mo"}
                </div>
              </div>
            )}
             {props.checkOns.customizableProfile && (
              <div className="charges-container-ons">
                <div className="charges-container-ons-left">Customizable Profile</div>
                <div className="charges-container-ons-right">
                  {props.toggle ? "$20/yr" : "$2/mo"}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="total-amount">
          <div className="total-amount-left">Total(per month)</div>
          <div className="total-amount-right">
            {sum()}
          
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="go-back-link" onClick={props.onClickBackBtn}>
          Go Back
        </p>
        <button
          className="btn"
          id="confirm-btn"
          type="submit"
          onClick={props.onClickNextBtn}
        >
          Confirm
        </button>
      </div>
     
    </div>
  );
}

/* 
 <div className="charges-container-ons">
              <div className="charges-container-ons-left">
                Online Service
              </div>
              <div className="charges-container-ons-right">+$1/mo</div>
            </div>
*/
