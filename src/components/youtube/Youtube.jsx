import React from "react";
import Image from "next/image";

const Youtube = () => {
  return (
    <section
      id="youtubeSection"
      className="youtube__wrap SBAggro3  section  bg-white02"
    >
      <div className="youtube__inner container">
        <div className="youtube__text ">
          <h3>책 읽을 때 듣기 좋은 노래</h3>
          <p>책을 읽을 때 곁들이면 좋은 노래를 추천해드릴게요 !</p>
          <a href="/" className="button-3">
            자세히보기
          </a>
        </div>
        <div className="youtube__item">
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/youtube/yu01.png"
              alt="이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/youtube/yu02.png"
              alt="이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/youtube/yu03.png"
              alt="이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/youtube/yu04.png"
              alt="이미지"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
