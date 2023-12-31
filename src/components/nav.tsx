/*
 * nav.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 15:37:28
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-11-05 22:23:55
 * Modified By: Bill Chen (bill.chen@live.com)
 */
'use client';

import * as React from 'react';
import {usePathname} from 'next/navigation';
import '@/styles/nav.scss';
import {routes} from '@/lib/routes';
import Link from 'next/link';
import Image from 'next/image';

export interface INavProps {
    children?: React.ReactNode;
}

export default function Nav(props: INavProps) {
  const [highlightY, setHighlightY] = React.useState(0);
  const [highlightHeight, setHighlightHeight] = React.useState(0);
  const [activatedNavID, setActivatedNavId] = React.useState('');
  const [menuActivated, setMenuActivated] = React.useState(false);

  const pathName = usePathname();

  React.useEffect(() => {
    const pathSegments = pathName.split('/');
    const mainPath = '/' + (pathSegments[1] || '');
    const matchedNav = routes.find((route) => route.path === mainPath);
    if (!matchedNav) {
      setHighlightY(0);
      setHighlightHeight(0);
      setActivatedNavId('');
    } else {
      const matchedNavEle = document.getElementById(`navtab-${matchedNav.path}`);
      if (matchedNavEle) {
        setHighlightY(matchedNavEle.getBoundingClientRect().top);
        setHighlightHeight(matchedNavEle.getBoundingClientRect().height);
        setActivatedNavId(matchedNavEle.id);
      }
    }
  }, [pathName]);

  return (
    <div>
      <nav className='fixed top-0 left-0'>
        <div className='navline-upper'></div>
        <div className='navhead flex flex-row w-screen'>
          <div className='navhead-menu ' onClick={() => setMenuActivated(!menuActivated)}>
            <Image className='absolute left-2 top-[1.11rem] brightness-0 invert saturate-0'
              src={`/assets/icons/${menuActivated ? 'close.svg' : 'hamburger.svg'}`}
              alt={'Hamburger Menu'} width={24} height={24} />
          </div>
          <Link href='/'>
            <div className='navhead-logo'>
              <span>ECNUVIS</span>
            </div>
          </Link>
          <div className='navhead-content'>
            <div className='navhead-content-texts z-50'>
              <div><b>华东师范大学可视化实验室</b></div>
              <div>ECNU Visualization Lab</div>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-start w-16 max-md:hidden'>
          <div className='navline-lower'></div>
          <div className='navtab-highlight' style={{
            top: highlightY,
            height: highlightHeight,
          }} />
          <div className='relative z-50'>
            {routes.map((item) => (
              <Link href={item.path} key={item.pageTitle} className='cursor-pointer pointer-events-auto'>
                <div className={`navtab-item ${`navtab-${item.path}` === activatedNavID ? 'activated' : ''}`}
                  id={`navtab-${item.path}`}>{item.tabName}</div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className={'sm:hidden navbarmobile-container'}
        onClick={() => setMenuActivated(false)}
        style={{
          opacity: menuActivated ? 1 : 0,
          pointerEvents: menuActivated ? 'auto': 'none',
        }}
      >
        {routes.map((item) => (
          <Link href={item.path} key={item.pageTitle} className='cursor-pointer' onClick={() => setMenuActivated(false)}>
            <div className={`navtabmobile-item ${`navtab-${item.path}` === activatedNavID ? 'activated' : ''}`}
              id={`navtabmobile-${item.path}`}>{item.tabName}</div>
          </Link>
        ))}
      </div>
    </div>

  );
}
