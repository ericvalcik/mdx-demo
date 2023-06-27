import Counter from "@/components/Counter";
import {readdirSync} from "fs";
import {join} from "path";

const getFiles = () => {
  const files = readdirSync(join(process.cwd(), "src", "blog"));
  return files.map((file) => file.replace(/\.mdx/, ""));
}

export default function BlogPost() {
  const files = getFiles();
  return <div className="flex flex-col">{files.map((slug, key) => (
    <div key={key}>{slug}</div>
  ))}
  <Counter />
  </div>;
}