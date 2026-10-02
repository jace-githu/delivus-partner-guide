import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    // 히어로 디오라마 영상: 하이드레이션·탭 복귀 뒤에도 반드시 재생 (muted 속성이 프로퍼티로 안 잡히는 경우 대비)
    const playVideos = () =>
      document.querySelectorAll<HTMLVideoElement>('video[autoplay]').forEach((v) => {
        v.muted = true
        v.play().catch(() => {})
      })
    const pauseVideos = () =>
      document.querySelectorAll<HTMLVideoElement>('video[autoplay]').forEach((v) => v.pause())

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // 움직임 줄이기: 포스터만 보이도록 영상은 멈춘다
      const stop = () => window.setTimeout(pauseVideos, 80)
      router.onAfterRouteChange = stop
      if (document.readyState === 'complete') stop()
      else window.addEventListener('load', stop, { once: true })
      return
    }
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') playVideos()
    })

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
    const schedule = () => window.setTimeout(() => { setup(); parallax(); playVideos() }, 80)
    router.onAfterRouteChange = schedule
    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })
  }
}
