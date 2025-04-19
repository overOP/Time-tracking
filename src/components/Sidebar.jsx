import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = ["daily", "weekly", "monthly"];

  return (
    <div className="bg-indigo-700 text-white rounded-2xl flex flex-col justify-between row-span-2">
      <div className="bg-indigo-500 p-6 rounded-t-2xl flex flex-col sm:h-full">
        <div className="flex sm:flex-col sm:items-start items-center gap-4">
          <img
            src="/image-jeremy.png"
            alt="Profile"
            className="rounded-full w-16 h-16 border-2 border-white"
          />
          <div>
            <p className="text-sm text-gray-300">Report for</p>
            <h2 className="text-2xl font-light leading-tight">Jeremy Robson</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#1e204a] p-6 rounded-b-2xl flex sm:flex-col sm:items-start items-center gap-4">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer capitalize ${
              activeTab === tab ? "text-white font-bold" : "text-gray-400 hover:text-white"
            }`
            //activeTab === tab is used to highlight the active tab
            // ? is used to check if the activeTab is equal to the tab "text-white font-bold" 
            // : is used to set the style for the inactive tabs "text-gray-400 hover:text-white"
            }
          >
            {tab}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
