<script>

  let{data} = $props()
  let selectedGender = $state()

  function formatDate(dateString) {
    const date = new Date(dateString);
    //6/24/1990=> Sun Jun 24 1990 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)
    //console.log(dateString);
    //console.log("matching: "+date);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

</script>
<h1 class="mb-4">Liste von Buchautoren</h1>



<div class="container">
  <div class="row mb-4">
  <div class="col-auto">
    <button type="button" class="btn btn-primary"><a id="link" href="/authors/create">Add New Author</a></button>    
  </div>
    <div class="col-auto">
      <select class="form-select" bind:value={selectedGender}>
        <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female"> Female</option>
      </select>
    </div>
</div>
  <div class="row">
    {#each data.authors as author}
    {#if (selectedGender==""|| selectedGender===author.gender)}
        <div class="col-lg-6 mb-4">
           <div class="card">
                <div class="card-body">
                        <h5 class="modal-title">{author.firstname} {author.lastname}</h5>
                        <p>{formatDate(author.birthdate)} <br> {author.gender} </p>
                        <p></p>
                        
                </div>
            </div>
        </div>
    {/if}
    {/each}
    </div>
    
    </div>