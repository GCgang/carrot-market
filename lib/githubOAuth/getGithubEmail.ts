export async function getGithubEmail(accessToken: string) {
  const userEmailsResponse = await fetch('https://api.github.com/emails', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const emails = await userEmailsResponse.json();
  return emails[0];
}
