/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 14:01:41
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-06 21:10:34
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
import * as React from 'react';
import {allPages} from 'contentlayer/generated';
export interface IContactProps {
}

export default function Contact(props: IContactProps) {
  const contactPage = allPages.findLast((page) => page.page === 'contact');

  return (
    <div>
      <div className='typography' dangerouslySetInnerHTML={{__html: contactPage?.body.html || ''}} />
    </div>
  );
}
