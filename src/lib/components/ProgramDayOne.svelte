<script lang="ts">
  import calender from '$lib/images/icons/white/calender.svg'
  import ring from '$lib/images/icons/white/ring.svg'
  import fork from '$lib/images/icons/white/fork.svg'
  import glasses from '$lib/images/icons/white/glasses.svg'
  import { onMount } from 'svelte'
  import { gsap } from "gsap/dist/gsap"

  onMount(() => {
    gsap.utils.toArray('.program-day-one').forEach((section: any) => {
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

<section class="program-day-one flex md:hidden flex-row justify-center bg-white px-2 py-24"> 
  <div class="max-w-[30rem] w-full flex flex-col items-start">
    <div class="flex flex-col items-center">
      <div class="circle-main rounded-full w-[15rem] h-[15rem] bg-blue flex flex-col justify-center items-center relative">
        <h1 class="font-script text-white text-5xl text-center">Ablauf<br>30.06.23</h1>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-1 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-1 rounded-full w-[7rem] h-[7rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={calender} alt="">
        <h2 class="absolute left-[8rem] w-[15rem] font-serif text-black text-lg text-left">ANKUNFT<br>STANDESAMT<br>POTSDAM</h2>
        <p class="absolute top-[-7rem] left-[5rem] font-script text-black text-6xl text-left opacity-30">-12:30-</p>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-2 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-2 rounded-full w-[7rem] h-[7rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={ring} alt="">
        <h2 class="absolute left-[8rem] w-[15rem] font-serif text-black text-lg text-left">STANDES-<br>AMTLICHE<br>TRAUUNG</h2>
        <p class="absolute top-[-7rem] left-[5rem] font-script text-black text-6xl text-left opacity-30">-13:00-</p>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-3 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-3 rounded-full w-[7rem] h-[7rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[60%] h-[60%]" src={fork} alt="">
        <h2 class="absolute left-[8rem] w-[15rem] font-serif text-black text-lg text-left">RESTAURANT</h2>
        <p class="absolute top-[-7rem] left-[5rem] font-script text-black text-6xl text-left opacity-30">-14:00-</p>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-4 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-4 rounded-full w-[7rem] h-[7rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={glasses} alt="">
        <h2 class="absolute left-[8rem] w-[15rem] font-serif text-black text-lg text-left">ÜBERFAHRT<br>ZUR VILLA</h2>
        <p class="absolute top-[-7rem] left-[5rem] font-script text-black text-6xl text-left opacity-30">-16:00-</p>
      </div>
    </div>
  </div>
</section>

<section class="program-day-one hidden md:flex xl:hidden flex-row justify-center bg-white px-2 py-32"> 
  <div class="max-w-[50rem] w-full flex flex-col items-start">
    <div class="flex flex-col items-center">
      <div class="circle-main rounded-full w-[24rem] h-[24rem] bg-blue flex flex-col justify-center items-center relative">
        <h1 class="font-script text-white text-7xl text-center">Ablauf<br>30.06.23</h1>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-1 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-1 rounded-full w-[8rem] h-[8rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={calender} alt="">
        <div class="absolute flex flex-row items-center left-[9rem]">
          <h2 class="w-[15rem] font-serif text-black text-2xl text-left">ANKUNFT<br>STANDESAMT<br>POTSDAM</h2>
          <div class="w-[1rem]"></div>
          <p class="font-script text-black text-6xl text-left opacity-30">-12:30-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-2 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-2 rounded-full w-[8rem] h-[8rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={ring} alt="">
        <div class="absolute flex flex-row items-center left-[9rem]">
          <h2 class="w-[15rem] font-serif text-black text-2xl text-left">STANDESAMTLICHE<br>TRAUUNG</h2>
          <div class="w-[1rem]"></div>
          <p class="font-script text-black text-6xl text-left opacity-30">-13:00-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-3 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-3 rounded-full w-[8rem] h-[8rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[60%] h-[60%]" src={fork} alt="">
        <div class="absolute flex flex-row items-center left-[9rem]">
          <h2 class="w-[15rem] font-serif text-black text-2xl text-left">RESTAURANT</h2>
          <div class="w-[1rem]"></div>
          <p class="font-script text-black text-6xl text-left opacity-30">-14:00-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-4 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-4 rounded-full w-[8rem] h-[8rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={glasses} alt="">
        <div class="absolute flex flex-row items-center left-[9rem]">
          <h2 class="w-[15rem] font-serif text-black text-2xl text-left">ÜBERFAHRT<br>ZUR VILLA</h2>
          <div class="w-[1rem]"></div>
          <p class="font-script text-black text-6xl text-left opacity-30">-16:00-</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="program-day-one hidden xl:flex flex-row justify-center bg-white px-2 py-48"> 
  <div class="max-w-[80rem] w-full flex flex-col items-start">
    <div class="flex flex-col items-center">
      <div class="circle-main rounded-full w-[30rem] h-[30rem] bg-blue flex flex-col justify-center items-center relative">
        <h1 class="font-script text-white text-8xl text-center">Ablauf<br>30.06.23</h1>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-1 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-1 rounded-full w-[10rem] h-[10rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={calender} alt="">
        <div class="absolute flex flex-row items-center left-[12rem]">
          <h2 class="w-[15rem] font-serif text-black text-4xl text-left">ANKUNFT<br>STANDESAMT<br>POTSDAM</h2>
          <div class="w-[15rem]"></div>
          <p class="font-script text-black text-8xl text-left opacity-30">-12:30-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-2 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-2 rounded-full w-[10rem] h-[10rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={ring} alt="">
        <div class="absolute flex flex-row items-center left-[12rem]">
          <h2 class="w-[15rem] font-serif text-black text-4xl text-left">STANDESAMTLICHE<br>TRAUUNG</h2>
          <div class="w-[15rem]"></div>
          <p class="font-script text-black text-8xl text-left opacity-30">-13:00-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-3 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-3 rounded-full w-[10rem] h-[10rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[60%] h-[60%]" src={fork} alt="">
        <div class="absolute flex flex-row items-center left-[12rem]">
          <h2 class="w-[15rem] font-serif text-black text-4xl text-left">RESTAURANT</h2>
          <div class="w-[15rem]"></div>
          <p class="font-script text-black text-8xl text-left opacity-30">-14:00-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 relative">
        <div class="line-4 h-[10rem] w-1 bg-blue"></div>
      </div>
      <div class="circle-4 rounded-full w-[10rem] h-[10rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={glasses} alt="">
        <div class="absolute flex flex-row items-center left-[12rem]">
          <h2 class="w-[15rem] font-serif text-black text-4xl text-left">ÜBERFAHRT<br>ZUR VILLA</h2>
          <div class="w-[15rem]"></div>
          <p class="font-script text-black text-8xl text-left opacity-30">-16:00-</p>
        </div>
      </div>
    </div>
  </div>
</section>