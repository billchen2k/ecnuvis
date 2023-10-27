/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 14:00:10
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-10-27 11:09:20
 * Modified By: Bill Chen (bill.chen@live.com)
 */
'use client';

import PeopleItem from '@/components/peopleitem';
import {allPeople, People} from 'contentlayer/generated';
import '@/styles/typography.scss';
import '@/styles/pager.scss';
import '@/styles/people.scss';

export interface IPeopleProps {
}

export default function People(props: IPeopleProps) {
  const sections: {
    category: People['category'],
    title: string,
  }[] = [
    {
      category: 'staff',
      title: 'Staff',
    },
    {
      category: 'phd',
      title: 'Ph.D. / 博士',
    },
    {
      category: 'master',
      title: 'Master / 硕士',
    },
    {
      category: 'undergraduate',
      title: 'Undergraduate / 本科生',
    },
    {
      category: 'visiting',
      title: 'Visiting Students / 访问学生',
    },
    {
      category: 'alumni',
      title: 'Alumni / 校友',
    },
  ];

  // const flashingId = window.location.hash ? window.location.hash.substring(1) : '';

  return (
    <div>
      {/* Section Navigation */}
      {/* <div className='typography'><h1>People / 成员</h1></div> */}
      <div className='flex flex-col sm:flex-row gap-4 text-xl mb-4 sticky top-24 pt-3 pb-4 w-full section-nav'>
        {sections.map((sec) => {
          const sectionPeople = allPeople.filter((item) => item.category === sec.category);
          if (sectionPeople.length == 0) return null;
          return (
            <a href={`#${sec.category}`} key={`people-section-header-${sec.category}`}
              className='pager-tab-item transition-all duration-200 hover:font-bold'>
              <div>{sec.title}</div>
            </a>
          );
        })}
      </div>

      {/* Section Content */}
      {sections.map((sec) => {
        const sectionPeople = allPeople.filter((item) => item.category === sec.category);
        if (sectionPeople.length == 0) return null;
        return (
          <div key={`people-section-${sec.category}`} className='mb-4'>
            <div id={sec.category} className='section-anchor'/>
            <div className='text-xl font-bold absolute writing-vertical -translate-x-12 h-36'>{sec.title}</div>
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'> */}
            <div className='flex flex-wrap gap-4'>
              {/* Repeat 10 times */}
              {Array.from({length: 1}, () => sectionPeople).flatMap((item) => item).map((item) =>
                <a href={`#${sec.category}`} key={`people-item-${item.id}`}>
                  <div id={`@${item.id}`} className='section-anchor' />
                  <PeopleItem people={item} key={item.id} flash={true}/>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
