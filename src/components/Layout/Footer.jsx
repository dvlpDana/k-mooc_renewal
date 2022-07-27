import styles from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () =>  {
  return(
    <footer>
      <div className={styles.footTop}>
        <a href="#">자주 묻는 질문</a>
        <a href="#">1:1지원</a>
        <a href="#">이수증검증</a>
        <a href="#">원격도우미</a>
        <nav className={styles.familySite}>
          <span>FAMILY SITE
            <i>
            <FontAwesomeIcon icon={faCaretUp} />
            </i>
          </span>
          <ul>
            <li><a href="#">교육부</a></li>
            <li><a href="#">국가평생교육진흥원</a></li>
            <li><a href="#">늘배움</a></li>
            <li><a href="#">평생학습계좌제</a></li>
            <li><a href="#">학점은행제</a></li>
            <li><a href="#">독학학위제</a></li>
            <li><a href="#">국가문해교육센터</a></li>
            <li><a href="#">평생교육사</a></li>
            <li><a href="#">중앙다문화교육센터</a></li>
            <li><a href="#">전국학부모지원센터</a></li>
            <li><a href="#">학점은행제 알리미</a></li>
            <li><a href="#">대학평생교육활성화</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.footBottom}>
        <h2 className={styles.footLogo}><img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" /></h2>
        <div className={styles.footTxt}>
          <div className={styles.footPolicy}>
            <Link to="/">이용약관 및 위치 서비스</Link>
            <Link to="/">개인정보 처리 방침</Link>
            <Link to="/">저작권 보호 정책</Link>
          </div>
          <p>고객센터 : 1811-3118 (평일 9:00~18:00 운영 / * 점심시간 12:00~13:00 제외)</p>
          <p>Copyright ⓒ 2020 National Institute for Lifelong Education. All Rights Reserved.</p>
        </div>
        <div className={styles.footMark}>
          <img src={`${process.env.PUBLIC_URL}/img/foot-logo_moe.svg`} alt="footmark"/>
          <img src={`${process.env.PUBLIC_URL}/img/foot-logo_nile.svg`} alt="footmark"/>
          <img src={`${process.env.PUBLIC_URL}/img/foot-logo_wa.png`} alt="footmark"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;