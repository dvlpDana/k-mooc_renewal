# K-MOOC 리뉴얼 프로젝트

![project_1_mockup](https://user-images.githubusercontent.com/102039456/187153931-f9ac4997-37c5-48f0-a555-c58f6878c375.jpg)

Demo : [https://dvlpdana.github.io/k-mooc_renewal/](https://dvlpdana.github.io/k-mooc_renewal/)

<br />

## 프로젝트 개발목표

<p align="justify" lineHeight="1.6" >
-  사용성 개선을 위한 UI ・ UX 디자인 개선 <br/ >
-  React Library를 활용한 개발 경험을 통해 State와 Lifecycle 개념 정립 <br/ >
-  Component 기반 개발환경 이해 증진 <br/ >
</p>

<br />

## 기술 스택

| JavaScript |     CSS     |  React   |
| :--------: | :---------: | :------: |
|   <img src="https://user-images.githubusercontent.com/102039456/187168448-0611cda1-c3e6-4fd7-bc1c-30da00bab9cd.png" width="35" height="50" >    |   <img src="https://user-images.githubusercontent.com/102039456/187168206-52fac0b8-6c5d-40e5-8f1b-1cb6b2bb22d2.png" width="35" height="50" >    |   <img src="https://user-images.githubusercontent.com/102039456/187166778-00c9be9f-ca97-4e20-92d6-f359f1821735.png" width="50" height="50" >   |

<br>

## Advandced Feature

### 1. JSON 형식의 객체 배열 - map method 활용한 데이터 가져오기
> 코드(Lecture.jsx)
```javascript
const RecommendLecture = () => {

  const [recommendedList, setRecommendedList] = useState(recommendLectureData);

  return (
    <>
      ・・・
      {recommendedList.map((element, i) => {
        return (
          <SwiperSlide key={i}>
            <RecommendLetureList recommendedList={recommendedList[i]} i={i}/>
          </SwiperSlide>
        );
      })}
      ・・・
    </>
  );
};

const RecommendLetureList = (props) => {

  const navigate = useNavigate();

  return (
    <div className={styles.lectureList} onClick={() => { navigate("/enrolment") }}>
      <div className={styles.lectuerImg}>
        <img
          src={`${process.env.PUBLIC_URL}/img/${props.recommendedList.img}`}
          alt="lectureImg"
        />
      </div>
      <span className={styles.lectureSubject}>
        {props.recommendedList.subject}
      </span>
      <p className={styles.lectureTiltle}>{props.recommendedList.title}</p>
      <div className={styles.lectureInfo}>
        <span>{props.recommendedList.instructorName}</span>
        <span>{props.recommendedList.institutionName}</span>
      </div>
      <p className={styles.lecturePeriod}>
        기간 : {props.recommendedList.period}
      </p>
      <span className={`${styles.lectureState} ${styles.stateGreen}`}>
        {props.recommendedList.state}
      </span>
    </div>
  );
};
```
> 데이터(recommended-lecture.js)
```javascript

const recommendenLectureData = [
  {
    img : "recommended-lecture_01.jpg",
    title : "뭉치면 살고 흩어지면 죽는다, 시너지를 이끌어 내는 협업의 스킬 ",
    subject : "사회과학",
    instructorName : "SERICEO 연구진",
    institutionName : "(주)멀티캠퍼스",
    period : "2021/12/29 ~ 2023/01/03",
    state : "진행중",
  },
  ・・・
````

> 구현화면
<img src="https://user-images.githubusercontent.com/102039456/187171900-0d993f77-40c2-489a-a054-48140a61060b.png">

### 2. 회원가입 페이지 유효성 검사 기능 구현
> 코드(SignUp.jsx)
```javascript
  ・・・
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

  const handleButtonValid = () => {
    if (!isValidId || !isValidEmail || !isValidPassword) {
      return alert(
        "필수 항목이 기입되지 않았습니다. 아이디와 비밀번호가 양식에 맞게 기입되어 있는지 확인해주세요."
      );
    } else {
      return navigate("/sign-up/step3");
    }
  };
  ・・・
```
> 구현화면
<img src="https://user-images.githubusercontent.com/102039456/187174490-25d72c28-cce8-4ef9-9cd7-46b1da26a8aa.png">

<br />

## 개선사항

<p align="justify">
- 청강가능, 종료, 개강중 등의 강의 상태를 나타내는 tag를 컴포넌트로 분리하여 강의 상태에 따라 버튼 색 달리하기 <br/>
- [숫자로 보는 K-MOOC]의 숫자에 사용자의 스크롤 인식한 숫자 증가 애니메이션 추가하여 숫자 강조하기 
</p>

<br />

## 라이센스

MIT &copy; [dvlpDana](mailto:colleksql3@gmail.com)


