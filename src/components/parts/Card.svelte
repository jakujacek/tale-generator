<script>
    export let cardData;
</script>

<div class="card-box">
    <!-- <div class="relations">
      {#each cardData.relationIds as relation, i}
        {#if i < 3 && !!relation}
          <span class="relation-{i + 1}">{relation}</span>
        {/if}
      {/each}
    </div> -->
    <img src="/assets/images/paper.png" alt="">
    <p>{cardData.process}</p>
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

    .relations {
      position: absolute;
      display: inline-flex;
      bottom: 15px;
      left: 15px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: auto;
      line-height: 1em;
      font-size: 13px;
      background: radial-gradient(circle at 10px 10px, #20BA12, #000)
    }

    .relation-1 {
      color: #6AF07A;
      background: radial-gradient(circle at 10px 10px, #20BA12, #000);
    }

    .relation-2 {
      color: #FFB6B3;
      background: radial-gradient(circle at 10px 10px, #FA0004, #000);
    }

    .relation-3 {
      color: #85E9F4;
      background: radial-gradient(circle at 10px 10px, #144FE6, #000);
    }

    p {
      font-family: 'Vollkorn SC', serif;
      background-color: rgba(255, 255, 255, 0.5);
      font-size: 12px;
      line-height: 1.1em;
      width: 60%;
      min-height: 30%;
      margin: 0 auto 30px;
      padding: 10px;
      border-radius: 3px;
      color: #635245;
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