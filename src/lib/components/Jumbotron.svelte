<script lang="ts">
  import proposalVideo from '$lib/videos/proposal.mp4'

  export let multipleLocations: boolean
  export let multipleDates: boolean
  export let dateHeadline: string
  export let startDate: Date

  let location: string = multipleLocations ? 'LOCATIONS' : 'LOCATION'
  let saveTheDate: string = multipleDates ? 'Save The Dates' : 'Save The Date'

  let countdownText = countdown(startDate)

  function countdown(date: Date) {
    const now = new Date()
    const then = new Date(date)
    const diff = then.getTime() - now.getTime()

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
      return ""
    }

    return `Countdown: ${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`
  }

  setInterval(() => {
    countdownText = countdown(startDate)
  }, 1000)

</script>

<section class="w-screen h-screen relative">
  <video class="w-full h-full absolute object-cover" autoplay muted loop>
    <source src={proposalVideo} type="video/mp4">
    <track kind="captions">
  </video>
  <div class="w-full h-full absolute bg-black opacity-30"></div>
  <div class="w-full h-full absolute flex flex-col justify-between items-center">
    <ul class="p-4 flex flex-row justify-center flex-wrap">
      <li class="font-sans font-light text-white text-sm lg:text-lg tracking-widest px-2 lg:px-4 hover:cursor-pointer">ABLAUF</li>
      <li class="font-sans font-light text-white text-sm lg:text-lg tracking-widest px-2 lg:px-4 hover:cursor-pointer">{location}</li>
      <li class="font-sans font-light text-white text-sm lg:text-lg tracking-widest px-2 lg:px-4 hover:cursor-pointer">TRAUZEUGEN</li>
      <li class="font-sans font-light text-white text-sm lg:text-lg tracking-widest px-2 lg:px-4 hover:cursor-pointer">HINWEISE</li>
      <li class="font-sans font-light text-white text-sm lg:text-lg tracking-widest px-2 lg:px-4 hover:cursor-pointer">UNTERKÜNFTE</li>
      <li class="font-sans font-light text-white text-sm lg:text-lg tracking-widest px-2 lg:px-4 hover:cursor-pointer">RÜCKMELDUNG</li>
    </ul>
    <div class="p-4 flex flex-col items-center">
      <h3 class="font-sans font-extralight text-white text-2xl lg:text-5xl text-center tracking-widest">ISABELL UND TOBIAS</h3>
      <h1 class="m-8 lg:m-12 font-script text-white text-7xl lg:text-9xl text-center">{saveTheDate}</h1>
      <h2 class="font-serif font-bold text-white text-4xl lg:text-6xl text-center border-solid border-white border-2 p-6 lg:p-8">{dateHeadline}</h2>
    </div>
    <h4 class="p-4 font-sans font-light text-white md:text-md lg:text-lg text-center">{countdownText}</h4>
  </div>
</section>