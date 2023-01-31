<script lang="ts">
	import { activePage } from './store'

	let password: string = ''
	let error: string = ''

	function submit() {
		if (password === '123') {
			activePage.set('marriage')
		} else if (password === '456') {
			activePage.set('church')
		} else if (password === '789') {
			activePage.set('party')
		} else {
			error = 'Wrong password'
		}
	}
</script>

<main class="flex flex-col justify-center items-center h-screen">
	<div class="flex flex-col justify-center items-center">
		<h1 class="text-3xl font-bold font-serif">Login</h1>
		<p class="text-red-500">{error}</p>
	</div>
	<div class="flex flex-col justify-center items-center">
		<input
			class="border border-gray-500 rounded px-2 py-1 m-1"
			type="password"
			bind:value={password}
		/>
		<button
			class="border border-gray-500 rounded px-2 py-1 m-1"
			on:click={submit}
		>
			Submit
		</button>
	</div>
</main>