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
      <h1>پیشنهادات فرز</h1>
      <h3>درحال حاضر پیشنهادی برای شما وجود ندارد...</h3>
    </section>
  );
};

export default SuggestionsPage;
