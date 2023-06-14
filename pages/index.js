import { FacebookLogo, GitBranch, InstagramLogo, Kanban, LinkedinLogo, MagnifyingGlass, Robot } from "phosphor-react";

export default function Home() {
  const searchGoogle = () => {
    const searchTerm = document.getElementById("search-input").value;
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const url = `https://www.google.com/search?q=${encodedSearchTerm}`;
    window.location.href = url;
  }

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      searchGoogle();
    }
  }

  return (
    <div className="main flex justify-center items-center">
      <div className="bg-black bg-opacity-50 rounded-md p-10 text-white w-3/4">
        <div className="flex flex-col justify-between items-center gap-10">
          <div className="flex justify-center items-center gap-5">
            <a
              href="https://www.facebook.com/subhamchakraborty95/"
              target="_blank"
            >
              <FacebookLogo className="h-8 w-8" />
            </a>

            <a href="https://www.instagram.com/subhamcby/" target="_blank">
              <InstagramLogo className="h-8 w-8" />
            </a>

            <a
              href="https://www.aedin.com/in/subham-chakraborty-sc/"
              target="_blank"
            >
              <LinkedinLogo className="h-8 w-8" />
            </a>
          </div>

          <div className="w-3/4 relative flex justify-center items-center">
            <input
              id="search-input"
              type="text"
              className="w-full bg-transparent text-white border border-white pl-4 pr-10 py-2 rounded"
              placeholder="Search"
              onKeyDown={handleSearch}
            />
            <button
              onClick={searchGoogle}
              className="absolute right-0 top-0 bottom-0 mr-2 bg-transparent text-white flex items-center justify-center"
            >
              <MagnifyingGlass className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center my-10">
          <h2 id="neonText" className="neonText text-5xl">
            Code, Sleep & Code
          </h2>
        </div>

        <div className="mt-24">
          <div className="flex flex-row gap-3">
            <div className="border border-white w-full rounded-sm p-3 bg-slate-500 bg-opacity-50 hover:bg-slate-600 hover:bg-opacity-50">
              <a
                href="https://chat.openai.com/"
                target="_blank"
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">ChatGPT</p>
                  <p className="text-[10px]">Chat with an AI</p>
                </div>

                <Robot fontSize={20}/>
              </a>
            </div>

            <div className="border border-white w-full rounded-sm p-3 bg-slate-500 bg-opacity-50 hover:bg-slate-600 hover:bg-opacity-50">
              <a
                href="https://trello.com/b/w5xDGFQ6/job-onboarding-saas"
                target="_blank"
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">Trello Board</p>
                  <p className="text-[10px]">Organize anything, together.</p>
                </div>

                <Kanban fontSize={20}/>
              </a>
            </div>

            <div className="border border-white w-full rounded-sm p-3 bg-slate-500 bg-opacity-50 hover:bg-slate-600 hover:bg-opacity-50">
              <a
                href="https://github.com"
                target="_blank"
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">Github</p>
                  <p className="text-[10px]">
                    Where the world builds software.
                  </p>
                </div>

                <GitBranch fontSize={20}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
