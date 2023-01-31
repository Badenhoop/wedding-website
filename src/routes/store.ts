import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export type ActivePage = 'login' | 'marriage' | 'church' | 'party'
export const activePage: Writable<ActivePage> = writable('login')