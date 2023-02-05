<script lang="ts">
  import calender from '$lib/images/icons/calender.svg'
  import ring from '$lib/images/icons/ring.svg'
  import fork from '$lib/images/icons/fork.svg'
  import glasses from '$lib/images/icons/glasses.svg'
</script>

<section id="program" class="flex md:hidden flex-row justify-center bg-white p-2"> 
  <div class="max-w-[30rem] w-full flex flex-col items-start">
    <div class="flex flex-col items-center">
      <div class="rounded-full w-[15rem] h-[15rem] bg-blue flex flex-col justify-center items-center relative">
        <h1 class="font-script text-white text-5xl text-center">Ablauf<br>30.06.23</h1>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[7rem] h-[7rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={calender} alt="">
        <h2 class="absolute left-[8rem] w-[15rem] font-serif text-black text-lg text-left">ANKUNFT<br>STANDESAMT<br>POTSDAM</h2>
        <p class="absolute top-[-7rem] left-[5rem] font-script text-black text-6xl text-left opacity-30">-12:30-</p>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[7rem] h-[7rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={ring} alt="">
        <h2 class="absolute left-[8rem] w-[15rem] font-serif text-black text-lg text-left">STANDESAMTLICHE<br>TRAUUNG</h2>
        <p class="absolute top-[-7rem] left-[5rem] font-script text-black text-6xl text-left opacity-30">-13:00-</p>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[7rem] h-[7rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[60%] h-[60%]" src={fork} alt="">
        <h2 class="absolute left-[8rem] w-[15rem] font-serif text-black text-lg text-left">RESTAURANT</h2>
        <p class="absolute top-[-7rem] left-[5rem] font-script text-black text-6xl text-left opacity-30">-14:00-</p>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[7rem] h-[7rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={glasses} alt="">
        <h2 class="absolute left-[8rem] w-[15rem] font-serif text-black text-lg text-left">ÜBERFAHRT<br>ZUR VILLA</h2>
        <p class="absolute top-[-7rem] left-[5rem] font-script text-black text-6xl text-left opacity-30">-16:00-</p>
      </div>
    </div>
  </div>
</section>

<section id="program" class="hidden md:flex xl:hidden flex-row justify-center bg-white p-8"> 
  <div class="max-w-[50rem] w-full flex flex-col items-start">
    <div class="flex flex-col items-center">
      <div class="rounded-full w-[24rem] h-[24rem] bg-blue flex flex-col justify-center items-center relative">
        <h1 class="font-script text-white text-7xl text-center">Ablauf<br>30.06.23</h1>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[8rem] h-[8rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={calender} alt="">
        <div class="absolute flex flex-row items-center left-[9rem]">
          <h2 class="w-[15rem] font-serif text-black text-2xl text-left">ANKUNFT<br>STANDESAMT<br>POTSDAM</h2>
          <div class="w-[1rem]"></div>
          <p class="font-script text-black text-6xl text-left opacity-30">-12:30-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[8rem] h-[8rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={ring} alt="">
        <div class="absolute flex flex-row items-center left-[9rem]">
          <h2 class="w-[15rem] font-serif text-black text-2xl text-left">STANDESAMTLICHE<br>TRAUUNG</h2>
          <div class="w-[1rem]"></div>
          <p class="font-script text-black text-6xl text-left opacity-30">-13:00-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[8rem] h-[8rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[60%] h-[60%]" src={fork} alt="">
        <div class="absolute flex flex-row items-center left-[9rem]">
          <h2 class="w-[15rem] font-serif text-black text-2xl text-left">RESTAURANT</h2>
          <div class="w-[1rem]"></div>
          <p class="font-script text-black text-6xl text-left opacity-30">-14:00-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[8rem] h-[8rem] bg-blue flex flex-col justify-center items-center relative">
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

<section id="program" class="hidden xl:flex flex-row justify-center bg-white p-8"> 
  <div class="max-w-[80rem] w-full flex flex-col items-start">
    <div class="flex flex-col items-center">
      <div class="rounded-full w-[30rem] h-[30rem] bg-blue flex flex-col justify-center items-center relative">
        <h1 class="font-script text-white text-8xl text-center">Ablauf<br>30.06.23</h1>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[10rem] h-[10rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={calender} alt="">
        <div class="absolute flex flex-row items-center left-[12rem]">
          <h2 class="w-[15rem] font-serif text-black text-4xl text-left">ANKUNFT<br>STANDESAMT<br>POTSDAM</h2>
          <div class="w-[15rem]"></div>
          <p class="font-script text-black text-8xl text-left opacity-30">-12:30-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[10rem] h-[10rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[75%] h-[75%]" src={ring} alt="">
        <div class="absolute flex flex-row items-center left-[12rem]">
          <h2 class="w-[15rem] font-serif text-black text-4xl text-left">STANDESAMTLICHE<br>TRAUUNG</h2>
          <div class="w-[15rem]"></div>
          <p class="font-script text-black text-8xl text-left opacity-30">-13:00-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[10rem] h-[10rem] bg-blue flex flex-col justify-center items-center relative">
        <img class="w-[60%] h-[60%]" src={fork} alt="">
        <div class="absolute flex flex-row items-center left-[12rem]">
          <h2 class="w-[15rem] font-serif text-black text-4xl text-left">RESTAURANT</h2>
          <div class="w-[15rem]"></div>
          <p class="font-script text-black text-8xl text-left opacity-30">-14:00-</p>
        </div>
      </div>
      <div class="h-[10rem] w-1 bg-blue"></div>
      <div class="rounded-full w-[10rem] h-[10rem] bg-blue flex flex-col justify-center items-center relative">
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