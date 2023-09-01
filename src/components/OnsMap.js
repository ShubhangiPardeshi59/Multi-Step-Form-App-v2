import SingleOns from "./SingleOns";
export default function OnsMap(props) {
    console.log(props.checkOns)
    return (
        Object.keys(props.checkOns).map((ons,value, index) => {
            if (ons === "onlineService" && value ==true) {
                return <SingleOns key={index} ons="Online Service" amount={props.toggle ? "+$10/yr" : "+1$/mo"} />;
            }
            if (ons === "largerStorage"  && value ==true) {
                return <SingleOns key={index} ons="Larger Storage" amount={props.toggle ? "+$20/yr" : "+2$/mo"} />;
            }
            if (ons === "customizableProfile"  && value ==true) {
                return <SingleOns key={index} ons="Customizable Profile" amount={props.toggle ? "+$20/yr" : "+2$/mo"} />;
            }
            return null; 
            
        })
        
    );
}
