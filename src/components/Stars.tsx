export const Stars = async () => {
  const response = await fetch(
    `https://api.github.com/repos/webscopeio/mailingui-web`,
    { next: { revalidate: 60 } }
  );
  const { stargazers_count: stars } = await response.json();

  return (
    <p>
      MailingUI has <strong>{stars}</strong> stars!
    </p>
  );
};
