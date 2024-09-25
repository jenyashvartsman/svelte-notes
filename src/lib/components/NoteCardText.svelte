<script lang="ts">
  import type { NoteTextDto } from "../dtos/note-text.dto";
  import NoteCardActions from "./NoteCardActions.svelte";

  export let note: NoteTextDto;
</script>

<article class="card">
  <h5 class="card__title">{note.title}</h5>
  <p class="card__text">{note.text}</p>

  <div class="card__footer">
    <NoteCardActions />
  </div>
</article>

<style>
</style>
