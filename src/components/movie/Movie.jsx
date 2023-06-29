import React from "react";
import Image from "next/image";

const Movie = () => {
  return (
    <section
      id="moviesSection"
      className="movies__wrap SBAggro3 section bg-white"
    >
      <div className="movie__inner container">
        <div className="movie__text ">
          <h3>책을 기반으로 만든 영화</h3>
          <p>YUNA선정 ! 책을 기반으로 만든 재밌는 영화 추천 list입니다.</p>
          <a href="/" className="button-2">
            자세히보기
          </a>
        </div>

        <div className="movie__item">
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/movie/movie01.png"
              alt="이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/movie/movie02.png"
              alt="이미지"
            />{" "}
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/movie/movie03.png"
              alt="이미지"
            />{" "}
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/movie/movie04.png"
              alt="이미지"
            />{" "}
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/movie/movie05.png"
              alt="이미지"
            />{" "}
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/movie/movie06.png"
              alt="이미지"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
