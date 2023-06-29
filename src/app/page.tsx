import Counter from "@/components/Counter";

export default function BlogPost() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <div>
        Try to go to{" "}
        <a href={`/blog/post-001`} className="underline">
          /blog/post-001
        </a>{" "}
        and{" "}
        <a href={`/blog/stars`} className="underline">
          /blog/stars
        </a>{" "}
        and check the code in the repo.
      </div>
    </div>
  );
}
