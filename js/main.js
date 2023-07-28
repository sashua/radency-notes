import { ArchiveComponent } from "./components/archive.js";
import { CategoriesComponent } from "./components/categories.js";
import { EditorComponent } from "./components/editor.js";
import { NotesComponent } from "./components/notes.js";
import { Store } from "./lib/store.js";
import { initialState, reducer } from "./state.js";

const store = new Store({ reducer, initialState });
new NotesComponent({ rootSelector: "#notes", store });
new CategoriesComponent({ rootSelector: "#categories", store });
new ArchiveComponent({ rootSelector: "#archive", store });
new EditorComponent({ rootSelector: "#editor", store });
