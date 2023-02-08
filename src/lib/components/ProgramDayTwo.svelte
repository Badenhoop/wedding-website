<script lang="ts">
  import church from '$lib/images/icons/blue/church.svg'
  import wedding from '$lib/images/icons/blue/wedding.svg'
  import glasses from '$lib/images/icons/blue/glasses.svg'
  import disco from '$lib/images/icons/blue/disco.svg'
  import { onMount } from 'svelte'
  import { gsap } from "gsap/dist/gsap"

  onMount(() => {
    gsap.utils.toArray('.program-day-two').forEach((section: any) => {
      const circleMain = section.querySelector('.circle-main')
      const line1 = section.querySelector('.line-1')
      const circle1 = section.querySelector('.circle-1')
      const line2 = section.querySelector('.line-2')
      const circle2 = section.querySelector('.circle-2')
      const line3 = section.querySelector('.line-3')
      const circle3 = section.querySelector('.circle-3')
      const line4 = section.querySelector('.line-4')
      const circle4 = section.querySelector('.circle-4')

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: circleMain,
          start: 'top bottom',
        },
      })
      
      tl.from(circleMain, { scale: 0, duration: 1 })
        .from(line1, { height: 0, duration: 0.5 })
        .from(circle1, { scale: 0, duration: 0.25 })
        .from(line2, { height: 0, duration: 0.5 })
        .from(circle2, { scale: 0, duration: 0.25 })
        .from(line3, { height: 0, duration: 0.5 })
        .from(circle3, { scale: 0, duration: 0.25 })
        .from(line4, { height: 0, duration: 0.5 })
        .from(circle4, { scale: 0, duration: 0.25 })
    });
  })
</script>

