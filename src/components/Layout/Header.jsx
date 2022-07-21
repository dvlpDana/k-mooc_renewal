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
import { Mobile, Pc } from "../MediaQuery";
import { useState } from "react";

const Header = () => {
  const [searchBox, setSearchBox] = useState(false);

  return (
    <>
      <Pc>
        <header>
          <h1 className={styles.logo}>
            <a href="#">
              <img src="../img/logo.svg" alt="logo" />
            </a>
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
            <a href="#">
              <img src="../img/logo.svg" alt="logo" />
            </a>
          </h1>
          <div className={styles.privateMenu}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faGlobe} />
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* <MobileMenu/> */}
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
            name="q"
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
              <img src="../img/icon/search_01.png" alt="division-button" />
              <span>인문</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src="../img/icon/search_02.png" alt="division-button" />
              <span>사회</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src="../img/icon/search_03.png" alt="division-button" />
              <span>예체능</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src="../img/icon/search_04.png" alt="division-button" />
              <span>융복합</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src="../img/icon/search_05.png" alt="division-button" />
              <span>자연</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src="../img/icon/search_06.png" alt="division-button" />
              <span>의약</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src="../img/icon/search_07.png" alt="division-button" />
              <span>공학</span>
            </a>
            <a href="#" className={styles.subjectBtn}>
              <img src="../img/icon/search_08.png" alt="division-button" />
              <span>블루리본</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <>
      <div className={styles.mobileMenu}>
        <span>회원가입</span>
        <span>로그인</span>
        <nav>
          <ul>
            <li>메뉴1</li>
            <li>메뉴2</li>
            <li>메뉴3</li>
            <li>메뉴4</li>
          </ul>
        </nav>
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
