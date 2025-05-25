<script>
    let {data} = $props()
</script>
<div class="col-auto mb-3">
    <button type="button" class="btn btn-secondary"><a id="link" href="/authors">Back</a></button>    
</div>
<h1>Add a Book</h1>

<form method="POST" action="?/create">
    <div class="mb-3">
      <label for="title" class="form-label">Titel</label>
      <input name="title" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="year" class="form-label">Erschneinungsjahr</label>
      <input name="year" class="form-control" type="year" />
    </div>
    <div class="mb-3">
        <label for="length" class="form-label">Anzahl Seiten</label>
        <input name="length" class="form-control" type="number" />
    </div>
    <div class="dropdown mb-3">
      <label for="genre_id" class="form-label">Genre</label>
        <select name="genre_id" class="form-select" required>
          <option selected disabled>Select a genre</option>
            {#each data.genres as genre}
              <option value={genre._id}>{genre.name}</option>
            {/each}
        </select>
    </div>
    <div class="dropdown mb-3">
      <label for="author_id" class="form-label">Author</label>
        <select name="author_id" class="form-select" required>
          <option selected disabled>Select a author</option>
            {#each data.authors as author}
              <option value={author._id}>{author.firstname}-{author.lastname}</option>
            {/each}
        </select>
    </div>
    <button type="submit" class="btn btn-success"> Add Book </button>
  </form>