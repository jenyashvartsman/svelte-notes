<script lang="ts">
  import Footer from "./lib/components/Footer.svelte";
  import NotesGrid from "./lib/components/NotesGrid.svelte";
  import { notesData } from "./lib/data/notes.data";

  const notes = notesData;
</script>

<main class="responsive">
  <NotesGrid {notes} />
</main>

<Footer />

<style>
</style>
