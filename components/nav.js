import Link from "next/link";

const Nav = () => {
  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <style jsx>{`
        header {
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 1em;
          font-size: 1.2rem;
          background-color: indigo;
        }
        header a {
          color: #fff;
          text-decoration: none;
        }
        header a:hover {
          font-weight: bold;
          color: loghtgrey;
        }
      `}</style>
    </header>
  );
};
export default Nav;
