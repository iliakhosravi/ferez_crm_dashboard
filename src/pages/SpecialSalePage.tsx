import { FC } from "react";
import { Button } from "antd";
import { AddOutlined, LocalOfferOutlined } from "@mui/icons-material";

const SpecialSalePage: FC = () => {
  return <section>


 {/* ******** Header **************************    */}
    <div style={{
        width:"100%",
        height: "10vh",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        fontWeight:"bold",
        color:"#1677FF",
        borderBottom: "solid 1px #d7ebfa"
      }}>
       <div style={{display:"flex", gap:"8px"}}>
        <LocalOfferOutlined/>
       پیشنهادات ویژه
       </div>

       {/* ******** Add Ticket ***************** */}

       <Button type="primary" >
          <AddOutlined/>
          پیشنهاد ویژه جدید
        </Button>
            </div>

            
  </section>;
};

export default SpecialSalePage;
