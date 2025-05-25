<script>
    let {data} = $props()
    console.log(data)

</script>
<h1>Welcome to my Page</h1>
<p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
<br>

{#if data.quotes.length > 0}
    <figure class="text-center">
    {#each data.quotes as quote}
        <blockquote class="blockquote">
          “{quote.quote}”
        </blockquote>
        <figcaption class="blockquote-footer">
        <p>— {quote.author} ({quote.category})</p>
        </figcaption>
    {/each}
    </figure>
{:else}
  <p>Keine Zitate gefunden.</p>
{/if}
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/T7RxnclkKTE" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>

<style>
    
</style>
