import { CheckCircle } from "phosphor-react";
import React from "react";
import { List } from "rsuite";

const roadmap = [
  { title: "Add clock", completed: true },
  { title: "Add weather", completed: true },
  { title: "Add bookmarks [WORKING ON IT]", completed: false },
  { title: "Add settings", completed: false },
  { title: "Add social icons", completed: false },
  { title: "Edit bookmarks", completed: false },
  { title: "Edit neon text", completed: false },
  { title: "Add search engines", completed: false },
  { title: "Re-arrange bookmarks", completed: false },
  { title: "Adjust columns", completed: false },
  { title: "Display options (title, description, icon)", completed: false },
  { title: "Add custom background image", completed: false },
  { title: "Add tooltips on bookmarks hover", completed: false },
  { title: "Add animations", completed: false },
  { title: "Login with Google to save progress", completed: false },
  { title: "Add dark mode", completed: false },
  { title: "Add light mode", completed: false },
  { title: "Add Docs", completed: false },
];

function Roadmap() {
  return (
    <div className="px-6 max-h-full overflow-y-auto">
      <List>
        {roadmap.map((item, index) => (
          <List.Item className="flex gap-1" key={index}>
            <CheckCircle
              className={`h-5 w-5 ${item.completed && "text-green-500"}`}
            />
            <span className={item.completed && "line-through"}>
              {item.title}
            </span>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default Roadmap;
