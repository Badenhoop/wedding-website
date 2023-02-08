<script lang='ts'>
	import LoginPage from './LoginPage.svelte'
	import MarriagePage from './MarriagePage.svelte'
  import ChurchPage from './ChurchPage.svelte'
  import PartyPage from './PartyPage.svelte'
	import { activePage } from './store'
	import type { ActivePage } from './store'
	import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

	let page: ActivePage
	activePage.subscribe(value => page = value)
</script>

{#if page === 'login'}
	<LoginPage />
{:else if page === 'marriage'}
	<MarriagePage />
{:else if page === 'church'}
	<ChurchPage />
{:else if page === 'party'}
	<PartyPage />
{/if}