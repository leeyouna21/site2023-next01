import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section
      id="portSection"
      className="port__wrap SBAggro3 section center bg-ivory"
    >
      <h3>I hope you like it, too !</h3>
      <p></p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li>
              <a href="/">📚</a>
            </li>
            <li>
              <a href="/">📚📚</a>
            </li>
            <li>
              <a href="/">📚📚📚</a>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          <div className="port">
            <figure className="port__header">
              <Image
                width={100}
                height={100}
                src="/assets/images/port/book02.png"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <span>
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/flower.png"
                  alt="이미지"
                />
              </span>
              <div>
                <h4>민경희 작가</h4>
                <p>난 너의 모든 것을 닮고 싶은 사람 中</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <Image
                width={100}
                height={100}
                src="/assets/images/port/book6.png"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <span>
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/flower.png"
                  alt="이미지"
                />
              </span>
              <div>
                <h4>민경희 작가</h4>
                <p>힘이 되는 민경희 작가님의 일러스트 글귀입니다.</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <Image
                width={100}
                height={100}
                src="/assets/images/port/book3.png"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <span>
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/flower.png"
                  alt="이미지"
                />
              </span>
              <div>
                <h4>민경희 작가</h4>
                <p>난 너의 모든 것을 닮고 싶은 사람 中</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <Image
                width={100}
                height={100}
                src="/assets/images/port/book4.png"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <span>
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/flower.png"
                  alt="이미지"
                />
              </span>
              <div>
                <h4>Author</h4>
                <p>제가 제일 좋아하는 책의 저자입니다.</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <Image
                width={100}
                height={100}
                src="/assets/images/port/book01.png"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <span>
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/flower.png"
                  alt="이미지"
                />
              </span>
              <div>
                <h4>박웅현 작가</h4>
                <p>여덟 단어 中</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <Image
                width={100}
                height={100}
                src="/assets/images/port/book5.png"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <span>
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/flower.png"
                  alt="이미지"
                />
              </span>
              <div>
                <h4>여덟단어</h4>
                <p>여덟단어의 표지입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
