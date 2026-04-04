export function NavBar() {
    const navigation = [
        { name: 'Search', href: '#' },
        { name: 'My Shelf', href: '#' },
        { name: 'Stats', href: '#' },
    ]

    return (
        <header className='sticky inset-x-0 top-0 z-50 px-4 pt-4 sm:mx-10 sm:pt-6'>
            <nav className='mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6'>
                <a href="#" className='text-white font-bold text-xl'>
                    GAME SHELF
                </a>

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