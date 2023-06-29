import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const links = [
  {
    id: 1,
    title: "소개",
    url: "/intro",
  },
  {
    id: 2,
    title: "책추천",
    url: "/port",
  },

  {
    id: 4,
    title: "유튜브",
    url: "/youtube",
  },
  {
    id: 5,
    title: "영화",
    url: "/movie",
  },
  {
    id: 6,
    title: "이미지",
    url: "/unsplash",
  },
];

const Header = () => {
  return (
    <header
      id="header"
      className="header__wrap SBAggro3 bg-beige"
      role="heading"
      aria-level="1"
    >
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>
          <Link href="/">
            web <em>site</em>
          </Link>
        </h1>
        <nav className={styles.header__nav} role="navigation">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
