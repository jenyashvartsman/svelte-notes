import type { NoteImageDto } from "../dtos/note-image.dto";
import type { NoteListDto } from "../dtos/note-list.dto";
import type { NoteTextDto } from "../dtos/note-text.dto";
import { NoteType } from "../types/note.type";

export const notesData: (NoteTextDto | NoteImageDto | NoteListDto)[] = [
  { id: "1", type: NoteType.TEXT, title: "First note", text: "text 1" },
  {
    id: "2",
    type: NoteType.IMAGE,
    title: "Second note",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkpAMeQ7efqBOQKrfmaR28jcKnHZgK5cQ9w&s",
  },
  { id: "3", type: NoteType.TEXT, title: "Third note", text: "text 3" },
  {
    id: "4",
    type: NoteType.LIST,
    title: "Forth note",
    list: [
      { id: "4.1", label: "first item", checked: true },
      { id: "4.2", label: "second item", checked: false },
    ],
  },
];
