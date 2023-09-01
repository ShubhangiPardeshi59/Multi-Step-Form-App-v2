import thankYou from "../assets/images/icon-thank-you.svg";
import "./ThankYou.css";
export default function ThankYou() {
  return (
    <div className="page-r-container">
        
        <div className="body">
        <div className="thank-you">
        <div className="thank-you-icon">
          <img src={thankYou} alt="thank you image"></img>
        </div>
        <div className="thank-you-heading"><h2>Thank you!</h2></div>
        <div className="thank-you-text">
          Thanks for confirming your subscription! We hope you have fun using ou
          platform. If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </div>
      </div>
        </div>
      
    </div>
  );
}
