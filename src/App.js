import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./css/reset.css";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
<<<<<<< HEAD
import {
  RecommendLecture,
  PopularLecture,
  NewLecture,
} from "./components/Lecture";
=======
import {RecommendLecture, PopularLecture, NewLecture} from "./components/Lecture";
>>>>>>> f5ad78b22976f4552906df481820e1a57f608396

function App() {
  return (
    <div className="mobile-wrap">
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<MainIndex />} />
      </Routes>
=======
      <section className="sec-hero">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop
          autoplay={ {delay: 7000} }
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="heroSlide firstSlide">
              <div className="slideCon">
                <div className="slideTxtCon">
                  <h2 className="slideHeader">
                    <span>K-MOOC</span>
                    <FontAwesomeIcon icon={ faXmark } />
                    <span>SERICEO</span>
                  </h2>
                  <p className="slideTxt">
                    단순 직무 기술을 넘어 남다른 시각과 비즈니스 애티튜드를<br /> 
                    <strong> K-MOOC X SERICEO</strong> 취업지원 강좌에서 찾아보세요
                  </p>
                  <Link to="/" className="slideDetailBtn">자세히보기</Link>
                </div>
                <div className="slideImgCon">
                  <img src={`${process.env.PUBLIC_URL}/img/hero-img01.png`}/>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="heroSlide secondSlide">
              <div className="slideCon">
                <div className="slideTxtCon">
                  <h2 className="slideHeader">
                    <span>K-MOOC</span>
                    <span className="koreanTxt">의 새로운 도전</span>
                  </h2>
                  <p className="slideTxt">
                    K-MOOC와 EBS, JTBC가 함께하는 교양강좌
                  </p>
                  <div className="programTitle">
                    <img src={`${process.env.PUBLIC_URL}/img/hero02_class01.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/img/hero02_class02.png`}/>
                  </div>
                  <Link to="/" className="slideDetailBtn">자세히보기</Link>
                </div>
                <div className="slideImgCon">
                  <img src={`${process.env.PUBLIC_URL}/img/hero-img02.png`}/>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="heroSlide thirdSlide">
              <div className="slideCon">
                <div className="slideTxtCon">
                  <h2 className="slideHeader">
                    <span>K-MOOC</span>
                    <FontAwesomeIcon icon={ faXmark } />
                    <span>MATCH業</span>
                  </h2>
                  <p className="slideTxt">
                  4차 산업혁명 온라인 교육과정 매치업(MATCH業)을 
                  이수하여 관련 분야에 대한 직무 능력을 인증받아 보세요
                  </p>
                  <Link to="/" className="slideDetailBtn">자세히보기</Link>
                </div>
                <div className="slideImgCon">
                  <img src={`${process.env.PUBLIC_URL}/img/hero-img03.png`}/>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="heroSlide fourthSlide">
              <div className="slideCon">
                <div className="slideTxtCon">
                  <h2 className="slideHeader">
                    <span>K-MOOC</span>
                    <span className="koreanTxt">글로벌 강좌 초대장</span>
                  </h2>
                  <p className="slideTxt">
                    구독권을 신청하여 4차 산업혁명 시대에서<br/> 
                    스페셜리스트가 되기 위한 필수강좌를 만나보세요
                  </p>
                  <Link to="/" className="slideDetailBtn">자세히보기</Link>
                </div>
                <div className="slideImgCon">
                  <img src={`${process.env.PUBLIC_URL}/img/hero-img02.png`}/>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="quick-menu">
        <div className="wrap">
          <Link to="/" className="quickBtn">
            <img src={`${process.env.PUBLIC_URL}/img/icon/quick_01.png`} alt="quickMenu" />
            <span>분야별 강좌</span>
          </Link>
          <Link to="/" className="quickBtn">
            <img src={`${process.env.PUBLIC_URL}/img/icon/quick_02.png`} alt="quickMenu" />
            <span>붂음 강좌</span>
          </Link>
          <Link to="/" className="quickBtn">
            <img src={`${process.env.PUBLIC_URL}/img/icon/quick_03.png`} alt="quickMenu" />
            <span>교양 강좌</span>
          </Link>
          <Link to="/" className="quickBtn">
            <img src={`${process.env.PUBLIC_URL}/img/icon/quick_04.png`} alt="quickMenu" />
            <span>학점은행과정</span>
          </Link>
          <Link to="/" className="quickBtn">
            <img src={`${process.env.PUBLIC_URL}/img/icon/quick_05.png`} alt="quickMenu" />
            <span>매치업 강좌</span>
          </Link>
        </div>
      </div>
      <section className="sec-lecture">
        <div className="recommend-lecture lecture-list_con">
          <div className="lectureListHeader">
            <h3>추천강의</h3>
            <span>K-MOOC 운영자가 직접 추천해드려요</span>
            <Link to="/" className="lectureShortcut shortCut">바로가기</Link>
          </div>
          <div className="lectureCon">
            <RecommendLecture></RecommendLecture>
          </div>
        </div>
        <div className="side-banner wrap">
          <img src={`${process.env.PUBLIC_URL}/img/side-banner01.png`} alt="side-banner"/>
        </div>
        <div className="popular-lecture lecture-list_con">
          <div className="lectureListHeader">
            <h3>인기강의</h3>
            <span>최근 트렌드를 반영한 주제를 담고 있어요</span>
            <Link to="/" className="lectureShortcut shortCut">바로가기</Link>
          </div>
          <div className="lectureCon">
            <PopularLecture></PopularLecture>
          </div>
        </div>
        <div className="side-banner wrap">
          <img src={`${process.env.PUBLIC_URL}/img/side-banner02.png`} alt="side-banner"/>
        </div>
        <div className="new-lecture lecture-list_con">
          <div className="lectureListHeader">
            <h3>신규강의</h3>
            <span>따끈 따끈한 신규 강의를 만나보세요</span>
            <Link to="/" className="lectureShortcut shortCut">바로가기</Link>
          </div>
          <div className="lectureCon">
            <NewLecture></NewLecture>
          </div>
        </div>
        <div className="side-banner wrap">
          <img src={`${process.env.PUBLIC_URL}/img/side-banner03.png`} alt="side-banner"/>
        </div>
      </section>
      <section className="sec-guide wrap">
        <h3 className="secHeader">
          <strong>K-MOOC 가 처음이신가요?</strong>
          <span>나에게 딱 알맞게 K-MOOC 활용하면 효과는 200% </span>
        </h3>
        <div className="guideBoxCon">
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="firstbg">청소년</figcaption>
              <img src={`${process.env.PUBLIC_URL}/img/icon/persona_01.png`} alt="persona"/>
            </figure>
            <p className="guideTxt">
              <span>온라인 학습자료 활용</span>
              <span>미래 진학 및 생애 진로 탐색 활용</span>
            </p>
          </div>
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="secondbg">대학(원)생</figcaption>
              <img src={`${process.env.PUBLIC_URL}/img/icon/persona_02.png`} alt="persona"/>
            </figure>
            <p className="guideTxt">
              <span>사전수업 준비 및 심화(보충)학습</span>
              <span>전과 학생의 선수 학습</span>
            </p>
          </div>
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="thirdbg">일반 성인 학습자</figcaption>
              <img src={`${process.env.PUBLIC_URL}/img/icon/persona_03.png`} alt="persona"/>
            </figure>
            <p className="guideTxt">
              <span>적성과 관심사에 따라 수준별 학습</span>
              <span>최신 지식 및 정보습득</span>
            </p>
          </div>
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="fourthbg">구직자 및 재직자</figcaption>
              <img src={`${process.env.PUBLIC_URL}/img/icon/persona_04.png`} alt="persona"/>
            </figure>
            <p className="guideTxt">
              <span>창업을 위한 개인 역량 강화</span>
              <span>직업훈련에 활용</span>
            </p>
          </div>
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="fifthbg">교수</figcaption>
              <img src={`${process.env.PUBLIC_URL}/img/icon/persona_05.png`} alt="persona"/>
            </figure>
            <p className="guideTxt">
              <span>플립드러닝 (flipped learning)을<br/>통한 수업 활동 다양화</span>
            </p>
          </div>
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="sixthbg">대학</figcaption>
              <img src={`${process.env.PUBLIC_URL}/img/icon/persona_06.png`} alt="persona"/>
            </figure>
            <p className="guideTxt">
              <span>학습 데이터 분석을 통한<br/>교수 학습 전략 개발 · 혁신 촉진</span>
            </p>
          </div>
          <div className="guideMovie">
            <iframe src="https://www.youtube.com/embed/6aRen-ecNqM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        </div>
      </section> 
      <div className="number-box wrap">
        <h4 className="boxHeader">숫자로 보는 K-MOOC</h4>
        <div className="numberItemCon">
          <div className="numberItem">
            <figure className="numberIcon">
              <img src={`${process.env.PUBLIC_URL}/img/icon/number_01.png`} alt="persona"/>
              <figcaption>user-number</figcaption>
            </figure>
            <p className="numberTxt">
              <span>회원수</span>
              <span><strong>누적 방문자</strong> <strong>200</strong> 만명 +</span>
            </p>
          </div>
          <div className="numberItem">
            <figure className="numberIcon">
              <img src={`${process.env.PUBLIC_URL}/img/icon/number_02.png`} alt="persona"/>
              <figcaption>lecture-number</figcaption>
            </figure>
            <p className="numberTxt">
              <span>무료 강의 수</span>
              <span><strong>온라인 강의</strong> <strong className="increasingNumber">1300</strong>개 +</span>
            </p>
          </div>
          <div className="numberItem">
            <figure className="numberIcon">
              <img src={`${process.env.PUBLIC_URL}/img/icon/number_03.png`} alt="persona"/>
              <figcaption>institution-number</figcaption>
            </figure>
            <p className="numberTxt">
              <span>참여 기관</span>
              <span><strong>대학, 공공기관 <br/>및 해외기관</strong> <strong className="increasingNumber">160</strong>개 +</span>
            </p>
          </div>
        </div>
      </div>
      <section className="sec-notice">
        <div className="wrap">
          <div className="noticeCon">
            <h4 className="boxHeader">공지사항</h4>
            <ul>
              <li>
                <span>한국형 온라인 공개강좌(K-MOOC) 모니터링단 모집 안내</span>
                <span>2022/07/20</span>
              </li>
              <li>
                <span>「제19회 대한민국 평생학습대상」 공고 안내</span>
                <span>2022/07/19</span>
              </li>
              <li>
                <span>한국형 온라인 공개강좌(K-MOOC) 추가 선정결과 발표</span>
                <span>2022/06/28</span>
              </li>
              <li>
                <span>학점은행제 K-MOOC·매치업 학습과정 평가인정 기본계획 공고</span>
                <span>2022/05/03</span>
              </li>
              <li>
                <span>한국형 온라인 공개강좌(K-MOOC)선정결과 발표</span>
                <span>2022/04/12</span>
              </li>
            </ul>
            <Link to="/" className="btnDetail shortCut">더보기</Link>
          </div>
          <div className="customerServiceCon">
            <h4 className="boxHeader">고객센터</h4>
            <img src={`${process.env.PUBLIC_URL}/img/icon/support.png`} alt="support"/>
            <p className="customerServiceTxt">
              <strong>1811-3118</strong>
              <span>평일 9:00~18:00</span>
              <span>(*점심시간 12:00~13:00 제외)</span>
            </p>
          </div>
          <div className="snsCon">
            <h4 className="boxHeader">SNS</h4>
            <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/icon/blogger.png`} alt="support"/></Link>
            <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/icon/instagram.png`} alt="support"/></Link>
            <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/icon/facebook.png`} alt="support"/></Link>
            <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/icon/youtube.png`} alt="support"/></Link>
          </div>
        </div>
      </section>
