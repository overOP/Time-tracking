import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TimeCard from "./components/TimeCard";

const rawData = {
  daily: [
    { title: "Work", hours: 5, lastWeek: 7, color: "bg-orange-400", icon: "public/icon-work.svg" },
    { title: "Play", hours: 2, lastWeek: 2, color: "bg-sky-400", icon: "public/icon-play.svg" },
    { title: "Study", hours: 4, lastWeek: 1, color: "bg-pink-400", icon: "public/icon-study.svg" },
    { title: "Exercise", hours: 0, lastWeek: 1, color: "bg-green-400", icon: "public/icon-exercise.svg" },
    { title: "Social", hours: 2, lastWeek: 3, color: "bg-purple-400", icon: "public/icon-social.svg" },
    { title: "Self Care", hours: 0, lastWeek: 1, color: "bg-yellow-400", icon: "public/icon-self-care.svg" }
  ],
  weekly: [
    { title: "Work", hours: 30, lastWeek: 36, color: "bg-orange-400", icon: "public/icon-work.svg" },
    { title: "Play", hours: 10, lastWeek: 8, color: "bg-sky-400", icon: "public/icon-play.svg" },
    { title: "Study", hours: 4, lastWeek: 7, color: "bg-pink-400", icon: "public/icon-study.svg" },
    { title: "Exercise", hours: 4, lastWeek: 5, color: "bg-green-400", icon: "public/icon-exercise.svg" },
    { title: "Social", hours: 5, lastWeek: 10, color: "bg-purple-400", icon: "public/icon-social.svg" },
    { title: "Self Care", hours: 2, lastWeek: 2, color: "bg-yellow-400", icon: "public/icon-self-care.svg" }
  ],
  monthly: [
    { title: "Work", hours: 100, lastWeek: 128, color: "bg-orange-400", icon: "public/icon-work.svg" },
    { title: "Play", hours: 23, lastWeek: 29, color: "bg-sky-400", icon: "public/icon-play.svg" },
    { title: "Study", hours: 13, lastWeek: 19, color: "bg-pink-400", icon: "public/icon-study.svg" },
    { title: "Exercise", hours: 11, lastWeek: 18, color: "bg-green-400", icon: "public/icon-exercise.svg" },
    { title: "Social", hours: 21, lastWeek: 23, color: "bg-purple-400", icon: "public/icon-social.svg" },
    { title: "Self Care", hours: 7, lastWeek: 11, color: "bg-yellow-400", icon: "public/icon-self-care.svg" }
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState("weekly");//activeTab is used to store the currently active tab
  const timeData = rawData[activeTab];// timeData is used to store the data for the currently active tab
  // rawData[activeTab] is used to get the data for the currently active tab
  // rawData is an object that contains the data for each tab (daily, weekly, monthly)
  // activeTab is a string that contains the currently active tab
  // rawData[activeTab] is used to get the data for the currently active tab
  // For example, if activeTab is "weekly", rawData[activeTab] will return the data for the weekly tab

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl w-full">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        {timeData.map((item) => (
          <TimeCard key={item.title} item={item} />
          //<Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> 
          //^ used to render the Sidebar component and pass the activeTab and setActiveTab functions as props to the Sidebar component.

          //{timeData.map((item) => ( 
          //it is used to iterate over the timeData array and render a TimeCard component for each item in the array.

          // <TimeCard key={item.title} item={item} /> 
          //is used to render the TimeCard component and pass the item as a prop to the TimeCard component.
          
          // The key prop is used to uniquely identify each TimeCard component in the list.
          // The key prop is important for React to optimize rendering and avoid unnecessary re-renders.
          // The key prop should be a unique value for each item in the list, in this case, we are using item.title as the key.
        ))}
      </div>
    </div>
  );
}
