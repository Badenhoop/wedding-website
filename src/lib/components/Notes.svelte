<script lang="ts">
  import { onMount } from 'svelte'
  import { gsap } from 'gsap/dist/gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  onMount(() => {
    gsap.utils.toArray('.notes').forEach((section: any) => {
        const box = section.querySelector('.box')
        const headline = section.querySelector('.headline')
        const line1 = section.querySelector('.line-1')
        const note1 = section.querySelector('.note-1')
        const line2 = section.querySelector('.line-2')
        const note2 = section.querySelector('.note-2')
        const line3 = section.querySelector('.line-3')
        const note3 = section.querySelector('.note-3')
        const line4 = section.querySelector('.line-4')
        const note4 = section.querySelector('.note-4')
        const line5 = section.querySelector('.line-5')
        const note5 = section.querySelector('.note-5')

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: box,
            start: 'top bottom',
          },
        })

        tl.from(box, { scaleX: 0, duration: 0.5 })
          .from(headline, { scale: 0, opacity: 0, duration: 0.25 })
          .from(line1, { scaleY: 0, duration: 0.25 })
          .from(note1, { scale: 0, opacity: 0, duration: 0.25 })
          .from(line2, { scaleY: 0, duration: 0.25 })
          .from(note2, { scale: 0, opacity: 0, duration: 0.25 })
          .from(line3, { scaleY: 0, duration: 0.25 })
          .from(note3, { scale: 0, opacity: 0, duration: 0.25 })
          .from(line4, { scaleY: 0, duration: 0.25 })
          .from(note4, { scale: 0, opacity: 0, duration: 0.25 })
          .from(line5, { scaleY: 0, duration: 0.25 })
          .from(note5, { scale: 0, opacity: 0, duration: 0.25 })
    })
  })

</script>

<section class="notes px-8 py-24 lg:py-48 bg-white flex flex-col items-center">
  <div class="box px-8 py-12 lg:px-32 lg:py-24 max-w-[30rem] lg:max-w-[60rem] bg-blue rounded-2xl lg:rounded-3xl flex flex-col items-center">
    <h1 class="headline font-script text-6xl lg:text-8xl text-white text-center">Hinweise</h1>
    <div class="line-1 my-8 lg:my-12 h-12 lg:h-24 w-[1px] bg-white opacity-80"></div>
    <p class="note-1 font-serif text-xl lg:text-3xl text-white text-center">SOFERN IHR MIT <b>KINDERN</b> ANREIST, BITTEN WIR DARUM, DASS DIESE AM SAMSTAG AB 18 UHR ABGEHOLT WERDEN.</p>
    <div class="line-2 my-8 lg:my-12 h-12 lg:h-24 w-[1px] bg-white opacity-80"></div>
    <p class="note-2 font-serif text-xl lg:text-3xl text-white text-center">GESCHENKIDEEN UND EXTERNE PROGRAMMPUNKTE BITTE MIT DEN <b>TRAUZEUGEN</b> ABKLÄREN.</p>
    <div class="line-3 my-8 lg:my-12 h-12 lg:h-24 w-[1px] bg-white opacity-80"></div>
    <p class="note-3 font-serif text-xl lg:text-3xl text-white text-center">ES WIRD EIN <b>FAHRDIENST</b> ZUR VERFÜGUNG STEHEN, UM EUCH VON DER VILLA ZUR UNTERBRINGUNG ZU FAHREN. BITTE KONTAKTIERT HIERFÜR:<br><br>Jens Maier<br>Tel: +49 1525 3244306</p>
    <div class="line-4 my-8 lg:my-12 h-12 lg:h-24 w-[1px] bg-white opacity-80"></div>
    <p class="note-4 font-serif text-xl lg:text-3xl text-white text-center">UNSERE <b>KLEIDERORDNUNG</b>:<br> SOMMERLICH ELEGANT.</p>
    <div class="line-5 my-8 lg:my-12 h-12 lg:h-24 w-[1px] bg-white opacity-80"></div>
    <p class="note-5 font-serif text-xl lg:text-3xl text-white text-center">BITTE GEBT UNS BIS ZUM <b>30. APRIL</b> EINE RÜCKMELDUNG.</p>
  </div>
</section>