<script lang="ts">
  import type { NoteListDto } from "../dtos/note-list.dto";
  import NoteCardActions from "./NoteCardActions.svelte";

  export let note: NoteListDto;
</script>

<article class="card">
  <h5 class="card__title">{note.title}</h5>

  <div class="card__list">
    {#each note.list as item}
      <label class="checkbox card__listItem">
        <input
          type="checkbox"
          class="card__listItemInput"
          checked={item.checked}
        />
        <span class="card__listItemLabel">{item.label}</span>
      </label>
    {/each}
  </div>

  <div class="card__footer">
    <NoteCardActions />
  </div>
</article>

<style>
  .card__list {
    margin-top: 1.5rem;
  }

  .card__listItem {
    display: block;
  }

  .card__listItem:not(:last-child) {
    margin-bottom: 0.5rem;
  }
</style>
