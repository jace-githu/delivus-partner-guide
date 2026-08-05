// GitHub 로그인 시작점 — CMS의 "Login with GitHub" 버튼이 이 주소를 엽니다.
export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('OAUTH_GITHUB_CLIENT_ID 환경변수가 설정되지 않았습니다.');
    return;
  }
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const redirectUri = `https://${host}/api/callback`;
  const state = Math.random().toString(36).slice(2);
  const url =
    'https://github.com/login/oauth/authorize' +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    '&scope=repo' +
    `&state=${state}`;
  res.writeHead(302, { Location: url });
  res.end();
}
