import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

const About = ({ user, statusCode }) => {
  console.log("user props", statusCode);
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout title="About">
      <p>I am React developer</p>
      <p>Name: {user.name}</p>
      <p>Bio: {user.bio}</p>
      <p>Repo: {user.repos_url}</p>
      <div>
        <img src={user.avatar_url} alt="sam sadot avatar" height="100px" />
      </div>
    </Layout>
  );
};
About.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/smsayeem");
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();
  return {
    user: data,
    statusCode
  };
};
export default About;
