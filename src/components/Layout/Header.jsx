<<<<<<< HEAD
import styles from "./Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faGlobe,
  faBars,
  faXmark,
  faDisplay,
  faUsers,
  faHouse,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

import {Routes, Route, Link} from "react-router-dom";

import Login from "../../pages/Login.jsx";
import { SignUp } from "../../pages/SignUp.jsx";

import { Mobile, Pc } from "../MediaQuery";
import { useState } from "react";

const Header = () => {
  const [searchBox, setSearchBox] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <Pc>
        <header>
          <h1 className={styles.logo}>
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
            </Link>
          </h1>

          {searchBox === true ? (
            <SearchBox searchBox={searchBox} setSearchBox={setSearchBox} />
          ) : null}

          <SearchBar searchBox={searchBox} setSearchBox={setSearchBox} />

          <div className={styles.privateMenu}>
            <Link to="/login">로그인</Link>
            <Link to="/sign-up">회원가입</Link>
            <FontAwesomeIcon icon={faGlobe} className={styles.globalIcon} />
          </div>
        </header>
      </Pc>

      <Mobile>
        <header>
          <h1 className={styles.logo}>
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
            </Link>
          </h1>
          <div className={styles.privateMenu}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faGlobe} />
            <FontAwesomeIcon icon={faBars} onClick={()=>{setMobileMenu(!mobileMenu)}}/>
          </div>
          {mobileMenu === true ? <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/> : null}
          <MobileBottomMenu />
        </header>
      </Mobile>

      <Routes>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/sign-up/*" element={<SignUp/>}/>
      </Routes>

    </>
  );
};

const SearchBar = (props) => {
  return (
    <div
      className={`${styles.searchBar} ${styles.searchBarInbox}`}
      onClick={() => {
        props.setSearchBox(!props.searchBox);
      }}
    >
      <form>
        <label htmlFor="searchContent" className={styles.searchContent}>
          <input
            id={styles.searchContent}
            type="search"
            autoComplete="false"
            placeholder="무엇을 배우고 싶은가요?"
          />
        </label>
        <label htmlFor="searchSubmit" className={styles.searchSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input id={styles.searchSubmit} type="submit" />
        </label>
      </form>
    </div>
  );
};

const SearchBox = (props) => {
  return (
    <div className={styles.searchBox}>
      <SearchBar />
      <p
        className={styles.backBtn}
        onClick={() => {
          props.setSearchBox(!props.searchBox);
        }}
      >
        <span>취소 </span>
        <FontAwesomeIcon icon={faXmark} />
      </p>
      <div className={styles.searchBoxContent}>
        <div className={styles.recentSearch}>
          <h2 className={styles.searchBoxHeader}>최근 검색어</h2>
          <p className={styles.recentSearchCon}>
            <span>자바스크립트의 기초</span>
            <span>파이썬 데이터 베이스</span>
          </p>
          <span className={styles.searchResetBtn}>전체삭제</span>
        </div>
        <div className={styles.recommendSearch}>
          <h2 className={styles.searchBoxHeader}>추천 검색어</h2>
          <p className={styles.recommendSearchCon}>
            <span className={styles.recommendBtn}>4차 산업혁명</span>
            <span className={styles.recommendBtn}>AI 인공지능</span>
            <span className={styles.recommendBtn}>글로벌 강좌</span>
          </p>
        </div>
        <div className={styles.subjectCon}>
          <h2 className={styles.searchBoxHeader}>교육과정 분류</h2>
          <p className={styles.divisionSubjectCon}>
            <Link to="/" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_01.png`} alt="division-button" />
              <span>인문</span>
            </Link>
            <Link to="/" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_02.png`} alt="division-button" />
              <span>사회</span>
            </Link>
            <Link to="/" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_03.png`} alt="division-button" />
              <span>예체능</span>
            </Link>
            <Link to="/" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_04.png`} alt="division-button" />
              <span>융복합</span>
            </Link>
            <Link to="/" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_05.png`} alt="division-button" />
              <span>자연</span>
            </Link>
            <Link to="/" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_06.png`} alt="division-button" />
              <span>의약</span>
            </Link>
            <Link to="/" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_07.png`} alt="division-button" />
              <span>공학</span>
            </Link>
            <Link to="/" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_08.png`} alt="division-button" />
              <span>블루리본</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = (props) => {
  return (
    <>
      <div className={styles.mobileMenu}>
        <div className={styles.mobileBtnCon}>
          <Link to="/sign-up" className={styles.mobileBtn}>회원가입</Link>
          <Link to="/login" className={styles.mobileBtn}>로그인</Link>
        </div>
        <div className={styles.mobileIconCon}>
          <Link to="/" className={styles.mobileIcon}>
            <div className={styles.mobileIconImg}><img src={`${process.env.PUBLIC_URL}/img/icon/quick_01.png`} alt="quick" /></div>
            <span>매치업 강좌</span>
          </Link>
          <Link to="/" className={styles.mobileIcon}>
            <div className={styles.mobileIconImg}><img src={`${process.env.PUBLIC_URL}/img/icon/quick_02.png`} alt="quick" /></div>
            <span>학점은행강좌</span>
          </Link>
          <Link to="/" className={styles.mobileIcon}>
            <div className={styles.mobileIconImg}><img src={`${process.env.PUBLIC_URL}/img/icon/quick_03.png`} alt="quick" /></div>
            <span>묶음강좌</span>
          </Link>
          <Link to="/" className={styles.mobileIcon}>
            <div className={styles.mobileIconImg}><img src={`${process.env.PUBLIC_URL}/img/icon/quick_04.png`} alt="quick" /> </div>
            <span>분야별강좌</span>
          </Link>
          <Link to="/" className={styles.mobileIcon}>
            <div className={styles.mobileIconImg}><img src={`${process.env.PUBLIC_URL}/img/icon/quick_05.png`} alt="quick" /></div>
            <span>교양강좌</span>
          </Link>
        </div>
        <nav className={styles.mobileMenuLinkCon}>
          <ul className={styles.mobileMenuLink}>
            <li>
              <span>K-MOOC 소개</span>
              <ul className={styles.mobileSubMenu}>
                <li><Link to="/">K-MOOC이란?</Link></li>
                <li><Link to="/">추진체계</Link></li>
                <li><Link to="/">참여기관</Link></li>
              </ul>
            </li>
            <li>
              <span>강좌찾기</span>
              <ul className={styles.mobileSubMenu}>
                <li><Link to="/">분야별 강좌</Link></li>
                <li><Link to="/">묶음 강좌</Link></li>
                <li><Link to="/">학점은행과정</Link></li>
              </ul>
            </li>
            <li>
              <span>커뮤니티</span>
              <ul className={styles.mobileSubMenu}>
                <li><Link to="/">공지사항</Link></li>
                <li><Link to="/">뉴스</Link></li>
                <li><Link to="/">자료실</Link></li>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">K-MOOC에 바라는 점</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className={styles.snsLinkCon}>
          <a href="#" className={styles.snsLink}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns01.png`} alt="sns" /></a>
          <a href="#" className={styles.snsLink}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns02.png`} alt="sns" /></a>
          <a href="#" className={styles.snsLink}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns03.png`} alt="sns" /></a>
          <a href="#" className={styles.snsLink}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns04.png`} alt="sns" /></a>
        </div>
        <div className={styles.closeBtn} onClick={()=>{props.setMobileMenu(!props.mobileMenu);}}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.mobileMenuBg}></div>
    </>
  );
};

const MobileBottomMenu = () => {
  return (
    <div className={styles.mobileBottomMenu}>
      <Link to="/" className={styles.mobileBottomBtn}>
        <FontAwesomeIcon icon={faDisplay} className={styles.mobileBottomIcon}/>
        <span>내 강의</span>
      </Link>
      <Link to="/" className={styles.mobileBottomBtn}>
        <FontAwesomeIcon icon={faUsers} className={styles.mobileBottomIcon}/>
        <span>마이페이지</span>
      </Link>
      <Link to="/" className={styles.mobileBottomBtn}>
        <FontAwesomeIcon icon={faHouse} className={styles.mobileBottomIcon}/>
        <span>홈</span>
      </Link>
      <Link to="/" className={styles.mobileBottomBtn}>
        <FontAwesomeIcon icon={faEllipsis} className={styles.mobileBottomIcon}/>
        <span>더보기</span>
      </Link>
    </div>
  );
};

export default Header;
=======
import styles from "./Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faGlobe,
  faBars,
  faXmark,
  faDisplay,
  faUsers,
  faHouse,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

import {Routes, Route, Link} from "react-router-dom";

import { Mobile, Pc } from "../MediaQuery";
import { useState } from "react";

const Header = () => {
  const [searchBox, setSearchBox] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <Pc>
        <header>
          <h1 className={styles.logo}>
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
            </Link>
          </h1>

          {searchBox === true ? (
            <SearchBox searchBox={searchBox} setSearchBox={setSearchBox} />
          ) : null}

          <SearchBar searchBox={searchBox} setSearchBox={setSearchBox} />

          <div className={styles.privateMenu}>
            <a href="#">로그인</a>
            <a href="#">회원가입</a>
            <FontAwesomeIcon icon={faGlobe} className={styles.globalIcon} />
          </div>
        </header>
      </Pc>

      <Mobile>
        <header>
          <h1 className={styles.logo}>
            <a href="/">
              <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
            </a>
          </h1>
          <div className={styles.privateMenu}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faGlobe} />
            <FontAwesomeIcon icon={faBars} onClick={()=>{setMobileMenu(!mobileMenu)}}/>
          </div>
          {mobileMenu === true ? <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/> : null}
          <MobileBottomMenu />
        </header>
      </Mobile>
    </>
  );
};

const SearchBar = (props) => {
  return (
    <div
      className={`${styles.searchBar} ${styles.searchBarInbox}`}
      onClick={() => {
        props.setSearchBox(!props.searchBox);
      }}
    >
      <form>
        <label htmlFor="searchContent" className={styles.searchContent}>
          <input
            id={styles.searchContent}
            type="search"
            autoComplete="false"
            placeholder="무엇을 배우고 싶은가요?"
          />
        </label>
        <label htmlFor="searchSubmit" className={styles.searchSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input id={styles.searchSubmit} type="submit" />
        </label>
      </form>
    </div>
  );
};

const SearchBox = (props) => {
  return (
    <div className={styles.searchBox}>
      <SearchBar />
      <p
        className={styles.backBtn}
        onClick={() => {
          props.setSearchBox(!props.searchBox);
        }}
      >
        <span>취소 </span>
        <FontAwesomeIcon icon={faXmark} />
      </p>
      <div className={styles.searchBoxContent}>
        <div className={styles.recentSearch}>
          <h2 className={styles.searchBoxHeader}>최근 검색어</h2>
          <p className={styles.recentSearchCon}>
            <span>자바스크립트의 기초</span>
            <span>파이썬 데이터 베이스</span>
          </p>
          <span className={styles.searchResetBtn}>전체삭제</span>
        </div>
        <div className={styles.recommendSearch}>
          <h2 className={styles.searchBoxHeader}>추천 검색어</h2>
          <p className={styles.recommendSearchCon}>
            <span className={styles.recommendBtn}>4차 산업혁명</span>
            <span className={styles.recommendBtn}>AI 인공지능</span>
            <span className={styles.recommendBtn}>글로벌 강좌</span>
          </p>
        </div>
        <div className={styles.subjectCon}>
          <h2 className={styles.searchBoxHeader}>교육과정 분류</h2>
          <p className={styles.divisionSubjectCon}>
            <a href="#" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_01.png`} alt="division-button" />
              <span>인문</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_02.png`} alt="division-button" />
              <span>사회</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_03.png`} alt="division-button" />
              <span>예체능</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_04.png`} alt="division-button" />
              <span>융복합</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_05.png`} alt="division-button" />
              <span>자연</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_06.png`} alt="division-button" />
              <span>의약</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_07.png`} alt="division-button" />
              <span>공학</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/search_08.png`} alt="division-button" />
              <span>블루리본</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = (props) => {
  return (
    <>
      <div className={styles.mobileMenu}>
        <div className={styles.mobileBtnCon}>
          <Link to="/signUp" className={styles.mobileBtn}>회원가입</Link>
          <Link to="/login" className={styles.mobileBtn}>로그인</Link>
        </div>
        <div className={styles.mobileIconCon}>
          <Link to="/" className={styles.mobileIcon}>
            <div className={styles.mobileIconImg}><img src={`${process.env.PUBLIC_URL}/img/icon/quick_01.png`} alt="quick" /></div>
            <span>매치업 강좌</span>
          </Link>
          <Link to="/" className={styles.mobileIcon}>
            <div className={styles.mobileIconImg}><img src={`${process.env.PUBLIC_URL}/img/icon/quick_02.png`} alt="quick" /></div>
            <span>학점은행강좌</span>
          </Link>
          <Link to="/" className={styles.mobileIcon}>
            <div className={styles.mobileIconImg}><img src={`${process.env.PUBLIC_URL}/img/icon/quick_03.png`} alt="quick" /></div>
            <span>묶음강좌</span>
          </Link>
          <Link to="/" className={styles.mobileIcon}>
            <div className={styles.mobileIconImg}><img src={`${process.env.PUBLIC_URL}/img/icon/quick_04.png`} alt="quick" /> </div>
            <span>분야별강좌</span>
          </Link>
          <Link to="/" className={styles.mobileIcon}>
            <div className={styles.mobileIconImg}><img src={`${process.env.PUBLIC_URL}/img/icon/quick_05.png`} alt="quick" /></div>
            <span>교양강좌</span>
          </Link>
        </div>
        <nav className={styles.mobileMenuLinkCon}>
          <ul className={styles.mobileMenuLink}>
            <li>
              <span>K-MOOC 소개</span>
              <ul className={styles.mobileSubMenu}>
                <li>K-MOOC이란?</li>
                <li>추진체계</li>
                <li>참여기관</li>
              </ul>
            </li>
            <li>
              <span>강좌찾기</span>
              <ul className={styles.mobileSubMenu}>
                <li>분야별 강좌</li>
                <li>묶음 강좌</li>
                <li>학점은행과정</li>
              </ul>
            </li>
            <li>
              <span>커뮤니티</span>
              <ul className={styles.mobileSubMenu}>
                <li>공지사항</li>
                <li>뉴스</li>
                <li>자료실</li>
                <li>FAQ</li>
                <li>K-MOOC에 바라는 점</li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className={styles.snsLinkCon}>
          <a href="#" className={styles.snsLink}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns01.png`} alt="sns" /></a>
          <a href="#" className={styles.snsLink}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns02.png`} alt="sns" /></a>
          <a href="#" className={styles.snsLink}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns03.png`} alt="sns" /></a>
          <a href="#" className={styles.snsLink}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns04.png`} alt="sns" /></a>
        </div>
        <div className={styles.closeBtn} onClick={()=>{props.setMobileMenu(!props.mobileMenu);}}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.mobileMenuBg}></div>
    </>
  );
};

const MobileBottomMenu = () => {
  return (
    <div className={styles.mobileBottomMenu}>
      <a href="#" className={styles.mobileBottomBtn}>
        <FontAwesomeIcon icon={faDisplay} className={styles.mobileBottomIcon}/>
        <span>내 강의</span>
      </a>
      <a href="#" className={styles.mobileBottomBtn}>
        <FontAwesomeIcon icon={faUsers} className={styles.mobileBottomIcon}/>
        <span>마이페이지</span>
      </a>
      <a href="#" className={styles.mobileBottomBtn}>
        <FontAwesomeIcon icon={faHouse} className={styles.mobileBottomIcon}/>
        <span>홈</span>
      </a>
      <a href="#" className={styles.mobileBottomBtn}>
        <FontAwesomeIcon icon={faEllipsis} className={styles.mobileBottomIcon}/>
        <span>더보기</span>
      </a>
    </div>
  );
};

export default Header;
>>>>>>> f5ad78b22976f4552906df481820e1a57f608396
