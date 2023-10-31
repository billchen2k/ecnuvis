/*
 * puiblicationitem.tsx
 * Project: ecnuvis
 * Created: 2023-07-03 15:33:46
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-10-31 16:37:14
 * Modified By: Bill Chen (bill.chen@live.com)
 */
'use client';
import {getInjectedAuthors} from '@/lib/publication';
import {Publication} from 'contentlayer/generated';
import Image from 'next/image';
import '@/styles/typography.scss';
import '@/styles/publication.scss';
import * as React from 'react';
import Link from 'next/link';
import {getItemImageURL} from '@/lib/util';
import {debounce} from 'lodash';

export interface IPublicationItemProps {
    publication: Publication;
    showAbstract?: boolean;
    toggleShowAbstract?: () => void;
}

export default function PublicationItem(props: IPublicationItemProps) {
  // const abstractRef = React.useRef<HTMLDivElement>(null);

  const publication = props.publication;
  const injectedAuthors = getInjectedAuthors(publication.authors);

  const iconLink = (iconPath?: string, title?: string, link?: string) =>
    <a href={link} target='_blank' onClick={(e) => e.stopPropagation()}>
      <div className='flex flex-row gap-1 typography'>
        {iconPath &&
          <Image src={iconPath} width={20} height={20} alt={link || ''} />
        }
        {title &&
          <a className='text-sm'>{title}</a>
        }
      </div>
    </a>;

  // React.useEffect(() => {
  //   if (!abstractRef.current) return;
  //   abstractRef.current.style.height = props.showAbstract ? abstractRef.current.scrollHeight + 'px' : '0px';
  // });

  return (
    <div className='cursor-default flex flex-row gap-3 hover:bg-slate-50 duration-50 textcolor-body dark:hover:bg-slate-800'
      // onClick={() => props.toggleShowAbstract && props.toggleShowAbstract()}
    >
      {/* <div className='flex flex-shrink-0 w-64 relative'> */}
      <Image src={getItemImageURL('publication', publication.image)}
        width={300} height={180} placeholder={'blur'} blurDataURL={publication.blurData}
        alt={'Cover image of paper ' + publication.title}
        className='w-64 h-auto object-contain flex-shrink-0 border-black border-solid border' />


      <div className='flex flex-col gap-1'>
        <div className='text-xl font-bold'>{publication.title}</div>
        <div className='flex flex-row gap-1'>
          {injectedAuthors.map((item, index) => {
            const displayName = index < injectedAuthors.length - 1 ? item.displayName + ',' : item.displayName;
            if (item.linkable) {
              return <Link href={`/people#${item.peopleId || ''}`} key={item.displayName} className='underline underline-offset-4'>
                {displayName}
              </Link>;
            } else {
              return <div key={item.displayName}>{displayName}</div>;
            }
          })}
        </div>
        {
          publication.venue && <div className='textcolor-secondary italic'>{publication.venue}</div>
        }

        <div className='flex flex-row gap-2'>
          {publication.paper &&
            iconLink('/assets/icons/pdf.svg', 'Paper', publication.paper)
          }
          {publication.code &&
            iconLink('/assets/icons/github.svg', 'Code', publication.code)
          }
          {publication.video &&
            iconLink('/assets/icons/video.svg', 'Video', publication.video)
          }
          {publication.website &&
            iconLink('/assets/icons/homepage.svg', 'Website', publication.website)
          }
          {publication.website &&
            iconLink('/assets/icons/homepage.svg', 'DOI', publication.website)
          }
        </div>
        {/* <div ref={abstractRef} className={`transition-all duration-400 overflow-hidden`}>
          {'Abstract: '}
          {publication.abstract}
        </div> */}
        <div>
        </div>
      </div>
    </div>
  );
}
