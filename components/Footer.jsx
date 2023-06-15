import { FlowArrow, GithubLogo } from "phosphor-react";
import React from "react";
import { Drawer } from "rsuite";
import Roadmap from "./Drawers/Roadmap";

function Footer() {
  const [openRoadmap, setOpenRoadMap] = React.useState(false);

  return (
    <div className="text-white absolute bottom-0 flex justify-between items-center gap-10 w-full mb-2 px-4">
      <p className="text-center">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/subhamchbty"
          target="_blank"
          className="hover:no-underline"
        >
          @subhamchbty
        </a>
      </p>

      <div className="flex gap-4">
        <button className="flex gap-1" onClick={() => setOpenRoadMap(true)}>
          <FlowArrow className="h-5 w-5" /> <span>Roadmap</span>
        </button>
        <a
          href="https://github.com/subhamchbty/personal-workspace"
          target="_blank"
          className="text-white flex gap-1 hover:no-underline hover:text-slate-200"
        >
          <GithubLogo className="h-5 w-5" />
          <span>Github Repo</span>
        </a>
      </div>

      <Drawer open={openRoadmap} onClose={() => setOpenRoadMap(false)}>
        <Drawer.Header>
          <Drawer.Title>Roadmap</Drawer.Title>
        </Drawer.Header>
        <Roadmap />
      </Drawer>
    </div>
  );
}

export default Footer;
