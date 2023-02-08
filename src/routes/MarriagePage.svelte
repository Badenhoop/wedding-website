<script lang="ts">
  import Jumbotron from '$lib/components/Jumbotron.svelte'
  import Footage from '$lib/components/Footage.svelte'
  import ProgramDayOne from '$lib/components/ProgramDayOne.svelte'
  import ProgramDayTwo from '$lib/components/ProgramDayTwo.svelte'
  import Locations from '$lib/components/Locations.svelte'
  import BestMen from '$lib/components/BestMen.svelte'
  import Notes from '$lib/components/Notes.svelte'
  import Accommodations from '$lib/components/Accommodations.svelte'
  import Contact from '$lib/components/Contact.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<main>
  <Jumbotron 
    multipleLocations={true}
    multipleDates={true}
    dateHeadline="30. JUNI & 01. JULI 2023"
    startDate={new Date(2023, 5, 30)} />
  <Footage />
  <div id="program">
    <ProgramDayOne />
  </div>
  <ProgramDayTwo />
  <div id="locations">
    <Locations
      plural={true}
      showMarriage={true}
      showChurch={true}
      showVilla={true} />
  </div>
  <div id="best-men">
    <BestMen />
  </div>
  <div id="notes">
    <Notes />
  </div>
  <div id="accomodations">
    <Accommodations />
  </div>
  <div id="contact">
    <Contact />
  </div>
  <Footer />
</main>