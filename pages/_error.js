import Layout from "../components/layout";

const Error = ({ statusCode }) => (
  <Layout title="Error!!!">
    {statusCode
      ? `Could not load your data: status code ${statusCode}`
      : "Couldn't get that page, sorry"}
  </Layout>
);

export default Error;
