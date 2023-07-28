import { notes } from "./data/notes.js";
import { getRandomId } from "./lib/helpers.js";

export const initialState = {
  notes,
  editingNoteId: null,
  editorOpened: false,
  archiveOpened: false,
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    // ---- Notes ----
    case "notes/create": {
      state.notes.push({
        ...payload,
        id: getRandomId(),
        createdAt: Date.now(),
      });
      return { ...state, editorOpened: false, editingNoteId: null };
    }

    case "notes/edit": {
      const index = state.notes.findIndex(
        (note) => note.id === state.editingNoteId
      );
      state.notes[index] = { ...state.notes[index], ...payload };
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

    case "notes/delete": {
      const index = state.notes.findIndex((note) => note.id === payload);
      state.notes.splice(index, 1);
      return { ...state };
    }

    // ---- All Notes ----
    case "notes/archive-all": {
      state.notes.forEach((note) => (note.archived = true));
      return { ...state };
    }

    case "notes/unarchive-all": {
      state.notes.forEach((note) => (note.archived = false));
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

    // ---- Editor ----
    case "editor/open": {
      return { ...state, editorOpened: true, editingNoteId: payload };
    }

    case "editor/close": {
      return { ...state, editorOpened: false, editingNoteId: null };
    }

    // ---- Archive ----
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
