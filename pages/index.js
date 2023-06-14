import { Link } from 'next/link';

export default function Home() {
  return (
    <div className="main flex justify-center items-center">
      <div className="bg-black bg-opacity-50 rounded-md p-10 text-white w-3/4">
        <div className="flex flex-col justify-between items-center gap-10">
          <div className="flex justify-center items-center gap-5">
            <a
              href="https://www.facebook.com/subhamchakraborty95/"
              target="_blank"
            >
              <img
                className="h-8 w-8"
                src="https://img.icons8.com/ffffff/facebook"
              />
            </a>

            <a href="https://www.instagram.com/subhamcby/" target="_blank">
              <img
                className="h-8 w-8"
                src="https://img.icons8.com/ffffff/instagram"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/subham-chakraborty-sc/"
              target="_blank"
            >
              <img
                className="h-8 w-8"
                src="https://img.icons8.com/ffffff/linkedin"
              />
            </a>
          </div>

          <div className="w-3/4 relative flex justify-center items-center">
            <input
              id="search-input"
              type="text"
              className="w-full bg-transparent text-white border border-white pl-4 pr-10 py-2 rounded"
              placeholder="Search"
              onkeydown="handleSearch(event)"
            />
            <button
              onclick="searchGoogle()"
              className="absolute right-0 top-0 bottom-0 mr-2 bg-transparent text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
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

                <i className="fas fa-robot"></i>
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

                <i className="fas fa-solar-panel"></i>
              </a>
            </div>

            <div className="border border-white w-full rounded-sm p-3 bg-slate-500 bg-opacity-50 hover:bg-slate-600 hover:bg-opacity-50">
              <Link
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
