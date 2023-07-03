/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 14:01:25
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-07-03 15:36:48
 * Modified By: Bill Chen (bill.chen@live.com)
 */
'use client';

import * as React from 'react';
import {allPublications, Publication} from '.contentlayer/generated';
import {YearlyPager} from '@/components/yearlypager';
import PublicationItem from '@/components/puiblicationitem';
export interface IPublicationProps {
}

export default function Publication(props: IPublicationProps) {
  const [publication, setPublication] = React.useState<Publication[]>([]);

  return (
    <div>
      <div className='flex flex-row gap-8 mb-2 items-center'>
        <YearlyPager fullData={allPublications}
          maximumYears={6}
          yearResolver={(item) => new Date(item.dateCalc).getFullYear()}
          onSelectionChange={(items, year) => {
            setPublication(items);
          }} />
        {/* <div className={'textcolor-body tab-section text-xl font-bold'}>新闻动态 / NEWS</div> */}
      </div>
      <div>
        {publication.map((item) =>
          <PublicationItem publication={item} key={item._id} />
        )}
      </div>
    </div>
  );
}
