import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: '딜리래빗 화주사 가이드',
  description: '딜리버스 딜리래빗 이용 화주사를 위한 공식 운영 가이드',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '시작하기', link: '/start/about' },
      { text: '운영정책', link: '/policy/overview' },
      { text: 'FAQ', link: '/cs/faq' },
      { text: '공지·개정이력', link: '/notice/' }
    ],

    sidebar: {
      '/start/': [
        {
          text: '시작하기',
          items: [
            { text: '딜리래빗 서비스 소개', link: '/start/about' },
            { text: '배송 프로세스 한눈에', link: '/start/process' },
            { text: '계약부터 첫 출고까지', link: '/start/onboarding' },
            { text: '시스템 연동 안내', link: '/start/integration' }
          ]
        }
      ],
      '/policy/': [
        {
          text: '운영정책',
          items: [
            { text: '총칙 · 문서 안내', link: '/policy/overview' },
            { text: '입고 · 인수', link: '/policy/inbound' },
            { text: '주문 마감 · 출고', link: '/policy/cutoff' },
            { text: '배송 기준', link: '/policy/delivery' },
            { text: '미배송 판정 · 처리', link: '/policy/undelivered' },
            { text: '반품 · 회수', link: '/policy/returns' },
            { text: '클레임 · 배상', link: '/policy/claims' },
            { text: '증빙 · 기록 · 보존', link: '/policy/security' }
          ]
        }
      ],
      '/cs/': [
        {
          text: '문의 · FAQ',
          items: [
            { text: '문의 채널 안내', link: '/cs/contact' },
            { text: '자주 묻는 질문', link: '/cs/faq' }
          ]
        }
      ],
      '/notice/': [
        {
          text: '공지 · 개정이력',
          items: [
            { text: '공지사항', link: '/notice/' },
            { text: '정책 개정 이력', link: '/notice/changelog' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '검색', buttonAriaLabel: '가이드 검색' },
          modal: {
            noResultsText: '검색 결과가 없습니다',
            resetButtonTitle: '검색 초기화',
            footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' }
          }
        }
      }
    },

    outline: { label: '이 페이지에서', level: [2, 3] },
    lastUpdatedText: '마지막 업데이트',
    docFooter: { prev: '이전', next: '다음' },
    returnToTopLabel: '맨 위로',
    darkModeSwitchLabel: '다크 모드',
    sidebarMenuLabel: '메뉴',

    footer: {
      message: '본 가이드는 딜리버스 운영정책의 공식 안내 문서입니다. 세부 기준은 계약서를 따릅니다.',
      copyright: '© Delivus Inc. All rights reserved.'
    }
  }
})
