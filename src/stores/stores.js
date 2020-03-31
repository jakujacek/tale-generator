import { writable } from 'svelte/store';
import { cards } from '../mocks/cards.js';

const localStorageUsers = function() {
    if (!!localStorage.getItem('users'))  {
        return localStorage.getItem('users').split(';').map(user => {
            return JSON.parse(user);
        })
    } else {
        return [];
    }
}

export const users = writable(localStorageUsers());

export const cardsStore = writable(cards);

export const storyState = writable(0);

function appState() {
	const { subscribe, set } = writable(0);

	return {
        subscribe,
        set,
		loginView: () => set(0),
        cardsView: () => set(1),
        cardsGenerate: () => set(2)
	};
}

export const state = appState();