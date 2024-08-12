export async function getGithubUser(accessToken: string) {
  const userProfileReponse = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-cache', // NextJS에서 fetch request를 cache 하기 때문에 no-cache 설정
  });

  return await userProfileReponse.json();
}
