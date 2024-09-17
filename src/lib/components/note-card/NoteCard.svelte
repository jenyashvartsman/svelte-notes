<script lang="ts">
  import type { NoteDto } from "../../dtos/note.dto";

  export let note: NoteDto;
</script>

<div>{note.title}</div>

<style>
  @import "./NoteCard.css";
</style>
