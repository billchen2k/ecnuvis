/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 14:01:25
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-11-01 17:13:58
 * Modified By: Bill Chen (bill.chen@live.com)
 */
'use client';

import {allPublications, Publication} from '.contentlayer/generated';
import PublicationItem from '@/components/puiblicationitem';
import {YearlyPager} from '@/components/yearlypager';
import Image from 'next/image';
import * as React from 'react';
import debounce from 'lodash/debounce';

export interface IPublicationProps {
}

export default function Publication(props: IPublicationProps) {
  const [publication, setPublication] = React.useState<Publication[]>([]);
  const [showAbstract, setShowAbstract] = React.useState<boolean[]>([]);
  const [pagerStatus, setPagerStatus] = React.useState<string | undefined>(undefined);
  const [searchStr, setSearchStr] = React.useState<string>('');


  const performSearch = (query: string) => {
    if (query.length <= 2) {
      setPagerStatus(undefined);
      return;
    }
    const items = allPublications.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.authors.find((author) => author.toLowerCase().includes(query.toLowerCase())) ||
        (item.venue || '').toLowerCase().includes(query.toLowerCase()) ||
        (item.abstract || '').toLowerCase().includes(query.toLowerCase());
    }).sort((a, b) => {
      return new Date(b.dateCalc).getTime() - new Date(a.dateCalc).getTime();
    });
    console.log('search result', items.length);
    setPublication(items);
    setPagerStatus(`${items.length} Results`);
  };

  const debouncedPerformSearch = React.useCallback(
      debounce((query) => {
        performSearch(query);
      }, 100),
      []
  );

  React.useEffect(() => {
    debouncedPerformSearch(searchStr);
  }, [searchStr]);

  return (
    <div>
      <div className='flex flex-row gap-8 mb-4 items-center textcolor-body justify-center max-md:flex-col max-md:items-start max-md:gap-3'>
        <YearlyPager fullData={allPublications}
          maximumYears={8} showAll customStatus={pagerStatus}
          yearResolver={(item) => new Date(item.dateCalc).getFullYear()}
          onSelectionChange={(items, year) => {
            setShowAbstract(new Array(items.length).fill(false));
            items.sort((a, b) => {
              return new Date(b.dateCalc).getTime() - new Date(a.dateCalc).getTime();
            });
            setPagerStatus(undefined);
            setPublication(items);
          }} />
        <div className='max-md:hidden flex flex-1' />
        {/* Searchbox */}
        <div className='flex relative max-md:w-full'>
          <input type='text'
            value={searchStr} placeholder='Search Papers...'
            className='w-96 h-12 max-md:w-full border-black rounde-sm border-solid border-2 px-3 pr-10 focus:outline-none'
            onChange={(e) => setSearchStr(e.target.value)} />
          <Image className='absolute right-3 top-3'
            src={'/assets/icons/search.svg'} width={20} height={20} alt={'search icon'} />
        </div>
        {/* <div className={'textcolor-body tab-section text-xl font-bold'}>新闻动态 / NEWS</div> */}
      </div>
      <div className='flex flex-col gap-4'>
        {[...publication].map((item, index) =>
          <PublicationItem publication={item} key={item._id} showAbstract={showAbstract[index] || false}
            toggleShowAbstract={() => {
              const newAbstractStatus = new Array(publication.length).fill(false);
              newAbstractStatus[index] = !showAbstract[index];
              setShowAbstract(newAbstractStatus);
            }}
            highlightQuery={searchStr}
          />
        )}
      </div>
    </div>
  );
}
