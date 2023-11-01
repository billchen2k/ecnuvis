/*
 * peopleitem.tsx
 * Project: ecnuvis
 * Created: 2023-06-14 22:31:55
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-11-01 16:05:23
 * Modified By: Bill Chen (bill.chen@live.com)
 */
import * as React from 'react';
import {People} from 'contentlayer/generated';
import Image from 'next/image';
import '@/styles/people.scss';
import {getItemImageURL} from '@/lib/util';

export interface IPeopleItemProps {
    people: People;
    flash?: boolean;
}

export default async function PeopleItem(props: IPeopleItemProps) {
  const {people} = props;

  const getDefaultDescription = () => {
    switch (people.category) {
      case 'phd':
        return `Ph.D. Student, ${people.year}`;
      case 'master':
        return `Master Student, ${people.year}`;
      case 'undergraduate':
        return `Undergraduate, ${people.year}`;
      case 'alumni':
        return `Alumni, ${people.year}`;
      case 'staff':
        return 'Staff';
      case 'visiting':
        return `Visiting Student, ${people.year}`;
    }
  };

  const iconLink = (iconPath: string, link: string) =>
    <a href={link} target='_blank'>
      <div className='hover:border-b-orange-500'>
        <Image src={iconPath} width={20} height={20} alt={link} />
      </div>
    </a>;

  const getBadgePrefix = (people: People) : string => {
    switch (people.category) {
      case 'staff':
        return '';
      case 'alumni':
        return 'Graduated';
      case 'visiting':
        return 'Visited';
      default:
        return 'Enrolled';
    }
  };

  return (
    <div className='flex flex-col gap-1'>
      <div className='relative w-48 h-48 shadow-xl hover:shadow-neutral-800/50 hover:scale-[1.02] transition-all duration-200 hover-shine'>
        <Image src={getItemImageURL('people', people.image)} blurDataURL={people.blurData}
          width={256} height={256} alt={'Image of ' + people.name} placeholder={'blur'}
          className={`w-48 h-48 object-cover border-black border-solid border-2 mb-1 ${props.flash ? 'flash' : ''}`} />
        {people.category != 'staff' &&
          <div className='bottom-0 left-0 absolute badge-container w-full h-full'>
            <div className='badge'>
              <div>{getBadgePrefix(people)} {people.year}</div>
              {people.body.html.length > 1 &&
                <div className='text-xs py-1' dangerouslySetInnerHTML={{__html: people.body.html}} />
              }
            </div>
          </div>
        }
      </div>
      <div className='w-48 text-lg overflow-visible font-bold'>
        <div className='flex-nowrap flex w-52'>
          {[...[people.name], ...[people.nameAlt]].join(' / ')}
        </div>
      </div>
      <div className='w-48 text-sm'>
        {people.description || getDefaultDescription()}
      </div>
      <div className='flex flex-row gap-2'>
        {people.email && iconLink('/assets/icons/email.svg', `mailto:${people.email}`)}
        {people.github && iconLink('/assets/icons/github.svg', people.github)}
        {people.homepage && iconLink('/assets/icons/homepage.svg', people.homepage)}
      </div>
    </div>
  );
}
