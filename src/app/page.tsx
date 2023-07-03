import Link from "next/link";

export default async function BlogPost() {
  return (
    <div>
      <p>
        try going to{" "}
        <Link href="/blog/post-001" className="underline">
          /blog/post-001
        </Link>
      </p>
    </div>
  );
}
