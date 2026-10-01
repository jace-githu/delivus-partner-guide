import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return
    // 접근성: 모션 최소화 설정이면 연출을 적용하지 않는다
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // JS가 살아 있을 때만 숨김 스타일을 켠다 (실패 시 본문이 사라지지 않도록)
    document.documentElement.classList.add('dg-anim')

    const observe = () => {
      const targets = document.querySelectorAll<HTMLElement>('.dg-reveal:not(.is-in)')
      if (!targets.length) return
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add('is-in')
              io.unobserve(e.target)
            }
          }
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
      )
      targets.forEach((t) => io.observe(t))
    }

    router.onAfterRouteChange = () => requestAnimationFrame(observe)
    requestAnimationFrame(observe)
  }
}
