<script lang="ts">
  import { onMount } from 'svelte'
  import { gsap } from "gsap/dist/gsap"

  onMount(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'footer .picture',
        start: 'top bottom',
      }
    })

    tl.from('footer .picture', { duration: 0.5, scale: 0 })
      .from('footer h1', { duration: 0.5, opacity: 0, y: 100 })
  })
</script>

<footer class="bg-blue px-4 lg:px-8 flex flex-col items-center">
  <div class="h-24 lg:h-48"></div>

  <div class="flex flex-row items-center flex-wrap justify-center">
    <div class="picture bg-final bg-center bg-cover rounded-full w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem]"></div>
    <h1 class="max-w-[60rem] p-8 font-script text-5xl lg:text-9xl text-center text-white">Wir freuen uns auf Euch!</h1>
  </div>

  <div class="h-24 lg:h-48"></div>

  <div class="w-24 h-[1px] bg-white opacity-80"></div>
  <p class="my-4 font-serif text-sm text-center text-white opacity-80">© 2023 by Philipp Badenhoop. All Rights Reserved.</p>
</footer>