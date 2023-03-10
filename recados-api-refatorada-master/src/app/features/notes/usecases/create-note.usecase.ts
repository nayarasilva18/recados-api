import { Note } from "../../../models/note";
import { redisHelper } from "../../../shared/database/redis-helper";
import { NoteRepository } from "../repositories/note.repository";

interface RequestData {
  userId: string;
  content: string;
}

export default class CreateNote {
  async execute({ userId, content }: RequestData): Promise<any> {
    const noteRepository = new NoteRepository();

    const note = new Note(content);
    await noteRepository.saveNote(userId, note);
    await redisHelper.client.del("redixNotesCacheKey");
    return note.toJson();
  }
}
