import React from "react";

function Bookmark({ title, description, url, icon: Icon }) {
  return (
    <div className="hover:animate-pulse border border-white w-full rounded-sm p-3 bg-slate-500 bg-opacity-50 hover:bg-slate-600 hover:bg-opacity-50">
      <a
        href={url}
        target="_blank"
        className="flex justify-between items-center text-white hover:no-underline hover:text-slate-200"
      >
        <div className="gap-2">
          <p className="font-bold">{title}</p>
          <p className="text-[10px]">{description}</p>
        </div>

        {Icon ? Icon : null}
      </a>
    </div>
  );
}

export default Bookmark;
