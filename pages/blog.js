import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React" />
      <PostLink slug="next-post" title="Next.js" />
      <PostLink slug="nest-post" title="Nest.js" />
      <PostLink slug="typescript-post" title="Typescript" />
    </ul>
  </Layout>
);
export default Blog;
