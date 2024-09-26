<script lang="ts">
  import type { NoteImageDto } from "../dtos/note-image.dto";
  import type { NoteListDto } from "../dtos/note-list.dto";
  import type { NoteTextDto } from "../dtos/note-text.dto";
  import { NoteType } from "../types/note.type";

  export let note: NoteTextDto | NoteImageDto | NoteListDto;
</script>

<article class="card">
  <!-- header -->
  <div class="card__header">
    <button class="transparent circle">
      <i>edit</i>
    </button>

    <button class="transparent circle tertiary-text">
      <i>delete</i>
    </button>
  </div>

  <h6 class="card__title">{note.title}</h6>

  <!-- content -->
  <div class="card__content">
    {#if note.type === NoteType.TEXT}
      <p class="card__text">{note.text}</p>
    {:else if note.type === NoteType.IMAGE}
      <img
        class="small responsive card__img"
        src={note.imageUrl}
        alt={note.title}
      />
    {:else if note.type === NoteType.LIST}
      <div class="card__checkboxes">
        {#each note.list as item}
          <label class="checkbox">
            <input type="checkbox" checked={item.checked} />
            <span>{item.label}</span>
          </label>
        {/each}
      </div>
    {:else}
      Error
    {/if}
  </div>

  <!-- footer -->
  <div class="card__footer">
    {new Date().toLocaleString()}
  </div>
</article>

<style>
  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .card > * {
    padding: 0 0.5rem;
  }

  .card__header {
    display: flex;
    justify-content: flex-end;
    gap: 0.25rem;
  }

  .card__header button {
    margin: 0;
  }

  .card__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card__content {
    height: 200px;
    overflow: auto;
    margin-top: 0.5rem;
    padding: 0.5rem 0.5rem;
  }

  .card__text {
    margin-top: 0;
  }

  .card__img {
    object-fit: cover;
    height: 175px;
  }

  .card__checkboxes {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card__footer {
    text-align: right;
    padding: 0 0.5rem;
    margin-top: 0.5rem;
  }
</style>
