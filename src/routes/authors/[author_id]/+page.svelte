<script>
    import BookCard from "$lib/components/BookCard.svelte";
     let {data} = $props()
    console.log(data)
</script>
<div class="mb-4">
    <button class="btn btn-secondary"><a id="link" href="/authors">Back</a></button>
</div>
<div class="row">
    {#each data.books as book}
        <div class="col-lg-4 mb-4">
            <BookCard book={book}></BookCard>
        </div>
    {/each}
</div>

