import styles from "./Enrolment.module.css";

import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf, faBookmark, faPlay } from "@fortawesome/free-solid-svg-icons";


function Enrolment() {

  const navigate = useNavigate();

  return (
    <section className={styles.secEnrolment}>
      <div className={styles.lectureDetailCon}>
        <div className={styles.lectureHeader}>
          <h2>파이썬 프로그래밍</h2>
          <ul className={styles.lectureClassfication}>
            <li>분야</li>
            <li>공학</li>
            <li>컴퓨터 통신</li>
          </ul>
          <div className={styles.hashtagsCon}>
            <span className={styles.lectureHashTag}>#초급</span>
            <span className={styles.lectureHashTag}>#프로그래밍</span>
            <span className={styles.lectureHashTag}>#김경미</span>
            <span className={styles.lectureHashTag}>#파이썬</span>
            <span className={styles.lectureHashTag}>#IT 개발</span>
          </div>
        </div>
        <div className={styles.lecturePreview}>
          <h3>강의 미리보기</h3>
          <div className={styles.lectureInfo}>
            <div className={styles.lectureMovie}><iframe src="https://www.youtube.com/embed/8Q9N8E0RpDg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe></div>
            <p className={styles.lectureInfoTxt}>
              파이썬 언어는 최근 전문 프로그래머들이 사용하는 언어중 하나로 점점 그 비중이 높아져 가고 있습니다.
              이 강의는 파이썬 언어의 기초를 다루는 강의입니다. 프로그래밍을 처음 시작하거나, 파이썬 언어를 배우고자 하는 수강생을 대상으로 개설한 강의입니다.
              초보자가 따라올 수 있도록 진행되는 과정이니 중급 이상의 강의를 원하는 수강생들에게는 적합하지 않을 수 있습니다.
            </p>
          </div>
        </div>
        <div className={styles.lectureIndex}>
          <h3>강의 목차</h3>
          <table className={styles.lecturePlanTable}>
            <thead>
              <tr>
                <th>주차</th>
                <th>주차명</th>
                <th>주차별 학습목표</th>
                <th>차시</th>
                <th>차시명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={4}>1</td>
                <td rowSpan={4}>프로그래밍 기본 개념</td>
                <td rowSpan={4} className={styles.alignLeft}>파이썬 프로그래밍을 하기 위한 기본 환경을 설정할 수 있다</td>
                <td>1</td>
                <td className={styles.alignLeft}>컴퓨터 프로그래밍의 기본 이해</td>
              </tr>
              <tr>
                <td>2</td>
                <td className={styles.alignLeft}>파이썬 IDE 설치하기</td>
              </tr>
              <tr>
                <td>3</td>
                <td className={styles.alignLeft}>대화형 프로그램 처음 작성하기</td>
              </tr>
              <tr>
                <td>4</td>
                <td className={styles.alignLeft}>과제물 : IDE 설치 스크린샷 업로드</td>
              </tr>
              <tr className={styles.rowTop}>
                <td rowSpan={4}>2</td>
                <td rowSpan={4}>변수, 연산자 활용하기</td>
                <td rowSpan={4} className={styles.alignLeft}>변수와 연산자의 의미와 활용 목적을 이해하고, 코딩에 응용한다</td>
                <td>5</td>
                <td className={styles.alignLeft}>변수와 메모리 할당</td>
              </tr>
              <tr>
                <td>6</td>
                <td className={styles.alignLeft}>변수 활용하기</td>
              </tr>
              <tr>
                <td>7</td>
                <td className={styles.alignLeft}>연산자 소개, 활용하기</td>
              </tr>
              <tr>
                <td>8</td>
                <td className={styles.alignLeft}>과제물: 연산자 활용한 코드 제출</td>
              </tr>
              <tr className={styles.rowTop}>
                <td rowSpan={4}>3</td>
                <td rowSpan={4}>입출력과 조건문</td>
                <td rowSpan={4} className={styles.alignLeft}>입력문, 출력문, 조건을
                  처리하는 명령어를
                  이해하고 코딩에 응용한다</td>
                <td>9</td>
                <td className={styles.alignLeft}>입력문, 출력문의 이해와 활용</td>
              </tr>
              <tr>
                <td>10</td>
                <td className={styles.alignLeft}>조건문의 이해</td>
              </tr>
              <tr>
                <td>11</td>
                <td className={styles.alignLeft}>조건문의 활용</td>
              </tr>
              <tr>
                <td>12</td>
                <td className={styles.alignLeft}>과제물: 입출력문 활용한 코드 제출</td>
              </tr>
              <tr className={styles.rowTop}>
                <td rowSpan={3}>4</td>
                <td rowSpan={3}>조건문과 반복뭄</td>
                <td rowSpan={3} className={styles.alignLeft}>여러개의 조건을 활용하는
                  방식과, 반복문 기초에 대해
                  이해하고 코딩에 응용한다</td>
                <td>13</td>
                <td className={styles.alignLeft}>다중 조건문의 이해와 활용</td>
              </tr>
              <tr>
                <td>14</td>
                <td className={styles.alignLeft}>반복문의 이해</td>
              </tr>
              <tr>
                <td>15</td>
                <td className={styles.alignLeft}>과제물: 조건문 활용한 코드 제출</td>
              </tr>
              <tr className={styles.rowTop}>
                <td rowSpan={4}>5</td>
                <td rowSpan={4}>다양한 반복문</td>
                <td rowSpan={4} className={styles.alignLeft}>반복문 while, for,
                  다중 for문의 활용을
                  이해하고 코딩에 응용한다</td>
                <td>16</td>
                <td className={styles.alignLeft}>while문 활용하기</td>
              </tr>
              <tr>
                <td>17</td>
                <td className={styles.alignLeft}>for문, range함수 활용하기</td>
              </tr>
              <tr>
                <td>18</td>
                <td className={styles.alignLeft}>다중 for문 활용하기</td>
              </tr>
              <tr>
                <td>19</td>
                <td className={styles.alignLeft}>과제물: 반복절 활용한 코드 제출</td>
              </tr>
              <tr className={styles.rowTop}>
                <td rowSpan={4}>6</td>
                <td rowSpan={4}>예외처리,
                  turtle로
                  그리기
                </td>
                <td rowSpan={4} className={styles.alignLeft}>예외처리 개념을 이해하고
                  활용한다
                  간단하게 그래픽을 그리는
                  turtle을 활용한다</td>
                <td>20</td>
                <td className={styles.alignLeft}>예외처리의 이해와 활용</td>
              </tr>
              <tr>
                <td>21</td>
                <td className={styles.alignLeft}>turtle 이해하기</td>
              </tr>
              <tr>
                <td>22</td>
                <td className={styles.alignLeft}>turtle 활용하면서 함수 소개</td>
              </tr>
              <tr>
                <td>23</td>
                <td className={styles.alignLeft}>과제물: 예외처리 및 turtle 반복절
                  활용한 코드 제출
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className={styles.rowTop}>
                <td>8</td>
                <td colSpan={4}>기말고사</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className={styles.lectureCourseInfo}>
          <h3>강좌 수강 정보</h3>
          <h4>[평가 기준표]</h4>
          <table className={styles.evaluationStandardTable}>
            <thead>
              <tr>
                <th>퀴즈</th>
                <th>과제</th>
                <th>기타<span>검색자료 업로드</span></th>
                <th>기말고사</th>
                <th>총점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>35%</td>
                <td>30%</td>
                <td>5%</td>
                <td>30%</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
          <ol className={styles.evaluationInfoList}>
            <li>매주 과제가 있습니다.</li>
            <li>
              <span>매 주차별로 퀴즈가 진행됩니다.</span>
              <ol>
                <li>각 퀴즈는 게시 이 후 2주로 기한이 잡혀 있습니다. (예: 9/18일 퀴즈 경우, 10/2까지 퀴즈 풀이 완료)</li>
                <li>퀴즈 문제 풀이 횟수는 제한이 없습니다.</li>
                <li>기한 내 퀴즈풀이를 해 주셔야 이수증을 문제 없이 발급 받으실 수 있습니다.</li>
                <li>퀴즈 점수는 모든 퀴즈 문제를 합산하여 계산이 됩니다. </li>
              </ol>
            </li>
            <li>총 60% 이상 점수 획득 시, 이수증을 발급받을 수 있습니다.</li>
          </ol>
          <h4>[강좌 수준 및 선수 요건]</h4>
          <ol className={styles.evaluationInfoList}>
            <li>
              <span>교재 및 참고 문헌</span>
              <ol>
                <li>
                  <span>IntroductiontoComputingUsingPython,Ljubomif Perkovic (Wiley, 2012)</span>
                  <i>* 위 서적은 참고자료이며 필수지참이 아님을 알려 드립니다.</i>
                </li>
                <li>
                  <span>교수자 제공 자료 (PPT 파일 : 강의자료에서 다운로드 가능)</span>
                  <i>* 영상에서 다뤄지는 코드 및 과제수행하는데 필요한 코드를 담고 있습니다.</i>
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <div className={styles.questions}>
          <h3>자주 묻는 질문</h3>
          <strong>누구나 들을 수 있나요?</strong>
          <span>파이썬에 관심 있는 일반인 및 대학생이라면 누구나 수강 가능합니다.</span>
          <strong>강좌 교재가 따로 있나요?</strong>
          <span>이 강좌를 수강하기 위해 따로 준비해야 하는 교재는 없으며, 교수자가 자체 제작한 PPT 등을 제공합니다.</span>
        </div>
      </div>
      <aside className={styles.lectureSideBar}>
        <div className={styles.lectureSideInfoCon}>
          <figure className={styles.lectureImg}>
            <img src={`${process.env.PUBLIC_URL}/img/enrolment_class-img.png`} />
            <figcaption>
              <strong>파이썬 프로그래밍</strong>
              <span>한동대 김경미 교수</span>
            </figcaption>
          </figure>
          <ol className={styles.lectureSideInfo}>
            <li>
              <strong>강사</strong>
              <span>김경미 교수</span>
            </li>
            <li>
              <strong>운영기관<br />(전화번호)</strong>
              <span>한동대학교<br />(054-260-1072)</span>
            </li>
            <li>
              <strong>주차<br />(주간학습권장시간)</strong>
              <span>14주<br />(주당 2시간)</span>
            </li>
            <li>
              <strong>자막 언어</strong>
              <span>한국어</span>
            </li>
            <li>
              <strong>학습 인정시간<br />(총 동영상 시간)</strong>
              <span>45시간 59분<br />(10시간 37분)</span>
            </li>
            <li>
              <strong>수강 신청 기간</strong>
              <span>2022.02.10 ~ 2022.04.01</span>
            </li>
            <li>
              <strong>강좌 운영 기간</strong>
              <span>2022.02.28 ~ 2022.06.19</span>
            </li>
            <li>
              <strong>강좌 만족도</strong>
              <span className={styles.lectureStarIconCon}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </li>
          </ol>
          <div className={styles.lectureSnsLink}>
            <span className={styles.snsLinkBtn}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns01.png`} /></span>
            <span className={styles.snsLinkBtn}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns02.png`} /> </span>
            <span className={styles.snsLinkBtn}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns03.png`} />  </span>
            <span className={styles.snsLinkBtn}><img src={`${process.env.PUBLIC_URL}/img/mobile_sns04.png`} />  </span>
          </div>
        </div>
        <div className={styles.lectureBtnCon}>
          <button className={styles.markBtn}><FontAwesomeIcon icon={faBookmark} /></button>
          <div className={styles.learnLinkBtn} onClick={() => { navigate("/") }}>학습하기<FontAwesomeIcon icon={faPlay} /></div>
        </div>
      </aside>
    </section>
  );

}

export default Enrolment;
