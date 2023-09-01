
export default function Plan({children,onClick ,className}) {
    
  
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }