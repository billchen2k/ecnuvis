/*
 * footer.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 17:20:25
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-06 19:39:11
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
import Image from 'next/image';
import * as React from 'react';

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
  return (
    <div className='float-right footer flex flex-row gap-2 justify-center my-16'>
      <div className='flex flex-col items-end justify-center italic font-light'>
        <div className='text-gray-400'>East China Normal University</div>
        <div className='text-gray-400'>School of Computer Science and Technology</div>
      </div>
      <a href='https://www.ecnu.edu.cn' target='blank'>
        <Image src='/ecnu.svg' alt='ECNU Logo' width={120} height={120}
          className='h-12 w-12 opacity-80 flex'/>
      </a>
      <a href='https://cs.ecnu.edu.cn' target='blank'>
        <Image src='/ecnucs.svg' alt='ECNU Logo' width={120} height={120}
          className='h-12 w-12 opacity-80 flexr' />
      </a>
    </div>
  );
}
