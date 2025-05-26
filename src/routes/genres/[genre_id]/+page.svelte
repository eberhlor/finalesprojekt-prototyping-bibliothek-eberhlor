<script>
  import BookCard from "$lib/components/BookCard.svelte";
  let{data} = $props()
  console.log(data)
</script>

<div class="row">
  <div class="mb-4">
    <button class="btn btn-secondary"><a id="link" href="/genres">Back</a></button>
  </div>
  {#each data.books as book} 
      <div class="col-lg-3 mb-4">
        <BookCard book={book}></BookCard>
      </div>
  {/each}
</div>