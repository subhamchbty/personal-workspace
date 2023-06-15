import { Desktop, Gear, GitBranch, Kanban, Plus, Robot } from "phosphor-react";
import SocialIcons from "../components/SocialIcons";
import Search from "../components/Search";
import Bookmark from "../components/Bookmark";
import NeonText from "../components/NeonText";
import Footer from "../components/Footer";
import Clock from "../components/Clock";
import Weather from "../components/Weather";
import { useState } from "react";
import { Button, Modal } from "rsuite";

const bookmarks = [
  {
    title: "ChatGPT",
    description: "Chat with an AI",
    url: "https://chat.openai.com/",
    icon: <Robot fontSize={20} />,
  },
  {
    title: "Trello Board",
    description: "Organize anything, together.",
    url: "https://trello.com/b/w5xDGFQ6/job-onboarding-saas",
    icon: <Kanban fontSize={20} />,
  },
  {
    title: "Github",
    description: "Where the world builds software.",
    url: "https://github.com",
    icon: <GitBranch fontSize={20} />,
  },
  {
    title: "Notion",
    description: "All-in-one workspace",
    url: "https://notion.so",
    icon: <Desktop fontSize={20} />,
  },
  {
    title: "Youtube",
    description: "The ultimate video platform",
    url: "https://youtube.com",
    icon: <Desktop fontSize={20} />,
  },
];

export default function Home() {
  const [openAddNewBookmark, setOpenAddNewBookmark] = useState(false);

  return (
    <div className="relative">
      <div className="absolute px-4 pt-4 flex justify-between w-full">
        <Clock />
        <Weather />
      </div>
      <div
        className="main flex justify-center items-center"
        style={{
          background: `url(//misc-devsvillage.s3.ap-south-1.amazonaws.com/moon-1859616_1920.jpg) no-repeat`,
        }}
      >
        <div className="bg-black bg-opacity-50 rounded-md p-10 text-white md:w-1/2 lg:w-1/3 xl:w-2/4">
          <div className="flex flex-row justify-between items-center gap-10">
            <Search />
            <SocialIcons />
            <NeonText />

            {/* the icon should rotate always using tailwind speed less */}
            <Gear fontSize={20} className="cursor-pointer animate-spin-slow" />
          </div>

          <div className="mt-10">
            <div className="flex gap-4 mb-3">
              <button>Rearrange</button>
              <button>Columns</button>
              <button>Display options</button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {bookmarks.map((bookmark, index) => (
                <Bookmark
                  title={bookmark.title}
                  url={bookmark.url}
                  description={bookmark.description}
                  icon={bookmark.icon}
                  key={index}
                  className="col-span-1"
                />
              ))}
              <div
                className="border border-white rounded-sm p-3 bg-green-200 bg-opacity-50 hover:bg-green-300 hover:bg-opacity-50 w-full cursor-pointer"
                onClick={() => setOpenAddNewBookmark(true)}
              >
                <div className="flex justify-between items-center text-white hover:no-underline hover:text-slate-200 w-full h-full">
                  <div className="flex flex-col justify-start">
                    <span className="font-bold">Add New</span>
                    <span className="text-[10px]">Bookmark</span>
                  </div>

                  <Plus fontSize={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <Modal
        open={openAddNewBookmark}
        onClose={() => setOpenAddNewBookmark(false)}
      >
        <Modal.Header>
          <Modal.Title>Add Bookmarks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Add new bookmark</span>
        </Modal.Body>
      </Modal>
    </div>
  );
}
