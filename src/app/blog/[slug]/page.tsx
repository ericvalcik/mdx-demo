import dynamic from "next/dynamic";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params: { slug } }: BlogPostProps) {
  const Component = await dynamic(() => import(`@/blog/${slug}.mdx`));
  // @ts-ignore
  return <Component init={5} />;
}
