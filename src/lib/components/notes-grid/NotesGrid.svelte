<script lang="ts">
  import type { NoteDto } from "../../dtos/note.dto";
  import NoteCard from "../note-card/NoteCard.svelte";

  export let notes: NoteDto[] = [];
</script>

<div>
  {#each notes as note}
    <NoteCard {note} />
  {/each}
</div>

<style>
  @import "./NotesGrid.css";
</style>
