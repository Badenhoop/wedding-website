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
			error = 'Falsches Passwort.'
		}
	}
</script>

<form on:submit|preventDefault={submit} class="bg-blue w-screen h-screen">
	<div class="lg:hidden h-full flex flex-col justify-center items-center">
		<div class="flex flex-col items-start">
			<h1 class="font-script text-8xl text-white">Login</h1>
			<h2 class="mt-24 font-serif text-3xl text-white">Code eingeben.</h2>
			<label class="mt-6 pl-2 font-sans font-extralight text-md tracking-[.5em] text-white" for="password">PASSWORT</label>
			<input class="mt-1 w-80 h-12 bg-blue border-solid border-[1px] focus:border-[2px] border-white rounded-lg outline-none p-2 text-white text-serif font-extralight placeholder:text-white placeholder:text-serif placeholder:font-extralight placeholder:opacity-50" 
					   id="password" 
						 placeholder="*************" 
						 type="password" 
						 bind:value={password}  />
			<button class="mt-4 bg-white font-serif text-lg text-blue w-fit px-4 py-1 rounded-lg placeholder:" on:click={submit}>Los geht's</button>
			{#if error}
				<p>{error}</p>
			{/if}
		</div>
	</div>

	<div class="hidden lg:flex h-full flex-row justify-center items-center">
		<h1 class="font-script text-9xl text-white">Login</h1>
		<div class="mx-24 w-[1px] h-96 bg-white opacity-80"></div>
		<div class="flex flex-col items-start">
			<h2 class="font-serif text-4xl text-white">Code eingeben.</h2>
			<label class="mt-12 pl-2 font-sans font-extralight text-md tracking-[.5em] text-white" for="password">PASSWORT</label>
			<input class="mt-1 w-80 h-12 bg-blue border-solid border-[1px] focus:border-[2px] border-white rounded-lg outline-none p-2 text-white text-serif font-extralight placeholder:text-white placeholder:text-serif placeholder:font-extralight placeholder:opacity-50" 
					   id="password" 
						 placeholder="*************" 
						 type="password" 
						 bind:value={password}  />
			<button class="mt-4 bg-white font-serif text-lg text-blue w-fit px-4 py-1 rounded-lg placeholder:" on:click={submit}>Los geht's</button>
			{#if error}
				<p>{error}</p>
			{/if}
		</div>
	</div>
</form>