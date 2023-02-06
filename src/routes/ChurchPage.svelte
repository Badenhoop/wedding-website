<script lang="ts">
  import Jumbotron from '$lib/components/Jumbotron.svelte'
  import Footage from '$lib/components/Footage.svelte'
  import ProgramDayTwo from '$lib/components/ProgramDayTwo.svelte'
  import Locations from '$lib/components/Locations.svelte'
  import BestMen from '$lib/components/BestMen.svelte'
  import Notes from '$lib/components/Notes.svelte'
  import Accommodations from '$lib/components/Accommodations.svelte'
  import Contact from '$lib/components/Contact.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<main class="w-screen overflow-x-hidden">
  <Jumbotron 
    multipleLocations={true}
    multipleDates={false}
    dateHeadline="01. JULI 2023" 
    startDate={new Date(2023, 6, 1)} />
  <Footage />
  <ProgramDayTwo />
  <Locations
    plural={true}
    showMarriage={false}
    showChurch={true}
    showVilla={true} />
  <BestMen />
  <Notes />
  <Accommodations />
  <Contact />
  <Footer />
</main>