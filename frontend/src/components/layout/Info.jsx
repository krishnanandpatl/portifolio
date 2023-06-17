import warning from "../../assets/warning.svg";
import '../styles/info.css'

function Info() {
  return (
    <div className="warning-main">
      <img src={warning} alt="" />
      <div>
        Please visit the <b>desktop version of the portfolio</b> to view the
        full case study.
      </div>
    </div>
  );
}
export default Info;
