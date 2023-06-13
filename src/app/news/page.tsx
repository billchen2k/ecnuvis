/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-06-05 23:55:13
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-10 13:11:00
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
import NewsList from '@/components/newslist';
import * as React from 'react';

export interface INewsProps {
}

export default function News(props: INewsProps) {
  return (
    <div>
      <NewsList />
    </div>
  );
}
