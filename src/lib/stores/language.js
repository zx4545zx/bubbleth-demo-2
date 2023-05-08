import { writable } from 'svelte/store';
import { browser } from '$app/environment';


const initialValue = browser ? window.localStorage.getItem('lang') ?? 'th' : 'th';

export const lang = writable(initialValue);

lang.subscribe((value = ('th' || 'en')) => {
  if (browser) {
    window.localStorage.setItem('lang', value);
  }
});
