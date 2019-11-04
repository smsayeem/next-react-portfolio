import Layout from "../components/layout";
import PostLink from "../components/postLink";

const Blog = () => {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink slug="react-post" title="React Post" />
        <PostLink slug="redux-post" title="Redux Post" />
        <PostLink slug="firebase-post" title="Firebase Post" />
        <PostLink slug="node-post" title="Node Post" />
      </ul>
    </Layout>
  );
};
export default Blog;
