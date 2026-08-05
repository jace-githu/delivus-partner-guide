// GitHub 로그인 완료 후 돌아오는 지점 — 토큰을 받아 CMS 창으로 전달합니다.
export default async function handler(req, res) {
  const code = req.query.code;
  let payload;
  try {
    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: process.env.OAUTH_GITHUB_CLIENT_ID,
        client_secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
        code
      })
    });
    const data = await r.json();
    payload = data.error
      ? 'authorization:github:error:' + JSON.stringify(data)
      : 'authorization:github:success:' +
        JSON.stringify({ token: data.access_token, provider: 'github' });
  } catch (e) {
    payload = 'authorization:github:error:' + JSON.stringify({ message: String(e) });
  }

  const html = `<!DOCTYPE html>
<html lang="ko">
<body>
<p>로그인 처리 중입니다…</p>
<script>
  (function () {
    var payload = ${JSON.stringify(payload)};
    function receiveMessage(e) {
      window.opener.postMessage(payload, e.origin);
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:github', '*');
  })();
</${'script'}>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(html);
}
