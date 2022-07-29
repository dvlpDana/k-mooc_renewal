import styles from "./Login.module.css";

import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  console.log("Login rendering");

  const navigate = useNavigate();

  return (
    <section className={styles.secLogin}>
      <div className={styles.login}>
        <h2 className={styles.loginHeader}>로그인</h2>
        <form action="/" method="post">
          <div className={styles.inputBox}>
            <input
              type="text"
              className={styles.inputTxt}
              id={styles.id}
              placeholder="아이디(이메일 주소)"
              title="아이디"
              required
              autoComplete="off"
            />
            <label htmlFor="id"></label>
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              className={styles.inputTxt}
              id={styles.pw}
              placeholder="비밀번호"
              title="비밀번호"
              minLength="8"
              required
              autoComplete="off"
            />
            <label htmlFor="pw"></label>
          </div>
          <div className={styles.checkBoxArea}>
            <div className={styles.itemCheckBox}>
              <input
                type="checkbox"
                className={styles.hidden}
                data-check="n"
                data-checked="n"
                id={styles.check1}
              />
              <label htmlFor="check1">ID 저장</label>
            </div>
            <div className={styles.itemCheckBox}>
              <input
                type="checkbox"
                className={styles.hidden}
                data-check="n"
                data-checked="n"
                id={styles.check2}
              />
              <label htmlFor="check2">로그인 상태 유지</label>
            </div>
          </div>
          <button
            type="submit"
            value="Sign in"
            className={`${styles.btnOval} ${styles.btnLogin}`}
            onClick={() => { navigate("/") }}
          >
            로그인
          </button>
          <div className={styles.loginSearchBox}>
            <Link to="/login" className={styles.loginSearchBtn}>아이디 찾기</Link>
            <Link to="/login" className={styles.loginSearchBtn}>비밀번호 찾기</Link>
            <Link to="/sign-up" className={styles.loginSearchBtn}>회원가입</Link>
          </div>
        </form>
      </div>
      <div className={styles.snsLogin}>
        <h2 className={styles.loginHeader}>SNS 로그인</h2>
        <Link
          to="/login"
          className={`${styles.btnSnsLogin} ${styles.btnWide} ${styles.kakao}`}
        >
          <img src={`${process.env.PUBLIC_URL}/img/icon/login_kakao.png`} />
          <span>카카오 계정으로 시작하기</span>
        </Link>
        <Link
          to="/login"
          className={`${styles.btnSnsLogin} ${styles.btnWide} ${styles.naver}`}
        >
          <img src={`${process.env.PUBLIC_URL}/img/icon/login_naver.png`} />
          <span>네이버 계정으로 시작하기</span>
        </Link>
        <Link
          to="/login"
          className={`${styles.btnSnsLogin} ${styles.btnWide} ${styles.apple}`}
        >
          <img src={`${process.env.PUBLIC_URL}/img/icon/login_apple.png`} />
          <span>APPLE 계정으로 시작하기</span>
        </Link>
      </div>
    </section>
  );
}

export default Login;
