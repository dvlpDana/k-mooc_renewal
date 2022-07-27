import { Link, useNavigate } from "react-router-dom";

import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./Lecture.module.css";

import recommendLectureData from "../datas/recommended-lecture.js";
import popularLectureData from "../datas/popular-lecture.js";
import newLectureData from "../datas/new-lecture.js";

import React, { useState } from "react";

const RecommendLecture = () => {

  const [recommendedList, setRecommendedList] = useState(recommendLectureData);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      loop
      autoplay={{ delay: 10000 }}
      slidesPerView={2}
      spaceBetween={12}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1080: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
    >
      {recommendedList.map((element, i) => {
        return (
          <SwiperSlide key={i}>
            <RecommendLetureList recommendedList={recommendedList[i]} i={i}/>
          </SwiperSlide>
        );
      })}

    </Swiper>
  );
};

const RecommendLetureList = (props) => {

  return (
    <div className={styles.lectureList}>
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

const PopularLecture = () => {
  const [popularList, setPopularList] = useState(popularLectureData);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      loop
      autoplay={{ delay: 10000 }}
      slidesPerView={2}
      spaceBetween={12}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1080: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
    >

      {popularList.map((element, i) => {
        return (
          <SwiperSlide key={i}>
            <PoplularLetureList popularList={popularList[i]} i={i} />
          </SwiperSlide>
        );
      })}

    </Swiper>
  );
};

const PoplularLetureList = (props) => {
  return (
    <div className={styles.lectureList}>
      <div className={styles.lectuerImg}>
        <img
          src={`${process.env.PUBLIC_URL}/img/${props.popularList.img}`}
          alt="lectureImg"
        />
      </div>
      <span className={styles.lectureSubject}>
        {props.popularList.subject}
      </span>
      <p className={styles.lectureTiltle}>{props.popularList.title}</p>
      <div className={styles.lectureInfo}>
        <span>{props.popularList.instructorName}</span>
        <span>{props.popularList.institutionName}</span>
      </div>
      <p className={styles.lecturePeriod}>
        기간 : {props.popularList.period}
      </p>
      <span className={`${styles.lectureState} ${styles.stateGreen}`}>
        {props.popularList.state}
      </span>
    </div>
  );
};

const NewLecture = () => {
  const [newList, setNewList] = useState(newLectureData);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      loop
      autoplay={{ delay: 10000 }}
      slidesPerView={2}
      spaceBetween={12}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1080: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
    >

      {newList.map((element, i) => {
        return (
          <SwiperSlide key={i}>
            <NewLetureList newList={newList[i]} i={i} />
          </SwiperSlide>
        );
      })}

    </Swiper>
  );
};

const NewLetureList = (props) => {
  return (
    <div className={styles.lectureList}>
      <div className={styles.lectuerImg}>
        <img
          src={`${process.env.PUBLIC_URL}/img/${props.newList.img}`}
          alt="lectureImg"
        />
      </div>
      <span className={styles.lectureSubject}>
        {props.newList.subject}
      </span>
      <p className={styles.lectureTiltle}>{props.newList.title}</p>
      <div className={styles.lectureInfo}>
        <span>{props.newList.instructorName}</span>
        <span>{props.newList.institutionName}</span>
      </div>
      <p className={styles.lecturePeriod}>
        기간 : {props.newList.period}
      </p>
      <span className={`${styles.lectureState} ${styles.stateGreen}`}>
        {props.newList.state}
      </span>
    </div>
  );
};


export { RecommendLecture, PopularLecture, NewLecture };