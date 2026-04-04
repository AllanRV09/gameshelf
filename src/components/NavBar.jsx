import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/16/solid'
import { useState } from 'react'


export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigation = [
        { name: 'Search', href: '#' },
        { name: 'My Shelf', href: '#' },
        { name: 'Stats', href: '#' },
    ]

    const toggleMenuButton = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <header className='sticky inset-x-0 top-0 z-50 backdrop-blur-[4px] px-4 py-4 sm:px-10 sm:pt-6 lg:px-14'>
            <nav className='flex items-center gap-4 flex-row justify-between sm:gap-6'>
                <a href="#" className='text-white font-bold text-xl'>
                    GAME SHELF
                </a>

                <Menu>
                    <MenuButton onClick={toggleMenuButton} className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700 sm:hidden">
                        {
                            isMenuOpen
                                ? (
                                    <XMarkIcon className="size-4 fill-white/60" />
                                )
                                : (
                                    <Bars3Icon className="size-4 fill-white/60" />
                                )
                        }
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-full origin-top-right backdrop-blur-[4px] p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 sm:hidden"
                    >
                        <div className='flex flex-col gap-3 sm:flex-row sm:gap-x-8 lg:gap-x-12'>
                            {navigation.map((item) => (
                                <MenuItem key={item.name}>
                                    <a href={item.href} className='w-full items-center gap-2 px-3 py-1.5 text-center font-semibold'>
                                        {item.name}
                                    </a>
                                </MenuItem>
                            ))}
                        </div>
                    </MenuItems>

                    <div className='hidden sm:flex sm:flex-row sm:gap-x-8 lg:gap-x-12'>
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className='gap-2 px-3 py-1.5 font-semibold'>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                </Menu>
                <div className='flex flex-col gap-3 sm:flex-row sm:gap-x-8 lg:gap-x-12'>
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className='text-sm/6 font-semibold text-white text-center'>
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}