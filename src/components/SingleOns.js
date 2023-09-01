

export default function SingleOns(props){
   
    return(
        <div className="charges-container-ons">
          <div className="charges-container-ons-left">
           { props.ons}
          </div>
          <div className="charges-container-ons-right">{props.amount}</div>
        </div>
      );
}