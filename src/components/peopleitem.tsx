/*
 * peopleitem.tsx
 * Project: ecnuvis
 * Created: 2023-06-14 22:31:55
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-14 22:57:43
 * Modified By: Bill Chen (bill.chen@live.com)
 */
import * as React from 'react';
import {People} from 'contentlayer/generated';
import Image from 'next/image';

export interface IPeopleItemProps {
    people: People;
}

export default function PeopleItem(props: IPeopleItemProps) {
  const {people} = props;

  const getDefaultDescription = () => {
    switch (people.category) {
      case 'phd':
        return `Ph.D. Student, ${people.grade}`;
      case 'master':
        return `Master Student, ${people.grade}`;
      case 'undergraduate':
        return `Undergraduate, ${people.grade}`;
      case 'alumni':
        return `Alumni, ${people.grade}`;
      case 'staff':
        return 'Staff';
      case 'visiting':
        return `Visiting Student, ${people.grade}`;
    }
  };

  const iconLink = (iconPath: string, link: string) => <a href={link}>
    <Image src={iconPath} width={20} height={20} alt={link} />
  </a>;

  return (
    <div className='flex flex-col gap-1'>
      <Image src={`/images/people/${people.image || 'default'}`}
        width={256} height={256} alt={'Image of ' + people.name}
        className='w-52 h-52 object-cover border-black border-solid border-2 mb-1' />
      <div className='text-xl font-bold'>{[...[people.name], ...[people.nameAlt]].join(' / ')}</div>
      <div>{people.description || getDefaultDescription()}</div>
      <div className='flex flex-row gap-2'>
        {people.email && iconLink('/assets/icons/email.svg', `mailto:${people.email}`)}
        {people.github && iconLink('/assets/icons/github.svg', people.github)}
        {people.homepage && iconLink('/assets/icons/homepage.svg', people.homepage)}
      </div>
    </div>
  );
}
