import dynamic from "next/dynamic";

export default async function BlogPost() {
  const Component = await dynamic(() => import(`@/blog/post-001.mdx`), {
    ssr: false,
  });
  return <Component />;
}

export async function generateStaticParams() {
  return ["post-001"];
}
