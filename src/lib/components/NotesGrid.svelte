<script lang="ts">
  import type { NoteImageDto } from "../dtos/note-image.dto";
  import type { NoteListDto } from "../dtos/note-list.dto";
  import type { NoteTextDto } from "../dtos/note-text.dto";
  import { NoteType } from "../types/note.type";
  import NoteCardContentImage from "./NoteCardImage.svelte";
  import NoteCardList from "./NoteCardList.svelte";
  import NoteCardContentText from "./NoteCardText.svelte";

  export let notes: (NoteTextDto | NoteListDto | NoteImageDto)[] = [];
</script>

<div class="grid notes">
  {#each notes as note}
    <div class="s12 m6 l3 notes__item">
      {#if note.type === NoteType.LIST}
        <NoteCardList {note} />
      {:else if note.type === NoteType.IMAGE}
        <NoteCardContentImage {note} />
      {:else}
        <NoteCardContentText {note} />
      {/if}
    </div>
  {/each}
</div>

<style></style>
