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
      { id: "4.3", label: "third item", checked: false },
      { id: "4.4", label: "forth item", checked: false },
      { id: "4.5", label: "fifth item", checked: false },
      { id: "4.6", label: "sixth item", checked: false },
      { id: "4.7", label: "seventh item", checked: false },
    ],
  },
  {
    id: "5",
    type: NoteType.IMAGE,
    title: "Fifth note",
    imageUrl:
      "https://images.template.net/wp-content/uploads/2016/05/03124151/Octopus-Funny-Cool-Wallpaper-for-Desktop.jpg",
  },
  {
    id: "6",
    type: NoteType.TEXT,
    title:
      "Long title Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Suspendisse a sollicitudin augue. Morbi bibendum dolor sed dui blandit ullamcorper. Fusce viverra urna turpis, vitae ullamcorper ligula vehicula et. Sed finibus eros lorem, eget porttitor massa aliquam in. Maecenas in quam sed erat posuere molestie interdum sit amet lacus. Maecenas blandit sem eu est fermentum, eu iaculis nisl cursus. Curabitur massa nisl, rhoncus et nunc commodo, posuere efficitur mauris. Nam finibus risus eu convallis rhoncus. Aenean dignissim, ipsum id iaculis aliquam, metus ligula venenatis velit, nec pellentesque nunc tortor sed odio. Nunc fermentum maximus eros, id faucibus diam. Morbi eget consequat nisi.",
  },
  {
    id: "7",
    type: NoteType.TEXT,
    title: "More",
    text: "Suspendisse a sollicitudin augue. Morbi bibendum dolor sed dui blandit ullamcorper. Fusce viverra urna turpis, vitae ullamcorper ligula vehicula et. Sed finibus eros lorem, eget porttitor massa aliquam in. Maecenas in quam sed erat posuere molestie interdum sit amet lacus. Maecenas blandit sem eu est fermentum, eu iaculis nisl cursus. Curabitur massa nisl, rhoncus et nunc commodo, posuere efficitur mauris. Nam finibus risus eu convallis rhoncus. Aenean dignissim, ipsum id iaculis aliquam, metus ligula venenatis velit, nec pellentesque nunc tortor sed odio. Nunc fermentum maximus eros, id faucibus diam. Morbi eget consequat nisi.",
  },
];
