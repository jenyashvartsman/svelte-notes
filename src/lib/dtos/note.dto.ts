import type { NoteType } from "../types/note.type";

export interface NoteDto {
  id: string;
  title: string;
  type: NoteType;
}
