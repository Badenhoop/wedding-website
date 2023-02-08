<script lang="ts">
  import ring from '$lib/images/icons/blue/ring.svg'
  import church from '$lib/images/icons/blue/church.svg'
  import glasses from '$lib/images/icons/blue/glasses.svg'
  import { onMount } from 'svelte'
  import { gsap } from 'gsap/dist/gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  export let plural: boolean
  export let showMarriage: boolean
  export let showChurch: boolean
  export let showVilla: boolean

  const locationText = plural ? 'Locations' : 'Location'

  function openInNewTab(url: string) {
    window.open(url, '_blank')
  }

  onMount(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.location-headline',
        start: 'top bottom',
      },
    })

    if (showMarriage) {
      tl.from('.location-1', { duration: 0.5, x: 50, opacity: 0 })
    }
    if (showChurch) {
      tl.from('.location-2', { duration: 0.5, x: 100, opacity: 0 }, '-=0.25')
    }
    if (showVilla) {
      tl.from('.location-3', { duration: 0.5, x: 150, opacity: 0 }, '-=0.25')
    }
  })
</script>

<section class="px-4 lg:px-8 py-24 lg:py:48 flex flex-col items-center bg-white">
  <h1 class="location-headline font-script text-5xl lg:text-9xl text-center text-blue">{locationText}</h1>
  <div class="h-4 lg:h-8"></div>
  {#if showMarriage}
    <div class="h-4 lg:h-8"></div>
    <button class="location-1 w-full max-w-[35rem] lg:max-w-[55rem] rounded-2xl lg:rounded-3xl bg-blue p-4 lg:px-16 lg:py-12 flex flex-row justify-start items-center cursor-pointer"
      on:click={_ => openInNewTab('https://goo.gl/maps/kukrPxGkhxDmGb9UA')}>
      <div class="rounded-full bg-white w-20 h-20 lg:w-32 lg:h-32 flex-shrink-0 flex-grow-0 flex flex-col justify-center items-center">
        <img class="w-[75%] h-[75%]" src={ring} alt="">
      </div>
      <div class="w-4 lg:w-8"></div>
      <div class="flex flex-col items-start">
        <h2 class="font-serif text-xl lg:text-4xl text-left text-white">STANDESAMT POTSDAM</h2>
        <h3 class="font-serif text-md lg:text-xl text-left text-white opacity-90">Friedrich-Ebert-Straße 79/81 - 14469 Potsdam</h3>
      </div>
    </button>
  {/if}
  {#if showChurch}
    <div class="h-4 lg:h-8"></div>
    <button class="location-2 w-full max-w-[35rem] lg:max-w-[55rem] rounded-2xl lg:rounded-3xl bg-blue p-4 lg:px-16 lg:py-12 flex flex-row justify-start items-center cursor-pointer"
      on:click={_ => openInNewTab('https://goo.gl/maps/teQQJKbkHRe5nUC66')}>
      <div class="rounded-full bg-white w-20 h-20 lg:w-32 lg:h-32 flex-shrink-0 flex-grow-0 flex flex-col justify-center items-center">
        <img class="w-[75%] h-[75%]" src={church} alt="">
      </div>
      <div class="w-4 lg:w-8"></div>
      <div class="flex flex-col items-start">
        <h2 class="font-serif text-xl lg:text-4xl text-left text-white">KIRCHE RANGSDORF</h2>
        <h3 class="font-serif text-md lg:text-xl text-left text-white opacity-90">Kirchweg 1 - 15834 Rangsdorf</h3>
      </div>
    </button>
  {/if}
  {#if showVilla}
    <div class="h-4 lg:h-8"></div>
    <button class="location-3 w-full max-w-[35rem] lg:max-w-[55rem] rounded-2xl lg:rounded-3xl bg-blue p-4 lg:px-16 lg:py-12 flex flex-row justify-start items-center cursor-pointer"
    on:click={_ => openInNewTab('https://goo.gl/maps/5gEs6EhyHdwQqNq1A')}>
      <div class="rounded-full bg-white w-20 h-20 lg:w-32 lg:h-32 flex-shrink-0 flex-grow-0 flex flex-col justify-center items-center">
        <img class="w-[75%] h-[75%]" src={glasses} alt="">
      </div>
      <div class="w-4 lg:w-8"></div>
      <div class="flex flex-col items-start">
        <h2 class="font-serif text-xl lg:text-4xl text-left text-white">VILLA ZESCH AM SEE</h2>
        <h3 class="font-serif text-md lg:text-xl text-left text-white opacity-90">Zum Campingplatz 8 - 15806 Zossen</h3>
      </div>
    </button>
  {/if}
</section>