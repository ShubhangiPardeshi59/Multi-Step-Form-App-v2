
import "./Sidebar.css"
export default function PageLeft({currentpage,setCurrentPage}){
    const onClickHandler =(index) =>()=>{
        setCurrentPage(index);
    }
   
    return(
        <div className="page-l-container">
                <div className="page-l-container-pageno">
                    <div className={currentpage == 1 ? "dot dot-active" : "dot" } onClick = {onClickHandler(1)}>1</div>
                    <div className="steps">
                        <small>Step 1</small>
                        <p>YOUR INFO</p>
                    </div>
                </div>
                <div className="page-l-container-pageno">
                    <div className={currentpage == 2 ? "dot dot-active" : "dot"} onClick = {onClickHandler(2)}>2</div>
                    <div className="steps">
                        <small>Step 2</small>
                        <p>SELECT PLAN</p>
                    </div>
                </div>
                <div className="page-l-container-pageno">
                    <div className={currentpage == 3 ? "dot dot-active" : "dot"} onClick = {onClickHandler(3)}>3</div>
                    <div className="steps">
                        <small>Step 3</small>
                        <p>ADDS-ONS</p>
                    </div>
                </div>
                <div className="page-l-container-pageno">
                    <div className={currentpage == 4 ? "dot dot-active" : "dot"} onClick = {onClickHandler(4)}>4</div>
                    <div className="steps">
                        <small>Step 4</small>
                        <p>SUMMARY</p>
                    </div>
                </div>
                
        </div>
    )
}