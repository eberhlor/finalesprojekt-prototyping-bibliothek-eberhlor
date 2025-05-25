<script>
  import BookCard from "$lib/components/BookCard.svelte";

  let{data} = $props()
</script>

<button type="button" class="btn btn-primary"><a id="link" href="/books/create">Add New Book</a></button>
<p></p>

<div class="row">
  {#each data.books as book}
    <div class="col-lg-4 mb-4">
      <a href="/books/{book._id}" id="link">
      <BookCard book={book}></BookCard>
      </a>
    </div>
  {/each}
</div>