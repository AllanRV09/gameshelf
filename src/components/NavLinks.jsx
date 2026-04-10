import { MenuItem } from '@headlessui/react'

const navigation = [
    { name: 'Search', href: '#' },
    { name: 'My Shelf', href: '#' },
    { name: 'Stats', href: '#' },
]

/**
 * @param {{ isMobile?: boolean }} props
 */
export function NavLinks({ isMobile = false }) {
    return navigation.map((item) => {
        if (isMobile) {
            return (
                <MenuItem key={item.name}>
                    <a
                        href={item.href}
                        className='w-full items-center gap-2 px-3 py-1.5 text-center font-semibold'
                    >
                        {item.name}
                    </a>
                </MenuItem>
            )
        }

        return (
            <a
                key={item.name}
                href={item.href}
                className='gap-2 px-3 py-1.5 font-semibold'
            >
                {item.name}
            </a>
        )
    })
}