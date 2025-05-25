<script>
  import BookCard from "$lib/components/BookCard.svelte";

  let{data} = $props()
  console.log(data)

</script>
<button class="btn btn-secondary"><a id="link" href="/books">Back</a></button>
<div class="row">
  {#each data.books as book} 
      <div class="col-lg-3 mb-4">
        <BookCard book={book}></BookCard>
      </div>
  {/each}
</div>