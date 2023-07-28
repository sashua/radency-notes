export const categoryTemplate = ({ name, icon, active, archived }) => {
  return `
  <li class="grid items-center grid-cols-12 gap-1 p-2 rounded-md bg-slate-200 text-slate-600">
    <div class="flex justify-center col-span-1">
      <div class="inline-block w-10 h-10 p-2 text-white rounded-full bg-slate-500">
        <svg>
          <use href="${icon}"></use>
        </svg>
      </div>
    </div>
    <p class="col-span-7 font-semibold text-slate-600 line-clamp-1">${name}</p>
    <p class="col-span-2">${active}</p>
    <p class="col-span-2">${archived}</p>
  </li>
  `;
};
