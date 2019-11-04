import Layout from "../components/layout";
import { withRouter } from "next/router";

const Post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quisque egestas diam
        in arcu cursus euismod quis viverra. Duis at tellus at urna. Imperdiet
        nulla malesuada pellentesque elit. Cras tincidunt lobortis feugiat
        vivamus at augue eget arcu dictum. Ullamcorper eget nulla facilisi etiam
        dignissim. Platea dictumst vestibulum rhoncus est pellentesque. Mauris
        nunc congue nisi vitae suscipit. Nec feugiat nisl pretium fusce id. Nunc
        sed blandit libero volutpat sed cras ornare arcu. Suspendisse faucibus
        interdum posuere lorem.
      </p>
      <p>
        Consectetur purus ut faucibus pulvinar elementum. Quis vel eros donec ac
        odio. Neque laoreet suspendisse interdum consectetur libero id faucibus.
        In cursus turpis massa tincidunt dui ut ornare lectus. Purus non enim
        praesent elementum. Amet cursus sit amet dictum sit amet. Mi tempus
        imperdiet nulla malesuada pellentesque. Egestas sed sed risus pretium
        quam vulputate dignissim suspendisse in. Tellus at urna condimentum
        mattis. Elit sed vulputate mi sit amet mauris commodo quis. Semper quis
        lectus nulla at. A erat nam at lectus urna duis convallis convallis
        tellus. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
        proin libero. At augue eget arcu dictum varius duis at consectetur. Amet
        mattis vulputate enim nulla aliquet porttitor lacus luctus. Et netus et
        malesuada fames ac turpis egestas.
      </p>
    </Layout>
  );
};
export default withRouter(Post);
