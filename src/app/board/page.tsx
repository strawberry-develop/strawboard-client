import Header from '@/components/board/Header'
import { IoMdAdd } from 'react-icons/io'
const BoardPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <section className="py-6 px-10">
        <h3 className="text-md font-medium mb-4 text-gray-500">Main Board</h3>
        <div className="flex gap-5 overflow-x-scroll">
          <div className="w-[300px] bg-white rounded-lg p-3 shadow-[0_1px_2px_0_rgba(169,174,183,0.5)]">
            <header className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Board 1</h4>
              <button>
                <IoMdAdd className="w-5 h-5" />
              </button>
            </header>
            <div className="flex flex-col gap-2">
              <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
              <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
              <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BoardPage
