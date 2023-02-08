<script lang="ts">
  import { onMount } from 'svelte'
  import { gsap } from "gsap/dist/gsap"

  let offset: number = 0
  let lastTime: number | null = null

  function animateSlideshowLeft(elementId: string, speed: number) {
    setInterval(() => {
      let now = new Date().getTime()
      let dt = lastTime ? now - lastTime : 0
      lastTime = now

      let slideshow = document.getElementById(elementId)
      if (!slideshow) {
        console.error(`Cannot find #${elementId}.`)
        return
      }

      if (slideshow.children.length === 0) {
        console.error('Empty container.')
        return
      }

      let firstChild = slideshow.children[0]
      let overflow = -firstChild.getBoundingClientRect().right
      if (overflow > 0) {
        let newChildren = []
        for (let i = 1; i < slideshow.children.length; i++) {
          newChildren.push(slideshow.children[i])
        }
        newChildren.push(firstChild)
        slideshow!.replaceChildren(...newChildren)
        offset = overflow
      }

      offset += speed * dt
      slideshow!.style.marginLeft = -offset + 'px'
    }, 10)
  }

  function animateSlideshowRight(elementId: string, speed: number) {
    setInterval(() => {
      let now = new Date().getTime()
      let dt = lastTime ? now - lastTime : 0
      lastTime = now

      let slideshow = document.getElementById(elementId)
      if (!slideshow) {
        console.error(`Cannot find #${elementId}.`)
        return
      }

      if (slideshow.children.length === 0) {
        console.error('Empty container.')
        return
      }

      let lastChild = slideshow.children[slideshow.children.length - 1]
      let overflow = lastChild.getBoundingClientRect().left - window.innerWidth
      if (overflow > 0) {
        let newChildren = [lastChild]
        for (let i = 0; i < slideshow.children.length - 1; i++) {
          newChildren.push(slideshow.children[i])
        }
        slideshow!.replaceChildren(...newChildren)
        offset = overflow
      }

      offset += speed * dt
      slideshow!.style.marginRight = -offset + 'px'
    }, 10)
  }

  animateSlideshowLeft('slideshow-left', 0.1)
  animateSlideshowRight('slideshow-right', 0.1)

  onMount(() => {
    gsap.from('.fadeIn', {
      scrollTrigger: {
        trigger: '.fadeIn',
        start: 'top bottom',
      },
      opacity: 0,
      visibility: 'invisible',
      y: '5rem',
      duration: 1,
    });
  })

</script>

<section class="bg-white overflow-hidden">
  <div class="px-8 py-24 lg:py-48 flex flex-col items-center fadeIn">
    <h1 class="font-script text-7xl lg:text-9xl text-black text-center">Wir heiraten.</h1>
    <h2 class="mt-4 max-w-[32rem] lg:max-w-[48rem] font-serif text-2xl lg:text-4xl text-black opacity-30 text-center">UND IHR SEID HERZLICH ZU UNSERER HOCHZEIT EINGELADEN.</h2>
  </div>

  <div class="flex flex-row justify-start" id="slideshow-left">
    <div class="ml-8 bg-slideshow01 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
    <div class="ml-8 bg-slideshow02 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
    <div class="ml-8 bg-slideshow03 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
    <div class="ml-8 bg-slideshow04 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
    <div class="ml-8 bg-slideshow05 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
    <div class="ml-8 bg-slideshow06 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
  </div>

  <div class="h-8"></div>

  <div class="flex flex-row justify-end" id="slideshow-right">
    <div class="mr-8 bg-slideshow07 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
    <div class="mr-8 bg-slideshow08 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
    <div class="mr-8 bg-slideshow09 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
    <div class="mr-8 bg-slideshow10 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
    <div class="mr-8 bg-slideshow11 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
    <div class="mr-8 bg-slideshow12 bg-cover bg-center rounded-3xl min-w-[40vw] h-[16rem] lg:h-[32rem]" />
  </div>

  <div class="h-8"></div>
</section>