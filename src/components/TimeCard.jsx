import React from "react";

export default function TimeCard({ item }) {
  return (
    <div className="rounded-2xl overflow-hidden relative">
      {/* Icon background */}
      <div className={`${item.color} h-20 bg-no-repeat bg-right-top bg-[length:60px_60px]`}
        style={{backgroundImage: `url(${item.icon})`}}
      ></div>

      {/* Card content */}
      <div className="bg-gray-800 text-white p-6 rounded-b-2xl">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium">{item.title}</h3>
          <button className="text-gray-400">...</button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-light">{item.hours}hrs</p>
          <p className="text-sm text-gray-400">Last Week - {item.lastWeek}hrs</p>
        </div>
      </div>
    </div>
  );
}
