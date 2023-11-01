import Image from 'next/image';
import '@/styles/home.scss';
import NewsList from '@/components/newslist';
import {allPages} from 'contentlayer/generated';
import Poster from '@/components/poster';

export default function Home() {
  const homePage = allPages.findLast((page) => page.page === 'home');
  return (
    <div className='flex flex-col gap-6'>
      <Poster />
      <div className='text-intro flex flex-col gap-6'
        dangerouslySetInnerHTML={{__html: homePage?.body.html || ''}}>
      </div>
      <NewsList />
    </div>
  );
}
