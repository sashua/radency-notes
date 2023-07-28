import { formatDate, getDates } from "../lib/helpers.js";

export const noteTemplate = ({
  id,
  name,
  content,
  archived,
  createdAt,
  category,
}) => {
  return `
  <li class="grid items-center grid-cols-12 gap-1 p-2 rounded-md bg-slate-200 text-slate-600">
    <div class="flex justify-center col-span-1">
      <div class="inline-block w-10 h-10 p-2 text-white rounded-full bg-slate-500">
        <svg>
          <use href="${category.icon}"></use>
        </svg>
      </div>
    </div>
    <p class="col-span-2 font-semibold text-slate-600 line-clamp-1">${name}</p>
    <p class="col-span-2">${formatDate(createdAt)}</p>
    <p class="col-span-2 line-clamp-1">${category.name}</p>
    <p class="col-span-2 line-clamp-1">${content}</p>
    <p class="col-span-2 line-clamp-1">${getDates(content).join(", ")}</p>
    <div class="flex justify-center col-span-1">
      ${
        archived
          ? ""
          : `
      <button class="button" data-type="notes/edit" data-payload="${id}">
        <svg>
          <use href="./img/icons.svg#icon-edit"></use>
        </svg>
      </button>
      `
      }
      <button class="button" data-type="${
        archived ? "notes/unarchive" : "notes/archive"
      }" data-payload="${id}">
        <svg>
          <use href="./img/icons.svg#${
            archived ? "icon-unarchive" : "icon-archive"
          }"></use>
        </svg>
      </button>
      <button class="button" data-type="notes/delete" data-payload="${id}">
        <svg>
          <use href="./img/icons.svg#icon-delete"></use>
        </svg>
      </button>
    </div>
  </li>
  `;
};
