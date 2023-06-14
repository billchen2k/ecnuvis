/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 14:00:10
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-14 22:47:15
 * Modified By: Bill Chen (bill.chen@live.com)
 */
import * as React from 'react';
import {allPeople, People} from 'contentlayer/generated';
import PeopleItem from '@/components/peopleitem';

export interface IPeopleProps {
}

export default function People(props: IPeopleProps) {
  return (
    <div>
      {allPeople.map((item) =>
        <PeopleItem people={item} key={item.id} />)
      }
    </div>
  );
}
