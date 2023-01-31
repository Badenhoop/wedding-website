<script lang='ts'>
	import LoginPage from './LoginPage.svelte'
	import MarriagePage from './MarriagePage.svelte'
  import ChurchPage from './ChurchPage.svelte'
  import PartyPage from './PartyPage.svelte'
	import { activePage } from './store'
	import type { ActivePage } from './store'

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