/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 14:01:41
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-11-02 02:34:39
 * Modified By: Bill Chen (bill.chen@live.com)
 */
import * as React from 'react';
import {allPages} from 'contentlayer/generated';
import {useMDXComponent} from 'next-contentlayer/hooks';
import ECNUMap from '@/components/ecnumap';
export interface IContactProps {
}

export default function Contact(props: IContactProps) {
  const contactPage = allPages.findLast((page) => page.page === 'contact');
  const MDXContent = useMDXComponent(contactPage?.body.code || '');

  return (
    <div>
      <div className='typography'>
        <MDXContent />
        <ECNUMap />
        <hr />
        <span className='text-gray-400 text-xs'>网站问题反馈：jtchen at stu.ecnu.edu.cn</span>
      </div>
    </div>
  );
}
