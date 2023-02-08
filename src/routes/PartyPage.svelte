<script lang="ts">
  import Jumbotron from '$lib/components/Jumbotron.svelte'
  import Footage from '$lib/components/Footage.svelte'
  import ProgramParty from '$lib/components/ProgramParty.svelte'
  import Locations from '$lib/components/Locations.svelte'
  import BestMen from '$lib/components/BestMen.svelte'
  import Notes from '$lib/components/Notes.svelte'
  import Accommodations from '$lib/components/Accommodations.svelte'
  import Contact from '$lib/components/Contact.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<main>
  <Jumbotron 
    multipleLocations={false}
    multipleDates={false}
    dateHeadline="01. JULI 2023"
    startDate={new Date(2023, 6, 1)} />
  <Footage />
  <div id="program">
    <ProgramParty />
  </div>
  <div id="locations">
    <Locations
      plural={false}
      showMarriage={false}
      showChurch={false}
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