import type { NoteType } from "../types/note.type";
import type { NoteDto } from "./note.dto";

export interface NoteTextDto extends NoteDto {
  type: NoteType.TEXT;
  text: string;
}
