<script lang="ts">
  import type { NoteImageDto } from "../dtos/note-image.dto";
  import type { NoteListDto } from "../dtos/note-list.dto";
  import type { NoteTextDto } from "../dtos/note-text.dto";
  import NoteCard from "./NoteCard.svelte";
  import NoteCardEmpty from "./NoteCardEmpty.svelte";

  export let notes: (NoteTextDto | NoteImageDto | NoteListDto)[] = [];
</script>

{#if notes.length}
  <div class="grid large-space notes">
    {#each notes as note}
      <div class="s12 m6 l4 notes__item">
        <NoteCard {note} />
      </div>
    {/each}
  </div>
{:else}
  <NoteCardEmpty />
{/if}

<style></style>
