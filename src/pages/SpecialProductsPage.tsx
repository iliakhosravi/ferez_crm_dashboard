import { CardGiftcardOutlined } from "@mui/icons-material";
import { FC } from "react";

const SpecialProductsPage: FC = () => {
  return <section>
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
        <div style={{display:"flex", gap:"8px"}}>
        <CardGiftcardOutlined/>
        محصولات نمونه

        </div>
        </div>
  </section>;
};

export default SpecialProductsPage;
