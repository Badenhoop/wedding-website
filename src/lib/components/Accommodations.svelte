<script lang="ts">
  import { onMount } from 'svelte'
  import { gsap } from "gsap/dist/gsap"
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  interface Accommodation {
    name: string
    phoneNumber: string
    link: string
  }

  const accommodations: Array<Accommodation>  = [
    {
      name: "Ferienwohnung Taeubchen - Katrin Taube",
      phoneNumber: "01577 1410380",
      link: "https://maps.app.goo.gl/Ch45tWvSezddtkHi8?g_st=iw"
    },
    {
      name: "Gasthof New Nomads",
      phoneNumber: "033704 66523",
      link: "https://maps.app.goo.gl/TRNLB8tFHck5wuqi7?g_st=iw"
    },
    {
      name: "Märkische Traube",
      phoneNumber: "033704 159011",
      link: "https://maps.app.goo.gl/3kky9RRyc9Jzkxwx6?g_st=iw"
    },
    {
      name: "Ferienhaus Fricke",
      phoneNumber: "033704 65273",
      link: "https://maps.app.goo.gl/9TSBrSbGZSkA2ewn6?g_st=iw"
    },
    {
      name: "Apartment Zesch am See",
      phoneNumber: "0173 8993658",
      link: "https://maps.app.goo.gl/9GQCF7MxJsBbfTTCA?g_st=iw"
    },
    {
      name: "Ferienwohnung Jans Joachimstr.11 Neuhof 15806",
      phoneNumber: "033702 61368",
      link: "https://maps.app.goo.gl/f3aVLozm8Vf7iUK37?g_st=iw"
    },
    {
      name: "Ferienwohnung - Neuhof",
      phoneNumber: "0173 2450401",
      link: "https://maps.app.goo.gl/uonQ4Bt9WyoLs6x28?g_st=iw"
    },
    {
      name: "Ferienbungalows Neuhof",
      phoneNumber: "033702 60619",
      link: "https://maps.app.goo.gl/FmuBNBiYn1MVEhH99?g_st=iw"
    },
    {
      name: "Die Sommer Butze",
      phoneNumber: "01573 6220492",
      link: "https://maps.app.goo.gl/vcuwNRVLQTydKpdC8?g_st=iw"
    },
    {
      name: "Urlaub im Mobilheim am Wünsdorfer See",
      phoneNumber: "01511 5697963",
      link: "https://maps.app.goo.gl/529Ayyg4dWsLEdhq5?g_st=iw"
    },
    {
      name: "Seehof Wünsdorf",
      phoneNumber: "032 121580604",
      link: "https://maps.app.goo.gl/CEhQr6Hx9zRi8sQF7?g_st=iw"
    },
    {
      name: "Kranichhof Kolkmann",
      phoneNumber: "0176 23289673",
      link: "https://maps.app.goo.gl/WjjMgVoQQYfDMY5j6?g_st=iw"
    },
    {
      name: "Fam. Franke",
      phoneNumber: "033703 7402",
      link: "https://maps.app.goo.gl/z8VaZrA7hJ9gN9Xp8?g_st=iw"
    },
    {
      name: "Pension Petersohn",
      phoneNumber: "033703 7502",
      link: "https://maps.app.goo.gl/yHuy8BcBByP6X93v5?g_st=iw"
    },
    {
      name: "Morada Hotel Am Mellensee",
      phoneNumber: "033703 990",
      link: "https://maps.app.goo.gl/bGNM9A1yvCWRYG5V7?g_st=iw"
    },
    {
      name: "Ferienwohnung am Mellensee - Oliver Konowalzyk",
      phoneNumber: "0170 2434291",
      link: "https://maps.app.goo.gl/5NSTNQQZQVc4Eke17?g_st=iw"
    },
    {
      name: "Ferienhaus Zossen , Weinberge 23",
      phoneNumber: "03377 301878",
      link: "https://maps.app.goo.gl/fQAnLdFwsMpwUCUYA?g_st=iw"
    },
    {
      name: "Land-gut-Hotel Weißer Schwan",
      phoneNumber: "03377 204000",
      link: "https://maps.app.goo.gl/Zu7mgPA9x3bcTRVx6?g_st=iw"
    },
    {
      name: "SeeZeit Hotel Berlin / Brandenburg",
      phoneNumber: "033769 41100411",
      link: "https://maps.app.goo.gl/ueKoXNA8tkMLLgzU6?g_st=iw"
    },
    {
      name: "Ferienhaus Gäbel Kallinchen am Motzener See",
      phoneNumber: "0176 99682324",
      link: "https://maps.app.goo.gl/W4zHqZEhd9xWHex38?g_st=iw"
    },
    {
      name: "Ferienhaus Kallinchen",
      phoneNumber: "033763 61",
      link: "https://maps.app.goo.gl/eVMUnxxqNXazqSBc9?g_st=iw"
    },
  ]

  function openInNewTab(url: string) {
    window.open(url, '_blank')
  }

  onMount(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.accomodations',
        start: 'top center',
      },
    })

    gsap.utils.toArray('.accomodations button').forEach((button: any) => {
      tl.from(button, { opacity: 0, scale: 0, duration: 0.1 }, '-=0.05')
    })
  })

</script>

<section class="accomodations bg-blue px-4 lg:px-8 py-24 lg:py-48 flex flex-col items-center">
  <h1 class="font-script text-5xl lg:text-9xl text-center text-white">Unterkünfte</h1>
  <div class="h-16 lg:h-32"></div>
  <div class="flex flex-row flex-wrap justify-center">
    {#each accommodations as accommodation}
      <button class="m-2 lg:m-3 w-48 lg:w-64 border-2 border-white rounded-md lg:rounded-lg bg-white flex flex-col justify-center items-center p-4 lg:p-8" 
              on:click={_ => openInNewTab(accommodation.link)}>
        <p class="font-serif font-bold text-lg lg:text-xl text-center text-blue">{accommodation.name}</p>
        <div class="h-1 lg:h-2"></div>
        <p class="font-serif text-md lg:text-lg text-center text-blue">{accommodation.phoneNumber}</p>
      </button>
    {/each}
  </div>
</section>