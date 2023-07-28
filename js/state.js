import { notes } from "./data/notes.js";
import { getRandomId } from "./lib/helpers.js";

export const initialState = {
  notes,
  editingNoteId: null,
  editorOpened: false,
  archiveOpened: false,
};

export function reducer(state, action) {
  const { type, payload = null } = action;
  switch (type) {
    case "notes/create": {
      state.notes.push({ ...payload, id: getRandomId() });
      return { ...state, editorOpened: false, editingNoteId: null };
    }

    case "notes/edit": {
      const { id, data } = payload;
      const index = state.notes.findIndex((note) => note.id === id);
      state.notes[index] = { ...state.notes[index], ...data };
      return { ...state, editorOpened: false, editingNoteId: null };
    }

    case "notes/archive": {
      const note = state.notes.find((note) => note.id === payload);
      note.archived = true;
      return { ...state };
    }

    case "notes/unarchive": {
      const note = state.notes.find((note) => note.id === payload);
      note.archived = false;
      return { ...state };
    }

    case "notes/archive-all": {
      state.notes.forEach((note) => (note.archived = true));
      return { ...state };
    }

    case "notes/unarchive-all": {
      state.notes.forEach((note) => (note.archived = false));
      return { ...state };
    }

    case "notes/delete": {
      const index = state.notes.findIndex((note) => note.id === payload);
      state.notes.splice(index, 1);
      return { ...state };
    }

    case "notes/delete-all-active": {
      return {
        ...state,
        notes: state.notes.filter((note) => note.archived === true),
      };
    }

    case "notes/delete-all-archived": {
      return {
        ...state,
        notes: state.notes.filter((note) => note.archived === false),
      };
    }

    case "editor/open": {
      return { ...state, editorOpened: true, editingNoteId: payload };
    }

    case "editor/close": {
      return { ...state, editorOpened: false, editingNoteId: null };
    }

    case "archive/open": {
      return { ...state, archiveOpened: true };
    }

    case "archive/close": {
      return { ...state, archiveOpened: false };
    }

    default:
      return state;
  }
}
