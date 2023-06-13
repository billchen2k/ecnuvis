/*
 * newslist.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 19:51:31
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-10 13:46:45
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
'use client';
import * as React from 'react';
import {allNews, News} from 'contentlayer/generated';
import {formatDateUtc8} from '@/lib/util';
import {spacing} from 'pangu';
import {compareDesc} from 'date-fns';
import {YearlyPager} from './yearlypager';
import Link from 'next/link';

export interface INewsListProps {
}

export default function NewsList(props: INewsListProps) {
  const [news, setNews] = React.useState<News[]>([]);

  return (
    <div className='flex flex-col gap-2 textcolor-body'>
      <div className='flex flex-row gap-8 mb-2 items-center'>
        <div className={'textcolor-body tab-section text-xl font-bold'}>新闻动态 / NEWS</div>
        <YearlyPager fullData={allNews}
          maximumYears={2}
          yearResolver={(item) => new Date(item.dateCalc).getFullYear()}
          onSelectionChange={(items, year) => {
            setNews(items);
          }} />
      </div>

      {news.sort((a, b) => {
        if (a.dateCalc == b.dateCalc) {
          return a.id.localeCompare(b.id);
        } else {
          return compareDesc(new Date(a.dateCalc), new Date(b.dateCalc));
        }
      }).map((item: News) => {
        return (<div className='flex flex-row' key={item._raw.sourceFileName}>
          <div className='w-28'>{formatDateUtc8(item.dateCalc)}</div>
          <div className='flex flex-col gap-1'>
            <div className='font-bold text-base'>
              {spacing([...[item.title], ...[item.titleAlt]].join(' / '))}
              {item.body.html.length > 0 &&
                <Link href={`/news/${new Date(item.dateCalc).getFullYear()}/${item.id}`}>
                  Link
                </Link>
              }
            </div>
            {item.description &&
              <div className='text-sm'>{spacing(item.description.repeat(1))}</div>}
            {item.descriptionAlt &&
              <div className='text-sm'>{spacing(item.descriptionAlt)}</div>}
          </div>
        </div>);
      })}
    </div>
  );
}