>>>>>>> f5ad78b22976f4552906df481820e1a57f608396
      <Footer />
    </div>
  );
}

function MainIndex() {
  return (
    <>
      <section className="sec-hero">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop
          autoplay={{ delay: 7000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="heroSlide firstSlide">
              <div className="slideCon">
                <div className="slideTxtCon">
                  <h2 className="slideHeader">
                    <span>K-MOOC</span>
                    <FontAwesomeIcon icon={faXmark} />
                    <span>SERICEO</span>
                  </h2>
                  <p className="slideTxt">
                    단순 직무 기술을 넘어 남다른 시각과 비즈니스 애티튜드를
                    <br />
                    <strong> K-MOOC X SERICEO</strong> 취업지원 강좌에서
                    찾아보세요
                  </p>
                  <Link to="/" className="slideDetailBtn">
                    자세히보기
                  </Link>
                </div>
                <div className="slideImgCon">
                  <img src={`${process.env.PUBLIC_URL}/img/hero-img01.png`} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="heroSlide secondSlide">
              <div className="slideCon">
                <div className="slideTxtCon">
                  <h2 className="slideHeader">
                    <span>K-MOOC</span>
                    <span className="koreanTxt">의 새로운 도전</span>
                  </h2>
                  <p className="slideTxt">
                    K-MOOC와 EBS, JTBC가 함께하는 교양강좌
                  </p>
                  <div className="programTitle">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/hero02_class01.png`}
                    />
                    <img
                      src={`${process.env.PUBLIC_URL}/img/hero02_class02.png`}
                    />
                  </div>
                  <Link to="/" className="slideDetailBtn">
                    자세히보기
                  </Link>
                </div>
                <div className="slideImgCon">
                  <img src={`${process.env.PUBLIC_URL}/img/hero-img02.png`} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="heroSlide thirdSlide">
              <div className="slideCon">
                <div className="slideTxtCon">
                  <h2 className="slideHeader">
                    <span>K-MOOC</span>
                    <FontAwesomeIcon icon={faXmark} />
                    <span>MATCH業</span>
                  </h2>
                  <p className="slideTxt">
                    4차 산업혁명 온라인 교육과정 매치업(MATCH業)을 이수하여 관련
                    분야에 대한 직무 능력을 인증받아 보세요
                  </p>
                  <Link to="/" className="slideDetailBtn">
                    자세히보기
                  </Link>
                </div>
                <div className="slideImgCon">
                  <img src={`${process.env.PUBLIC_URL}/img/hero-img03.png`} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="heroSlide fourthSlide">
              <div className="slideCon">
                <div className="slideTxtCon">
                  <h2 className="slideHeader">
                    <span>K-MOOC</span>
                    <span className="koreanTxt">글로벌 강좌 초대장</span>
                  </h2>
                  <p className="slideTxt">
                    구독권을 신청하여 4차 산업혁명 시대에서
                    <br />
                    스페셜리스트가 되기 위한 필수강좌를 만나보세요
                  </p>
                  <Link to="/" className="slideDetailBtn">
                    자세히보기
                  </Link>
                </div>
                <div className="slideImgCon">
                  <img src={`${process.env.PUBLIC_URL}/img/hero-img02.png`} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="quick-menu">
        <div className="wrap">
          <Link to="/" className="quickBtn">
            <img
              src={`${process.env.PUBLIC_URL}/img/icon/quick_01.png`}
              alt="quickMenu"
            />
            <span>분야별 강좌</span>
          </Link>
          <Link to="/" className="quickBtn">
            <img
              src={`${process.env.PUBLIC_URL}/img/icon/quick_02.png`}
              alt="quickMenu"
            />
            <span>붂음 강좌</span>
          </Link>
          <Link to="/" className="quickBtn">
            <img
              src={`${process.env.PUBLIC_URL}/img/icon/quick_03.png`}
              alt="quickMenu"
            />
            <span>교양 강좌</span>
          </Link>
          <Link to="/" className="quickBtn">
            <img
              src={`${process.env.PUBLIC_URL}/img/icon/quick_04.png`}
              alt="quickMenu"
            />
            <span>학점은행과정</span>
          </Link>
          <Link to="/" className="quickBtn">
            <img
              src={`${process.env.PUBLIC_URL}/img/icon/quick_05.png`}
              alt="quickMenu"
            />
            <span>매치업 강좌</span>
          </Link>
        </div>
      </div>
      <section className="sec-lecture">
        <div className="recommend-lecture lecture-list_con">
          <div className="lectureListHeader">
            <h3>추천강의</h3>
            <span>K-MOOC 운영자가 직접 추천해드려요</span>
            <Link to="/" className="lectureShortcut shortCut">
              바로가기
            </Link>
          </div>
          <div className="lectureCon">
            <RecommendLecture></RecommendLecture>
          </div>
        </div>
        <div className="side-banner wrap">
          <img
            src={`${process.env.PUBLIC_URL}/img/side-banner01.png`}
            alt="side-banner"
          />
        </div>
        <div className="popular-lecture lecture-list_con">
          <div className="lectureListHeader">
            <h3>인기강의</h3>
            <span>최근 트렌드를 반영한 주제를 담고 있어요</span>
            <Link to="/" className="lectureShortcut shortCut">
              바로가기
            </Link>
          </div>
          <div className="lectureCon">
            <PopularLecture></PopularLecture>
          </div>
        </div>
        <div className="side-banner wrap">
          <img
            src={`${process.env.PUBLIC_URL}/img/side-banner02.png`}
            alt="side-banner"
          />
        </div>
        <div className="new-lecture lecture-list_con">
          <div className="lectureListHeader">
            <h3>신규강의</h3>
            <span>따끈 따끈한 신규 강의를 만나보세요</span>
            <Link to="/" className="lectureShortcut shortCut">
              바로가기
            </Link>
          </div>
          <div className="lectureCon">
            <NewLecture></NewLecture>
          </div>
        </div>
        <div className="side-banner wrap">
          <img
            src={`${process.env.PUBLIC_URL}/img/side-banner03.png`}
            alt="side-banner"
          />
        </div>
      </section>
      <section className="sec-guide wrap">
        <h3 className="secHeader">
          <strong>K-MOOC 가 처음이신가요?</strong>
          <span>나에게 딱 알맞게 K-MOOC 활용하면 효과는 200% </span>
        </h3>
        <div className="guideBoxCon">
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="firstbg">청소년</figcaption>
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/persona_01.png`}
                alt="persona"
              />
            </figure>
            <p className="guideTxt">
              <span>온라인 학습자료 활용</span>
              <span>미래 진학 및 생애 진로 탐색 활용</span>
            </p>
          </div>
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="secondbg">대학(원)생</figcaption>
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/persona_02.png`}
                alt="persona"
              />
            </figure>
            <p className="guideTxt">
              <span>사전수업 준비 및 심화(보충)학습</span>
              <span>전과 학생의 선수 학습</span>
            </p>
          </div>
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="thirdbg">일반 성인 학습자</figcaption>
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/persona_03.png`}
                alt="persona"
              />
            </figure>
            <p className="guideTxt">
              <span>적성과 관심사에 따라 수준별 학습</span>
              <span>최신 지식 및 정보습득</span>
            </p>
          </div>
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="fourthbg">구직자 및 재직자</figcaption>
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/persona_04.png`}
                alt="persona"
              />
            </figure>
            <p className="guideTxt">
              <span>창업을 위한 개인 역량 강화</span>
              <span>직업훈련에 활용</span>
            </p>
          </div>
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="fifthbg">교수</figcaption>
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/persona_05.png`}
                alt="persona"
              />
            </figure>
            <p className="guideTxt">
              <span>
                플립드러닝 (flipped learning)을
                <br />
                통한 수업 활동 다양화
              </span>
            </p>
          </div>
          <div className="guideBox">
            <figure className="guideImg">
              <figcaption className="sixthbg">대학</figcaption>
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/persona_06.png`}
                alt="persona"
              />
            </figure>
            <p className="guideTxt">
              <span>
                학습 데이터 분석을 통한
                <br />
                교수 학습 전략 개발 · 혁신 촉진
              </span>
            </p>
          </div>
          <div className="guideMovie">
            <iframe
              src="https://www.youtube.com/embed/6aRen-ecNqM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </section>
      <div className="number-box wrap">
        <h4 className="boxHeader">숫자로 보는 K-MOOC</h4>
        <div className="numberItemCon">
          <div className="numberItem">
            <figure className="numberIcon">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/number_01.png`}
                alt="persona"
              />
              <figcaption>user-number</figcaption>
            </figure>
            <p className="numberTxt">
              <span>회원수</span>
              <span>
                <strong>누적 방문자</strong> <strong>200</strong> 만명 +
              </span>
            </p>
          </div>
          <div className="numberItem">
            <figure className="numberIcon">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/number_02.png`}
                alt="persona"
              />
              <figcaption>lecture-number</figcaption>
            </figure>
            <p className="numberTxt">
              <span>무료 강의 수</span>
              <span>
                <strong>온라인 강의</strong>{" "}
                <strong className="increasingNumber">1300</strong>개 +
              </span>
            </p>
          </div>
          <div className="numberItem">
            <figure className="numberIcon">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/number_03.png`}
                alt="persona"
              />
              <figcaption>institution-number</figcaption>
            </figure>
            <p className="numberTxt">
              <span>참여 기관</span>
              <span>
                <strong>
                  대학, 공공기관 <br />및 해외기관
                </strong>{" "}
                <strong className="increasingNumber">160</strong>개 +
              </span>
            </p>
          </div>
        </div>
      </div>
      <section className="sec-notice">
        <div className="wrap">
          <div className="noticeCon">
            <h4 className="boxHeader">공지사항</h4>
            <ul>
              <li>
                <span>한국형 온라인 공개강좌(K-MOOC) 모니터링단 모집 안내</span>
                <span>2022/07/20</span>
              </li>
              <li>
                <span>「제19회 대한민국 평생학습대상」 공고 안내</span>
                <span>2022/07/19</span>
              </li>
              <li>
                <span>한국형 온라인 공개강좌(K-MOOC) 추가 선정결과 발표</span>
                <span>2022/06/28</span>
              </li>
              <li>
                <span>
                  학점은행제 K-MOOC·매치업 학습과정 평가인정 기본계획 공고
                </span>
                <span>2022/05/03</span>
              </li>
              <li>
                <span>한국형 온라인 공개강좌(K-MOOC)선정결과 발표</span>
                <span>2022/04/12</span>
              </li>
            </ul>
            <Link to="/" className="btnDetail shortCut">
              더보기
            </Link>
          </div>
          <div className="customerServiceCon">
            <h4 className="boxHeader">고객센터</h4>
            <img
              src={`${process.env.PUBLIC_URL}/img/icon/support.png`}
              alt="support"
            />
            <p className="customerServiceTxt">
              <strong>1811-3118</strong>
              <span>평일 9:00~18:00</span>
              <span>(*점심시간 12:00~13:00 제외)</span>
            </p>
          </div>
          <div className="snsCon">
            <h4 className="boxHeader">SNS</h4>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/blogger.png`}
                alt="support"
              />
            </Link>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/instagram.png`}
                alt="support"
              />
            </Link>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/facebook.png`}
                alt="support"
              />
            </Link>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/youtube.png`}
                alt="support"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
