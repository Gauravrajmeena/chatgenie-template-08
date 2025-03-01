
import {
  HomeIcon,
  Package,
  SunMoon,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { useEffect, useState } from 'react';

const data = [
  {
    title: 'Home',
    icon: <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '/',
  },
  {
    title: 'Projects',
    icon: <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '/projects',
  },
  {
    title: 'About',
    icon: <User className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#',
  }
];

export function AppleDock() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='fixed bottom-2 left-1/2 z-50 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <Link to={item.href} key={idx}>
            <DockItem className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'>
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
        <button onClick={toggleTheme} className="transition-none">
          <DockItem className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 transition-none'>
            <DockLabel>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</DockLabel>
            <DockIcon>
              <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300 transition-none' />
            </DockIcon>
          </DockItem>
        </button>
      </Dock>
    </div>
  );
}
