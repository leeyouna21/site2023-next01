import React from "react";
import Image from "next/image";
const Unsplash = () => {
  return (
    <section
      id="unsplashSection"
      className="unsplash__wrap SBAggro3 section bg-white"
    >
      <div className="unsplash__inner container">
        <div className="unsplash__text ">
          <h3>잠시 쉬는시간 !</h3>
          <p>책을 읽느라 피로해진 눈 , 탁 트인 풍경 보고가세요 : &gt;</p>
          <a href="/" className="button-1">
            자세히보기
          </a>
        </div>
        <div className="unsplah__item">
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/unsplash/img01.png"
              alt="이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/unsplash/img02.png"
              alt="이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/unsplash/img03.png"
              alt="이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={100}
              src="/assets/images/unsplash/img04.png"
              alt="이미지"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
