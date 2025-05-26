<script>
    let selectedGender = $state()
</script>
<div class="col-auto mb-3">
  <button type="button" class="btn btn-secondary"><a id="link" href="/authors">Back</a></button>
</div>  
<h1>Add a Author</h1>
<br>


<form method="POST" action="?/create">
    <div class="mb-3">
      <label for="firstname" class="form-label">Firstname</label>
      <input name="firstname" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="lastname" class="form-label">Lastname</label>
      <input name="lastname" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="birthdate" class="form-label">Geburtsdatum</label>
      <input name="birthdate" class="form-control" type="date" />
    </div>
    <div class="dropdown mb-3">
      <label for="gender" class="form-label">Gender</label>
        <select name="gender" class="form-select" required bind:value={selectedGender}>
            <option selected disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    </div>
    <div class="mb-3"> 
      <button type="submit" class="btn btn-success"> Add Author </button>
    </div>
    <br>
    
    <br>
  </form>