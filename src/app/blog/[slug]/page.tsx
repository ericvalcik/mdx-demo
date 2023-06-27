import { readdirSync } from "fs";
import { join } from "path";
import dynamic from "next/dynamic";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params: { slug } }: BlogPostProps) {
  const Component = await dynamic(() => import(`@/blog/${slug}.mdx`), {
    ssr: false,
  });
  return <Component />;
}

const getFiles = () => {
  const files = readdirSync(join(process.cwd(), "src", "blog"));
  return files.map((file) => file.replace(/\.mdx/, ""));
};

export async function generateStaticParams() {
  const files = getFiles();
  return files.map((slug) => ({ slug }));
}
