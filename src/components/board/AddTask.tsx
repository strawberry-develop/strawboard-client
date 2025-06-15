import { IoMdAdd } from 'react-icons/io'

export default function AddTask() {
  return (
    <li className="w-full mt-3 flex gap-3 p-3 hover:bg-gray-50 rounded-lg group cursor-pointer">
      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
        <IoMdAdd className="w-3 h-3 text-white" />
      </div>
      <span className="text-sm text-blue-500 font-medium">Add a task</span>
    </li>
  )
}
