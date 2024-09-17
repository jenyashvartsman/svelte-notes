import type { NoteType } from "../types/note.type";
import type { NoteDto } from "./note.dto";

export interface NoteListDto extends NoteDto {
  type: NoteType.LIST;
  list: {
    id: string;
    label: string;
    checked: boolean;
  }[];
}
