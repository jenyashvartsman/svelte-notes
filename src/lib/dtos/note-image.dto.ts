import type { NoteType } from "../types/note.type";
import type { NoteDto } from "./note.dto";

export interface NoteImageDto extends NoteDto {
  type: NoteType.IMAGE;
  imageUrl: string;
}
