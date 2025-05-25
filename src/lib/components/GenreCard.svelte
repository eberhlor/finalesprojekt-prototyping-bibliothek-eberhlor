<script>
let { genre } = $props();
</script>

  <div class="card bg-dark text-white">
    <img class="rounded" src={genre.poster} alt="" />
    <div class="card-body">
        <div class="card-img-overlay">
            <h5 class="card-title">{genre.name}</h5>
            <button type="button" class="btn btn-primary"> <a id="link" href="/genres/{genre._id}"> Books</a></button>
        </div>
    </div>
  </div>