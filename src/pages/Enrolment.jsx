import styles from "./Enrolment.module.css";

import { Link, Routes, Route, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Enrolment() {

  return(
    <div className={styles.Enrolment}>
      강의 등록 페이지 입니다.
      글을 보여주세요
    </div>
  );

}

export default Enrolment;
