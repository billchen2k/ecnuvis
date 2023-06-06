/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-06-05 23:55:13
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-06 16:36:05
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
import * as React from 'react';

export interface INewsProps {
}

export default function News(props: INewsProps) {
  return (
    <div>
      {Array.from({length: 1000}, (_, i) => i).map((item) => (
        <span key={item}>This is the content for the news. </span>
      ))}
    </div>
  );
}
