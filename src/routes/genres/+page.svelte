<script>
  import GenreCard from "$lib/components/GenreCard.svelte";


 let{data} = $props()
 console.log(data)   
</script>
<div class="row">
  {#each data.genres as genre}
    <div class="col-lg-3 mb-4">
      <GenreCard genre={genre}></GenreCard>
    </div>
  {/each}
</div>