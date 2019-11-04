import Nav from "./nav";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <div className="root">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Nav />
      </header>
      <h1>{title}</h1>
      {children}
      <footer>&copy; Sam Sadot | {new Date().getFullYear()}</footer>

      <style jsx>{`
        .root {
          display: flex;
          justify-content: center;
          align-itmes: center;
          flex-direction: column;
        }
        footer {
          padding: 1em;
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: 0;
          font-size: 110%;
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
};
export default Layout;
