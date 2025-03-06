
import {
  HomeIcon,
  Package,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const data = [
  {
    title: 'Home',
    icon: <HomeIcon className='h-full w-full text-neutral-600' />,
    href: '/',
  },
  {
    title: 'Projects',
    icon: <Package className='h-full w-full text-neutral-600' />,
    href: '/projects',
  },
  {
    title: 'About',
    icon: <User className='h-full w-full text-neutral-600' />,
    href: '#',
  }
];

export function AppleDock() {
  return (
    <div className='fixed bottom-2 left-1/2 z-50 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <Link to={item.href} key={idx}>
            <DockItem className='aspect-square rounded-full bg-gray-200'>
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}
