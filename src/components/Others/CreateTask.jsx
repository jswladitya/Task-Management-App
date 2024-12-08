import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-20 rounded-lg">
        <form className="flex flex-wrap w-full justify-between items-start gap-5">
          <div className="w-1/2 flex flex-col gap-3">
            <div>
              <h2 className="text-sm text-gray-300 mb-0.5">Task title</h2>
              <input
                className="border border-emerald-600 rounded py-1 px-2 outline-none bg-transparent placeholder:text-gray-400 w-4/5"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h2 className="text-sm text-gray-300 mb-0.5">Date</h2>
              <input
                className="border border-emerald-600 rounded py-1 px-2 outline-none bg-transparent placeholder:text-gray-400 w-4/5"
                type="date"
              />
            </div>
            <div>
              <h2 className="text-sm text-gray-300 mb-0.5">Assign to</h2>
              <input
                className="border border-emerald-600 rounded py-1 px-2 outline-none bg-transparent placeholder:text-gray-400 w-4/5"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div>
              <h2 className="text-sm text-gray-300 mb-0.5">Category</h2>
              <input
                className="border border-emerald-600 rounded py-1 px-2 outline-none bg-transparent placeholder:text-gray-400 w-4/5"
                type="text"
                placeholder="design, Dev, Etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <div>
              <h2 className="text-sm text-gray-300 mb-0.5">Description</h2>
              <textarea
                className="h-40 border border-emerald-600 rounded py-2 px-4 outline-none bg-transparent placeholder:text-gray-400 w-full"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
              <button className="border-none bg-emerald-600 rounded-full py-3 px-8 text-white outline-none placeholder:text-white mt-4 w-full">Create Task</button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
