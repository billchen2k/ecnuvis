/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-10-28 13:10:41
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-10-31 23:32:35
 * Modified By: Bill Chen (bill.chen@live.com)
 */

'use client';
import PictureItem from '@/components/galleryitem';
import {getItemImageURL} from '@/lib/util';
import {Picture, allPictures} from 'contentlayer/generated';
import Image from 'next/image';
import * as React from 'react';

export interface IGalleryProps {
}

export default function Gallery(props: IGalleryProps) {
  const [focusedPic, setFocusedPic] = React.useState<Picture | undefined>(undefined);
  const [showHover, setShowHover] = React.useState<boolean>(false);

  return (
    <div>
      <div className='flex flex-row gap-4 flex-wrap'>
        {Array.from({length: 1}, () => allPictures).flatMap((item) => item).map((pic, idx) => (
          <div key={pic.id} onClick={() => {
            setFocusedPic(pic);
            setShowHover(true);
          }}>
            <PictureItem picture={pic} />
          </div>
        ))}
      </div>
      <div className='fixed top-0 right-0 w-screen h-screen flex flex-col items-center z-10 justify-center bg-black/80' style={{
        opacity: showHover ? 1 : 0,
        pointerEvents: showHover ? 'auto' : 'none',
        transition: 'all 0.2s',
      }} onClick={() => setShowHover(false)}
      >
        {focusedPic &&
          <div className='flex flex-col'>
            <div>
              <Image src={getItemImageURL('gallery', focusedPic.image)}
                alt={focusedPic?.title || ''} placeholder='blur' blurDataURL={focusedPic.blurData}
                width={2000} height={2000} layout='responsive'
                className={`max-h-[85vh] max-w-[85vw] min-w-[30vw] min-h-[30vh] object-contain
                image shadow-lg shadow-neutral-800/50 transition-all duration-200`} />
            </div>

            <div className='flex flex-row gap-2 w-full text-[#eeeeee] font-light pt-2 opacity-70 transition-all duration-200'>
              <div className='flex flex-col'>
                <div className='text-lg font-bold'>{focusedPic.title}</div>
                <div>{focusedPic.subTitle}</div>
              </div>
              <div className='flex flex-1' />
              <div className='flex '>
                {focusedPic.dateCalc.substring(0, 10)}
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  );
}
