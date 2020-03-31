import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n'

import en from './i18n/en.json'
import pl from './i18n/pl.json'

addMessages('en', en)
addMessages('pl', pl)

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
})