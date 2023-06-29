export const Stars = async () => {
  const response = await fetch(
    `https://api.github.com/repos/webscopeio/mailingui-web`,
    { next: { revalidate: 60 } }
  );
  const { stargazers_count: stars } = await response.json();

  return (
    <div className="flex">
      <div className="p-4 border border-solid border-gray-200 rounded-xl my-2">
        <p>
          MailingUI has <strong>{stars}</strong> stars!
        </p>
      </div>
    </div>
  );
};
