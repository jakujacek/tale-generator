<script>
    import { _ } from 'svelte-i18n'
    export let cardData;
</script>

<div class="card-box">
    <img src="/assets/images/paper.png" alt="">
    <p>{$_(cardData.process)}</p>
</div>


<style>
    .card-box {
        position: relative;
        display: flex;
        align-items: flex-end;
        width: 200px;
        height: 300px;
        border-radius: 5px;
        padding: 5px;
        margin: 15px;
    }

    p {
      font-family: 'Vollkorn SC', serif;
      background-color: rgba(255, 255, 255, 0.5);
      font-size: 13px;
      line-height: 1.1em;
      width: 60%;
      min-height: 30%;
      margin: 0 auto 30px;
      padding: 10px;
      border-radius: 3px;
      color: #635245;
      word-break: break-word;
      box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.7);
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
</style>