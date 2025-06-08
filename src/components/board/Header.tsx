import { IoMdFlower, IoMdNotifications, IoMdRefresh } from 'react-icons/io'
import Logo from '../common/Logo'
import SearchInput from './SearchInput'
import UserToggle from './UserToggle'
const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-4 w-full">
      <div className="flex items-center">
        <Logo width={32} height={32} />
        <h1 className="ml-2 text-xl font-medium">StrawBoard</h1>
      </div>
      <SearchInput />
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-5 text-gray-600">
          <button>
            <IoMdRefresh className="w-7 h-7" />
          </button>
          <button>
            <IoMdNotifications className="w-7 h-7" />
          </button>
          <button>
            <IoMdFlower className="w-7 h-7" />
          </button>
        </div>
        <UserToggle />
      </div>
    </header>
  )
}

export default Header
