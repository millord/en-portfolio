import Layout from "../components/Layout";

const Post = ({ url }) => (
  <Layout title={url.query.title}>
    <p>
      Duis et odio non nunc vestibulum gravida in a urna. Suspendisse cursus
      erat eget libero maximus scelerisque. Praesent eget interdum lectus.
      Quisque commodo ultricies lacus commodo luctus. Morbi commodo turpis quis
      ligula convallis pulvinar. Nulla nec nisi diam. Proin facilisis, libero id
      tempus ornare, felis libero volutpat ex, sit amet placerat augue ante a
      diam. Duis pretium sodales felis, at tempus nisl gravida nec. Quisque
      purus ligula, bibendum eu purus non, mollis pulvinar sem.
    </p>
  </Layout>
);
export default Post;
