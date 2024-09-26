<script lang="ts">
  import Footer from "./lib/components/Footer.svelte";
  import NotesGrid from "./lib/components/NotesGrid.svelte";
  import { notesData } from "./lib/data/notes.data";

  const notes = notesData;
</script>

<main class="responsive app__main">
  <NotesGrid {notes} />
</main>

<Footer />

<style>
  .app__main {
    padding: 2rem 1rem;
    margin-bottom: 80px;
  }
</style>
