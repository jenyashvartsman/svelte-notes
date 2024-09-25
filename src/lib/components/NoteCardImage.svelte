<script lang="ts">
  import type { NoteImageDto } from "../dtos/note-image.dto";
  import NoteCardActions from "./NoteCardActions.svelte";

  export let note: NoteImageDto;
</script>

<article class="card">
  <h5 class="card__title">{note.title}</h5>
  <img
    class="responsive small card__img"
    src={note.imageUrl}
    alt={note.title}
  />

  <div class="card__footer">
    <NoteCardActions />
  </div>
</article>

<style>
  .card__img {
    margin-top: 1.5rem;
  }
</style>
