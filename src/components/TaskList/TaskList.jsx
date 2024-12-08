import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[40%] w-full py-8 mt-20 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto"
    >
      <div className=" flex-shrink-0 h-full w-[300px] bg-gray-950 rounded-xl">
        <div className="p-6 flex justify-between items-center">
          <h3 className="bg-red-900 text-sm py-1 px-3 rounded">High</h3>
          <h4 className="text-sm">8 Dec 2024</h4>
        </div>
        <h2 className="font-semibold text-2xl px-6 py-3">Learning JavaScript</h2>
        <p className="px-6 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos veniam fuga asperiores natus vero ipsum.</p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] bg-gray-950 rounded-xl">
        <div className="p-6 flex justify-between items-center">
          <h3 className="bg-red-900 text-sm py-1 px-3 rounded">High</h3>
          <h4 className="text-sm">8 Dec 2024</h4>
        </div>
        <h2 className="font-semibold text-2xl px-6 py-3">Learning JavaScript</h2>
        <p className="px-6 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos veniam fuga asperiores natus vero ipsum.</p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] bg-gray-950 rounded-xl">
        <div className="p-6 flex justify-between items-center">
          <h3 className="bg-red-900 text-sm py-1 px-3 rounded">High</h3>
          <h4 className="text-sm">8 Dec 2024</h4>
        </div>
        <h2 className="font-semibold text-2xl px-6 py-3">Learning JavaScript</h2>
        <p className="px-6 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos veniam fuga asperiores natus vero ipsum.</p>
      </div>
    </div>
  );
};

export default TaskList;
