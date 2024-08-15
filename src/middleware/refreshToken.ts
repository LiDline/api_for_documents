// import initUrl from 'src/generalMethods/initUrl';
// import clientAndSecret from 'src/operations/auth/service/func/createAdmin/client/clientAndSecret';

export default async function refreshToken(refreshToken: string) {
  // const { client_id, client_secret } = await clientAndSecret();

  // const url = initUrl('oauth2/token');
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: new URLSearchParams({
  //     grant_type: 'refresh_token',
  //     client_id,
  //     client_secret,
  //     refresh_token: refreshToken,
  //     scope: 'openid',
  //   }),
  // };

  // const response = await fetch(url, options);

  // if (response.status === 200) {
  //   const res = await response.json();

  //   return {
  //     newToken: res.token_type + ' ' + res.access_token,
  //     newRefreshToken: res.refresh_token,
  //   };
  // }

  return;
}
