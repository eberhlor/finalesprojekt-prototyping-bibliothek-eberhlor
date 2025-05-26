<script>
import { BookText, SquareUserRound } from 'lucide-svelte';
let { book } = $props();
console.log(book)
</script>

<div class="card bg-dark text-white">
    <img class="rounded" src={book.poster} alt=""/>
            <div class="card-body">
                <div class="title" >
                    <h5> {book.title}</h5>
                </div>
                <div>
                    <BookText /> Jahr: {book.year}
                </div>
                <div>
                    <BookText /> Anzahl Seiten: {book.length}
                </div>
                <div>
                    <BookText /> Genre: {book.book_genre}
                </div>
                <div>
                    <SquareUserRound /> Author: {book.book_author_firstname} {book.book_author_lastname}
                </div>
            </div>
</div>