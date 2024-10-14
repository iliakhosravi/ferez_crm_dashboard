import moment from "jalali-moment";


const convertToShamsi = (gregorianDate:string) => {
    return moment(gregorianDate, "YYYY-MM-DD")
      .locale("fa")
      .format("YYYY/MM/DD");
  };

  export default convertToShamsi;