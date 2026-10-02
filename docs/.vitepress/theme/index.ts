import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // JS가 살아 있을 때만 숨김 스타일을 켠다 (실패 시 본문이 사라지지 않도록)
    document.documentElement.classList.add('dg-anim')

    const revealAll = () =>
      document
        .querySelectorAll<HTMLElement>('.dg-reveal:not(.is-in)')
        .forEach((t) => t.classList.add('is-in'))

    const setup = () => {
      // 어떤 이유로든 관찰이 걸리지 않아도 이 시점엔 모두 보이게 한다
      window.setTimeout(revealAll, 1200)

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
        { rootMargin: '0px', threshold: 0 }
      )
      targets.forEach((t) => io.observe(t))
    }

    // 히어로 패럴랙스: 스크롤에 따라 배경만 천천히 밀어준다
    const parallax = () => {
      const hero = document.querySelector<HTMLElement>('.dg-hero-photo')
      if (!hero) return
      let ticking = false
      const update = () => {
        const y = Math.min(window.scrollY, 700)
        hero.style.setProperty('--dg-parallax', (y * 0.16).toFixed(1) + 'px')
        ticking = false
      }
      const onScroll = () => {
        if (!ticking) { ticking = true; requestAnimationFrame(update) }
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      update()
    }

    // 렌더링이 끝난 뒤에 실행해야 대상이 잡힌다
    const schedule = () => window.setTimeout(() => { setup(); parallax() }, 80)
    router.onAfterRouteChange = schedule
    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })
  }
}
