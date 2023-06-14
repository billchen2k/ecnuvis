/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-06-10 13:12:47
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-14 22:03:23
 * Modified By: Bill Chen (bill.chen@live.com)
 */
import * as React from 'react';
import {allNews, News} from 'contentlayer/generated';
import {formatDateUtc8} from '@/lib/util';

export interface INewsPageProps {
    params: {
      slug: string[];
    }
}

export async function generateStaticParams() {
  return allNews.map((item) => {
    return {
      params: {
        slug: [new Date(item.dateCalc).getFullYear().toString(), item.id],
      },
    };
  });
}

export default function NewsPage(props: INewsPageProps) {
  const news = allNews.find((item) => {
    return item.id === props.params.slug[1] && new Date(item.dateCalc).getFullYear().toString() === props.params.slug[0];
  });
  if (!news) {
    throw new Error(`News '${props.params.slug.join(' -> ')}' not found.`);
  }
  return (
    <div>
      <div className='typography'>
        <h1>{news.title}</h1>
        <caption className='textcolor-theme mb-2'>{formatDateUtc8(news.dateCalc, 'yyyy.MM.dd')}</caption>
      </div>
      <div className='typography' dangerouslySetInnerHTML={{__html: news.body.html}}></div>
    </div>
  );
}
