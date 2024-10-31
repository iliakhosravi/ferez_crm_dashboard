import { CustomerServiceOutlined, PhoneFilled } from "@ant-design/icons";
import { Telegram } from "@mui/icons-material";
import { FC } from "react";
import Lottie from "react-lottie";
import LotilAnimation from "../assets/lotties/building.json";
import "../styles/support.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LotilAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SupportPage: FC = () => {
  // const [activeTab, setActiveTab] = useState<"open" | "closed">("open");

  // const TicketsData = [
  //   {
  //     id: 0,
  //     title: "تیکت اول",
  //     status: 0,
  //     createdAt: "2024-08-10T06:15:21.000000Z",
  //     parentID: 1,
  //     description:
  //       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  //   },
  //   {
  //     id: 1,
  //     title: "تیکت دوم",
  //     status: 0,
  //     createdAt: "2024-08-10T06:15:21.000000Z",
  //     parentID: 0,
  //     description:
  //       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  //   },
  //   {
  //     id: 2,
  //     title: "تیکت سوم",
  //     status: 0,
  //     createdAt: "2024-08-10T06:15:21.000000Z",
  //     parentID: 0,
  //     description:
  //       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  //   },
  //   {
  //     id: 3,
  //     title: "تیکت چهارم",
  //     status: 1,
  //     createdAt: "2024-08-10T06:15:21.000000Z",
  //     parentID: 0,
  //     description:
  //       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  //   },
  //   {
  //     id: 4,
  //     title: "تیکت پنجم",
  //     status: 1,
  //     createdAt: "2024-08-10T06:15:21.000000Z",
  //     parentID: 0,
  //     description:
  //       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  //   },
  // ];

  // const filteredTickets = TicketsData.filter(
  //   (ticket) =>
  //     (activeTab === "open" && ticket.status === 0 && ticket.parentID == 0) ||
  //     (activeTab === "closed" && ticket.status === 1 && ticket.parentID == 0)
  // );

  // const handleAddTicket = () => {};

  return (
    <section>
      {/* ************ Header ********************* */}
      <div
        style={{
          width: "100%",
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",

          alignItems: "center",
          fontWeight: "bold",
          color: "#1677FF",
          borderBottom: "solid 1px #d7ebfa",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <CustomerServiceOutlined />
          پشتیبانی
        </div>

        {/* ******** Add Ticket ***************** */}

        {/* <Button type="primary" onClick={handleAddTicket}>
          <MessageOutlined />
          ایجاد تیکت جدید{" "}
        </Button> */}
      </div>

      {/* ********** Ticket TabBar ************************ */}

      {/* <div className="ticket-buttons">
        <div
          style={{ textAlign: "center", cursor: "pointer" }}
          onClick={() => setActiveTab("open")}
        >
          <img
            src={activeTab === "open" ? openEmail : email}
            alt="Open Tickets"
            style={{ width: "50px", height: "50px" }}
          />
          <div
            className={
              activeTab === "open"
                ? "ticket-active-button"
                : "ticket-nonactive-button"
            }
          >
            تیکت های باز
          </div>
        </div>

        <div
          style={{ textAlign: "center", cursor: "pointer" }}
          onClick={() => setActiveTab("closed")}
        >
          <img
            src={activeTab === "closed" ? openEmail : email}
            alt="Closed Tickets"
            style={{ width: "50px", height: "50px" }}
          />
          <div
            className={
              activeTab === "closed"
                ? "ticket-active-button"
                : "ticket-nonactive-button"
            }
          >
            تیکت های بسته
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        {filteredTickets.map(({ id, title, createdAt }) => (
          <span className="ticket-message-card" key={id}>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>{title}</p>

            <p>{convertToShamsi(createdAt)}</p>

            <Button type="link" onClick={handleAddTicket}>
              <MessageOutlined />
              مشاهده تیکت{" "}
            </Button>
          </span>
        ))}
      </div> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie options={defaultOptions} height={400} width={400} />
        <h3>تیم فرز درحال آماده سازی این صفحه میباشد.</h3>
      </div>

      <div
        style={{
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <li
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              width: "100%",
              fontSize: "1.3rem",
            }}
          >
            <PhoneFilled />
            شماره تماس:
            <a href="tel:+989395100617">09395100617</a>
          </li>
          <li
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              backgroundColor: "#f5f5f580",
              padding: "16px",
              borderRadius: "8px",
              width: "100%",
              fontSize: "1.3rem",
            }}
          >
            <PhoneFilled />
            شماره تماس:
            <a href="tel:+989155100617">09155100617</a>
          </li>
          <li
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              width: "100%",
              fontSize: "1.3rem",
            }}
          >
            <Telegram />
            پشتیبانی فرز در تلگرام:
            <a href="t.me/@ferezadmin1" style={{ direction: "ltr" }}>
              @ferezadmin1
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SupportPage;