<section class="program-day-two flex md:hidden flex-row justify-center bg-blue px-2 py-24"> 
  <div class="max-w-[30rem] w-full flex flex-col items-end">
    <div class="flex flex-col items-center">
      <div class="circle-main rounded-full w-[15rem] h-[15rem] bg-white flex flex-col justify-center items-center relative">
        <h1 class="font-script text-blue text-5xl text-center">Ablauf<br>01.07.23</h1>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-1 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-1 rounded-full w-[7rem] h-[7rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={church} alt="">
        <h2 class="absolute right-[8rem] w-[15rem] font-serif text-white text-lg text-right">ANKUNFT<br>KIRCHE</h2>
        <p class="absolute top-[-7rem] right-[5rem] font-script text-white text-6xl text-right opacity-30">-12:30-</p>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-2 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-2 rounded-full w-[7rem] h-[7rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={wedding} alt="">
        <h2 class="absolute right-[8rem] w-[15rem] font-serif text-white text-lg text-right">KIRCHLICHE<br>TRAUUNG</h2>
        <p class="absolute top-[-7rem] right-[5rem] font-script text-white text-6xl text-right opacity-30">-13:00-</p>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-3 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-3 rounded-full w-[7rem] h-[7rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={glasses} alt="">
        <h2 class="absolute right-[8rem] w-[15rem] font-serif text-white text-lg text-right">ÜBERFAHRT<br>ZUR VILLA</h2>
        <p class="absolute top-[-7rem] right-[5rem] font-script text-white text-6xl text-right opacity-30">-14:00-</p>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-4 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-4 rounded-full w-[7rem] h-[7rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={disco} alt="">
        <h2 class="absolute right-[8rem] w-[15rem] font-serif text-white text-lg text-right">PARTY<br>HARD</h2>
        <p class="absolute top-[-7rem] right-[5rem] font-script text-white text-6xl text-right opacity-30">-21:30-</p>
      </div>
    </div>
  </div>
</section>

<section class="program-day-two hidden md:flex xl:hidden flex-row justify-center bg-blue px-2 py-32"> 
  <div class="max-w-[50rem] w-full flex flex-col items-end">
    <div class="flex flex-col items-center">
      <div class="circle-main rounded-full w-[24rem] h-[24rem] bg-white flex flex-col justify-center items-center relative">
        <h1 class="font-script text-blue text-7xl text-center">Ablauf<br>01.07.23</h1>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-1 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-1 rounded-full w-[8rem] h-[8rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={church} alt="">
        <div class="absolute flex flex-row items-center right-[9rem]">
          <p class="font-script text-white text-6xl text-right opacity-30">-12:30-</p>
          <div class="w-[1rem]"></div>
          <h2 class="w-[15rem] font-serif text-white text-2xl text-right">ANKUNFT<br>KIRCHE</h2>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-2 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-2 rounded-full w-[8rem] h-[8rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={wedding} alt="">
        <div class="absolute flex flex-row items-center right-[9rem]">
          <p class="font-script text-white text-6xl text-right opacity-30">-13:00-</p>
          <div class="w-[1rem]"></div>
          <h2 class="w-[15rem] font-serif text-white text-2xl text-right">KIRCHLICHE<br>TRAUUNG</h2>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-3 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-3 rounded-full w-[8rem] h-[8rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={glasses} alt="">
        <div class="absolute flex flex-row items-center right-[9rem]">
          <p class="font-script text-white text-6xl text-right opacity-30">-14:00-</p>
          <div class="w-[1rem]"></div>
          <h2 class="w-[15rem] font-serif text-white text-2xl text-right">ÜBERFAHRT<br>ZUR VILLA</h2>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-4 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-4 rounded-full w-[8rem] h-[8rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={disco} alt="">
        <div class="absolute flex flex-row items-center right-[9rem]">
          <p class="font-script text-white text-6xl text-right opacity-30">-21:30-</p>
          <div class="w-[1rem]"></div>
          <h2 class="w-[15rem] font-serif text-white text-2xl text-right">PARTY<br>HARD</h2>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="program-day-two hidden xl:flex flex-row justify-center bg-blue px-2 py-48"> 
  <div class="max-w-[80rem] w-full flex flex-col items-end">
    <div class="flex flex-col items-center">
      <div class="circle-main rounded-full w-[30rem] h-[30rem] bg-white flex flex-col justify-center items-center relative">
        <h1 class="font-script text-blue text-8xl text-center">Ablauf<br>01.07.23</h1>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-1 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-1 rounded-full w-[10rem] h-[10rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={church} alt="">
        <div class="absolute flex flex-row items-center right-[12rem]">
          <p class="font-script text-white text-8xl text-right opacity-30">-12:30-</p>
          <div class="w-[15rem]"></div>
          <h2 class="w-[15rem] font-serif text-white text-4xl text-right">ANKUNFT<br>KIRCHE</h2>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-2 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-2 rounded-full w-[10rem] h-[10rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={wedding} alt="">
        <div class="absolute flex flex-row items-center right-[12rem]">
          <p class="font-script text-white text-8xl text-right opacity-30">-13:00-</p>
          <div class="w-[15rem]"></div>
          <h2 class="w-[15rem] font-serif text-white text-4xl text-right">KIRCHLICHE<br>TRAUUNG</h2>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-3 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-3 rounded-full w-[10rem] h-[10rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={glasses} alt="">
        <div class="absolute flex flex-row items-center right-[12rem]">
          <p class="font-script text-white text-8xl text-right opacity-30">-14:00-</p>
          <div class="w-[15rem]"></div>
          <h2 class="w-[15rem] font-serif text-white text-4xl text-right">ÜBERFAHRT<br>ZUR VILLA</h2>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-4 h-[10rem] w-1 bg-white"></div>
      </div>
      <div class="circle-4 rounded-full w-[10rem] h-[10rem] bg-white flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={disco} alt="">
        <div class="absolute flex flex-row items-center right-[12rem]">
          <p class="font-script text-white text-8xl text-right opacity-30">-21:30-</p>
          <div class="w-[15rem]"></div>
          <h2 class="w-[15rem] font-serif text-white text-4xl text-right">PARTY<br>HARD</h2>
        </div>
      </div>
    </div>
  </div>
</section>