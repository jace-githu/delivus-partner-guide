# 딜리래빗 화주사 가이드

딜리버스 화주사 대상 공개 운영 가이드 (VitePress + Decap CMS + Vercel).

- 화주사용 사이트: `https://<배포주소>/`
- 실무자용 관리자 페이지: `https://<배포주소>/admin/`

## 배포 전 수정할 곳 (2곳)

`docs/public/admin/config.yml`
1. `repo:` → 본인 `GitHub아이디/저장소이름`
2. `base_url:` → 배포 후 발급된 실제 Vercel 주소

## Vercel 환경변수 (2개)

GitHub OAuth App 발급 후 Vercel 프로젝트 설정에 등록:
- `OAUTH_GITHUB_CLIENT_ID`
- `OAUTH_GITHUB_CLIENT_SECRET`

(OAuth App의 Authorization callback URL은 `https://<배포주소>/api/callback`)

## 로컬 실행

```bash
npm install
npm run dev
```

## 운영 규칙

- 정책 개정 시 반드시 "공지 · 개정이력 > 정책 개정 이력" 문서에 기록
- 개별 화주사 단가 · 계약 조건은 게시 금지 (공통 정책만 공개)
- 문서 제목(frontmatter title)은 관리자 목록 표시용 — 본문 첫 줄 제목과 함께 수정
