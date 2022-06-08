import React from 'react'
import {
  HomeIcon,
  ShoppingBagIcon,
  HeartIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from '@heroicons/react/outline'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
    Cname: 'nav-text',
    id: '1',
  },
  {
    title: 'My Account',
    path: '/account',
    icon: <UserIcon />,
    Cname: 'nav-text',
    id: '2',
  },
  {
    title: 'My Orders',
    path: '/orders',
    icon: <ShoppingBagIcon />,
    Cname: 'nav-text',
    id: '3',
  },
  {
    title: 'Wish List',
    path: '/wishlist',
    icon: <HeartIcon />,
    Cname: 'nav-wishlist',
    id: '4',
  },
  {
    title: 'Contact Us',
    path: '/contact',
    icon: <QuestionMarkCircleIcon />,
    Cname: 'nav-text',
    id: '5',
  },
]
