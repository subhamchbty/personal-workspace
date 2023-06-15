import { CheckCircle, FlowArrow, GithubLogo } from "phosphor-react";
import React from "react";
import { Drawer, List } from "rsuite";

const roadmap = [
  { title: "Re-arrange bookmarks", completed: false },
  { title: "Add bookmarks", completed: false },
  { title: "Add search engines", completed: false },
  { title: "Add social icons", completed: false },
  { title: "Edit bookmarks", completed: false },
  { title: "Edit neon text", completed: false },
  { title: "Adjust columns", completed: false },
  { title: "Display options (title, description, icon)", completed: false },
  { title: "Add custom background image", completed: false },
  { title: "Add tooltips on bookmarks hover", completed: false },
  { title: "Add animations", completed: false },
  { title: "Add settings", completed: false },
  { title: "Add Docs", completed: false },
  { title: "Login with Google to save progress", completed: false },
  { title: "Add dark mode", completed: false },
  { title: "Add light mode", completed: false },
];

function Footer() {
  const [openWithHeader, setOpenWithHeader] = React.useState(false);

  return (
    <div className="text-white absolute bottom-0 flex justify-between items-center gap-10 w-full mb-2 px-4">
      <p className="text-center">
        Made with ❤️ by{" "}
        <a href="https://github.com/subhamchbty" target="_blank">
          @subhamchbty
        </a>
      </p>

      <div className="flex gap-4">
        <button className="flex gap-1" onClick={() => setOpenWithHeader(true)}>
          <FlowArrow className="h-5 w-5" /> <span>Roadmap</span>
        </button>
        <a
          href="https://github.com/subhamchbty/personal-workspace"
          target="_blank"
          className="text-white flex gap-1"
        >
          <GithubLogo className="h-5 w-5" />
          <span>Github Repo</span>
        </a>
      </div>

      <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
        <Drawer.Header>
          <Drawer.Title>Roadmap</Drawer.Title>
        </Drawer.Header>
        <div className="px-6">
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
      </Drawer>
    </div>
  );
}

export default Footer;
