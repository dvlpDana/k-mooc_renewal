import styles from "./SignUp.module.css";

import { Link, useNavigate, Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SignUp = () => {
  return(
    <>
      <Outlet/>
    </>
  )
}

const MainSignUp = () => {
  return (
    <section className={styles.secSignUp}>
      <h2 className={styles.secHeader}>가입 유형 선택</h2>
      <div className={styles.memberClassfication}>
        <div className={styles.audultMember}>
          <h3>
            <strong className={styles.memberHeader}>일반회원</strong>
            <span>(만 14세 이상)</span>
          </h3>
          <img
            src={`${process.env.PUBLIC_URL}/img/join_type01.png`}
            alt="joinImg"
          />
          <Link to="/sign-up/step1">
            <button className={styles.btnJoin} type="submit" data="audult">
              가입하기
            </button>
          </Link>
        </div>
        <div className={styles.childMember}>
          <h3>
            <strong className={styles.memberHeader}>어린이회원</strong>
            <span>(만 14세 이상)</span>
          </h3>
          <img
            src={`${process.env.PUBLIC_URL}/img/join_type02.png`}
            alt="joinImg"
          />
          <Link to="/sign-up/step1">
            <button className={styles.btnJoin} type="submit" data="child">
              가입하기
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const FirstSignUp = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.secFirstStep}>
      <StatusBar />
      <div className={styles.selfAuthenticationArea}>
        <h2>회원가입 시 사용할 본인인증 방법을 선택하여 진행해주세요.</h2>
        <div className={styles.btnSelfCon}>
          <button
            className={`${styles.btnWide} ${styles.btnSelf}`}
            onClick={() => {
              navigate("/sign-up/step2");
            }}
          >
            <FontAwesomeIcon icon={faMobileScreen} />
            <span>휴대폰 번호로 본인 인증</span>
          </button>
          <span className={styles.notiSelf}>
            ( <strong>*</strong> 본인 폰으로만 본인 인증 가능합니다)
          </span>
          <button
            className={`${styles.btnWide} ${styles.btnSelf}`}
            onClick={() => {
              navigate("/sign-up/step2");
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>이메일 주소로 본인 인증</span>
          </button>
        </div>
        <div className={styles.snsJoinArea}>
          <h3>소셜 SNS 계정으로도 회원가입이 가능합니다</h3>
          <div className={styles.snsIconCon}>
            <div
              className={styles.snsIcon}
              onClick={() => {
                navigate("/sign-up/step1");
              }}
            >
              <p className={`${styles.circleSnsImg} ${styles.kakao}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icon/login_kakao.png`}
                />
              </p>
              <span>
                카카오 계정으로 <br />
                시작하기
              </span>
            </div>
            <div
              className={styles.snsIcon}
              onClick={() => {
                navigate("/sign-up/step1");
              }}
            >
              <p className={`${styles.circleSnsImg} ${styles.naver}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icon/login_naver.png`}
                />
              </p>
              <span>
                네이버 계정으로 <br />
                시작하기
              </span>
            </div>
            <div
              className={styles.snsIcon}
              onClick={() => {
                navigate("/sign-up/step1");
              }}
            >
              <p className={`${styles.circleSnsImg} ${styles.apple}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icon/login_apple.png`}
                />
              </p>
              <span>
                APPLE 계정으로 <br />
                시작하기
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SecondSignUp = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    id: "",
    email: "",
    password: "",
    userName: "",
    userSex: "",
    birthDate: "",
  });

  const { id, email, password } = inputValue;

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isValidId = id.includes("@") && email.includes(".");

  const isValidEmail = email.includes("@") && email.includes(".");

  const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  const isValidPassword = password.length >= 8 && specialLetter >= 1;

  // const isValidInput = userName.length >= 1 && id.length >= 1 && email.length >= 1 && userSex.length >= 1  && birthDate.length >= 1;

  const handleButtonValid = () => {
    if (!isValidId || !isValidEmail || !isValidPassword) {
      return alert(
        "필수 항목이 기입되지 않았습니다. 아이디와 비밀번호가 양식에 맞게 기입되어 있는지 확인해주세요."
      );
    } else {
      return navigate("/sign-up/step3");
    }
  };

  return (
    <section className={styles.secSecondStep}>
      <StatusBar />
      <div className={styles.joinInfoArea}>
        <h2>
          <strong className={styles.secHeader}>회원가입 정보 입력</strong>
          <span>
            (<strong> * </strong> 는 필수 입력 항목입니다.)
          </span>
        </h2>
        <form action="/" method="post" name="join_form">
          <section className={styles.joinForm}>
            <div className={styles.inputTxtBox}>
              <label
                htmlFor="userId"
                className={`${styles.inputHeader} ${styles.essentialInfo}`}
              >
                아이디(이메일 주소)
              </label>
              <input
                type="email"
                name="id"
                className={styles.inputTxt}
                id={styles.userId}
                placeholder="useID@domain.com"
                title="아이디"
                required
                autoComplete="off"
                onChange={handleInput}
              />
            </div>
            <div className={styles.inputTxtBox}>
              <label
                htmlFor="subEmail"
                className={`${styles.inputHeader} ${styles.essentialInfo}`}
              >
                보조 이메일
              </label>
              <input
                type="email"
                name="email"
                className={styles.inputTxt}
                id={styles.subEmail}
                placeholder="useID@domain.com"
                title="보조 이메일"
                required
                autoComplete="off"
                onChange={handleInput}
              />
              <span className={styles.inputExplanation}>
                ( 입력하신 보조 이메일은 이메일 찾기에 사용됩니다 )
              </span>
            </div>
            <div className={styles.inputTxtBox}>
              <label
                htmlFor="userPassWord"
                className={`${styles.inputHeader} ${styles.essentialInfo}`}
              >
                비밀번호
              </label>
              <input
                type="password"
                name="password"
                className={styles.inputTxt}
                id={styles.userPassWord}
                placeholder="비밀번호를 입력해주세요"
                title="비밀번호"
                minLength="8"
                required
                autoComplete="off"
                onChange={handleInput}
              />
              <span className={styles.inputExplanation}>
                ( 영어소문자, 숫자, 특수문자를 모두 사용하여 8자 이상으로 입력해
                주세요
                <br />
                사용가능 특수문자: ~!@#$%^&*()_+|?:{} )
              </span>
            </div>
            <div className={styles.inputTxtBox}>
              <span id={styles.passwordValidation}>
                사용가능한 비밀번호 입니다
              </span>
              <input
                type="password"
                className={styles.inputTxt}
                id={styles.userPassWordConfirm}
                placeholder="비밀번호를 한 번 더 입력해주세요"
                title="비밀번호"
                minLength="8"
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.inputTxtBox}>
              <label
                htmlFor="userName"
                className={`${styles.inputHeader} ${styles.essentialInfo}`}
              >
                이름
              </label>
              <input
                type="text"
                name="userName"
                className={styles.inputTxt}
                id={styles.userName}
                placeholder="실명"
                required
                onChange={handleInput}
              />
              <span className={styles.inputExplanation}>
                <strong>
                  (수료증에 표기되는 이름으로, 회원가입 후 수정이 불가능합니다)
                </strong>
              </span>
            </div>
            <div className={styles.inputTxtBox}>
              <h3 className={`${styles.inputHeader} ${styles.essentialInfo}`}>
                성별
              </h3>
              <div className={styles.radioCon}>
                <input
                  type="radio"
                  id={styles.male}
                  value="male"
                  name="userSex"
                  onChange={handleInput}
                />
                <label htmlFor="male">남성</label>
                <input
                  type="radio"
                  id={styles.female}
                  value="female"
                  name="userSex"
                  onChange={handleInput}
                />
                <label htmlFor="female">여성</label>
              </div>
            </div>
            <div className={styles.inputTxtBox}>
              <label
                htmlFor="birthDate"
                className={`${styles.inputHeader} ${styles.essentialInfo}`}
              >
                생년월일
              </label>
              <input
                type="date"
                name="birthDate"
                className={styles.inputTxt}
                id={styles.birthDate}
              ></input>
            </div>
            <div className={styles.inputTxtBox}>
              <label htmlFor="userCountry" className={styles.inputHeader}>
                국가 <span>(선택)</span>
              </label>
              <input
                type="text"
                className={styles.inputTxt}
                id={styles.userCountry}
                placeholder="출신 국가명"
              ></input>
            </div>
            <div className={styles.inputTxtBox}>
              <label htmlFor="userCity" className={styles.inputHeader}>
                도시 또는 거주 지역 <span>(선택)</span>
              </label>
              <input
                type="text"
                className={styles.inputTxt}
                id={styles.userCity}
                placeholder="살고 있는 도시명 또는 지역명"
              ></input>
            </div>
            <div className={styles.inputTxtBox}>
              <label htmlFor="userDegree" className={styles.inputHeader}>
                최종학력 <span>(선택)</span>
              </label>
              <input
                type="text"
                className={styles.inputTxt}
                id={styles.userDegree}
                placeholder="최종학력"
              ></input>
            </div>
            <div className={styles.inputTxtBox}>
              <label htmlFor="causeInterest" className={styles.inputHeader}>
                K-MOOC에 관심을 갖게 된 이유 <span>(선택)</span>
              </label>
              <textarea
                type="text"
                className={styles.textArea}
                id={styles.causeInterest}
                placeholder="K-MOOC에 관심을 갖게 된 계기를 간단히 기입해주세요."
              ></textarea>
            </div>
            <div className={styles.inputTxtBox}>
              <h3 className={styles.inputHeader}>
                광고성 메세지에 대한 정보 수신 동의
              </h3>
              <div className={styles.checkBox}>
                <input
                  type="checkbox"
                  id={styles.bothEmailSms}
                  value="bothEmailSms"
                />
                <label htmlFor="bothEmailSms">모두 수신</label>
                <input type="checkbox" id={styles.eMail} value="eMail" />
                <label htmlFor="eMail">E-MAIL</label>
                <input type="checkbox" id={styles.sms} value="sms" />
                <label htmlFor="sms">SMS</label>
              </div>
              <p className={styles.inputExplanationCon}>
                <span className={styles.inputExplanation}>
                  * 회원가입, 비밀번호, 학습하시는 강좌와 관련된 이메일, SMS는
                  정보 수신 동의여부와 관계없이 발송됩니다
                </span>
                <span className={styles.inputExplanation}>
                  * 신규강좌, 이벤트에 대한 마케팅 정보 및 알림 메시지 수신을
                  동의합니다
                </span>
                <span className={styles.inputExplanation}>
                  ※ 수신동의를 하지 않으실 경우, 학습안내, 이벤트 당첨결과 및
                  혜택 등의 메시지를 수신하실 수 없습니다
                </span>
              </p>
            </div>
            <div className={styles.inputTxtBox}>
              <h3 className={styles.inputHeader}>약관 동의</h3>
              <div className={styles.termsCheckBox}>
                <input
                  type="checkbox"
                  id={styles.bothAgree}
                  value="bothAgree"
                />
                <label htmlFor="bothAgree">전체 동의하기</label>
              </div>
              <div className={styles.termsCheckBox}>
                <input
                  type="checkbox"
                  id={styles.firstTerms}
                  value="firstTerms"
                />
                <label htmlFor="firstTerms">
                  (필수) 이용약관 및 위치 정보이용약관
                </label>
                <span>내용 보기</span>
              </div>
              <div className={styles.termsCheckBox}>
                <input
                  type="checkbox"
                  id={styles.secondTerms}
                  value="secondTerms"
                />
                <label htmlFor="secondTerms">
                  (필수) 개인정보 수집 ∙ 이용에 관한 동의
                </label>
                <span>내용 보기</span>
              </div>
            </div>

            <button className={styles.btnJoin} type="submit" data="joinInfo " onClick={handleButtonValid}>
              가입하기
            </button>
          </section>
        </form>
      </div>
    </section>
  );
};

const ThirdSignUp = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.secThirdStep}>
      <StatusBar />
      <h2>
        K-MOOC 회원가입이
        <br />
        완료되었습니다
      </h2>
      <h3 className={styles.secThirdTxt}>다양한 학습을 시작해보세요</h3>
      <span className={styles.secThirdTxt}>아이디 : userID@domain.com</span>
      <button
        type="submit"
        value="Sign in"
        className={`${styles.btnOval} ${styles.btnLogin}`}
        id={styles.btnLogin}
        onClick={() => {
          navigate("/");
        }}
      >
        로그인
      </button>
    </section>
  );
};

const StatusBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <ul className={styles.statusBar}>
        <li
          onClick={() => {
            navigate("/sign-up/step1");
          }}
        >
          <strong>STEP 1</strong>
          <span className={styles.firstStep}>회원가입 방법 선택</span>
        </li>
        <li
          onClick={() => {
            navigate("/sign-up/step2");
          }}
        >
          <strong>STEP 2</strong>
          <span className={styles.secondStep}>
            회원가입 정보 입력
            <br /> 및 약관 동의
          </span>
        </li>
        <li
          onClick={() => {
            navigate("/sign-up/step3");
          }}
        >
          <strong>STEP 3</strong>
          <span className={styles.thirdStep}>회원가입 완료</span>
        </li>
      </ul>
    </>
  );
};

export { SignUp, MainSignUp, FirstSignUp, SecondSignUp, ThirdSignUp };
