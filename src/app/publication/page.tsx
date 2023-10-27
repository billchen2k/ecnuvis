/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 14:01:25
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-07-12 00:16:55
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
  const [showAbstract, setShowAbstract] = React.useState<boolean[]>([]);

  return (
    <div>
      <div className='flex flex-row gap-8 mb-4 items-center textcolor-body'>
        <YearlyPager fullData={allPublications}
          maximumYears={8}
          yearResolver={(item) => new Date(item.dateCalc).getFullYear()}
          onSelectionChange={(items, year) => {
            setShowAbstract(new Array(items.length).fill(false));
            setPublication(items);
          }} />
        {/* <div className={'textcolor-body tab-section text-xl font-bold'}>新闻动态 / NEWS</div> */}
      </div>
      <div className='flex flex-col gap-4'>
        {[...publication, ...publication, ...publication].map((item, index) =>
          <PublicationItem publication={item} key={item._id} showAbstract={showAbstract[index] || false}
            toggleShowAbstract={() => {
              const newAbstractStatus = new Array(publication.length).fill(false);
              newAbstractStatus[index] = !showAbstract[index];
              setShowAbstract(newAbstractStatus);
            }}
          />
        )}
      </div>
    </div>
  );
}
