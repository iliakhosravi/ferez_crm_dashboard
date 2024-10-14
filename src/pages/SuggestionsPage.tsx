import { FC } from "react";

const SuggestionsPage: FC = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{
        width:"100%",
        height: "10vh",
        display:"flex",
        justifyContent:"start",
        alignItems:"center",
        fontWeight:"bold",
        color:"#1677FF",
        borderBottom: "solid 1px #d7ebfa"
      }}>
      پیشنهادات فرز
            </div>
      
      <div style={{width:"100%", 
      height:"60vh", 
      display:"flex",
       justifyContent:"center",
         alignItems:"center"}}>
          درحال حاضر پیشنهادی برای شما وجود ندارد...
      </div>
    </section>
  );
};

export default SuggestionsPage;
