<script>
let { book } = $props();
</script>

<div class="card bg-dark text-white">
    <img class="rounded" src={book.poster} alt=""/>
    <div class="card-body">
      <div class="title" >
        <h5> {book.title}</h5>
      </div>
      <div>
        Jahr: {book.year}
      </div>
      <div>
        Anzahl Seiten: {book.length}
      </div>
    </div>
</div>
