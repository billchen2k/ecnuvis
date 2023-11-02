import Image from 'next/image';
import '@/styles/home.scss';
import NewsList from '@/components/newslist';
import {allPages} from 'contentlayer/generated';
import Poster from '@/components/poster';
import {useMDXComponent} from 'next-contentlayer/hooks';

export default function Home() {
  const homePage = allPages.findLast((page) => page.page === 'home');
  const MDXContent = useMDXComponent(homePage?.body.code || '');
  return (
    <div className='flex flex-col gap-6'>
      <Poster />
      <div className='text-intro flex flex-col gap-4'>
        <MDXContent />
      </div>
      <NewsList />
    </div>
  );
}
