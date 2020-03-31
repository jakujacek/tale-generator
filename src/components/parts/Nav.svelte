<script>
  import { _, locale, locales } from 'svelte-i18n'

  function setLang(lang) {
    locale.set(lang);
  }
</script>

<ul class="lang">
    {#each $locales as item}
      <li on:click={() => setLang(item)} class:selected={$locale.includes(item)}>
          {item.replace('-', '_')}
      </li>
    {/each}
  </ul>

  <style>
    ul {
      display: flex;
      position: absolute;
      top: 10px;
      right: 50px;
      list-style: none;
    }

    li {
      display: block;
      cursor: pointer;
      padding: 0 20px;
      z-index: 100;
    }

    li.selected {
      color: green;
      font-weight: bold;
      }
  </style>