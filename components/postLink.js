import Link from "next/link";

const PostLink = ({ title, slug }) => {
  return (
    <li>
      <Link href={`/post?title=${title}`} as={`/${slug}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};
export default PostLink;
