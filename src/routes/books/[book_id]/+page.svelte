<script>
  import BookdetailCard from "$lib/components/BookdetailCard.svelte";

    let {data} = $props()
    console.log(data)

</script>
<button class="btn btn-secondary"><a id="link" href="/books">Back</a></button>
<div class="mx-auto centered-card">
    {#each data.books as book}
    <div class=" mb-4">
      <BookdetailCard book={book}></BookdetailCard>
    </div>

    {/each}

  
</div>
