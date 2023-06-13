/*
 * error.tsx
 * Project: ecnuvis
 * Created: 2023-06-10 13:29:42
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-10 13:44:15
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
'use client';

import Error from 'next/error';
import Link from 'next/link';
import * as React from 'react';

export interface INewsErrorProps {
    error: any;
    reset: () => void;
}

export default function NewsError(props: INewsErrorProps) {
  return (
    <div className='typography'>
      <h2><i>We encountered some error...</i></h2>
      <p>{props.error.message}</p>
      <div className='flex flex-row gap-2'>
        <button onClick={() => props.reset()} >Try again</button>
        <Link href={'/'}>
          <button>Go home</button>
        </Link>
      </div>

    </div>
  );
}
