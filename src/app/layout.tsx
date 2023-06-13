import {IBM_Plex_Sans} from 'next/font/google';
import '@/styles/global.scss';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-ibmplexsans',
});

export type IRootLayoutProps = {
  children: React.ReactNode,
}
// export const metadata = {
//   title: 'ECNUVIS',
//   description: 'Visualization Lab at East China Normal University.',
// };
// export async function generateMetadata({params, searchParams}: ) {
// }

export default function RootLayout(props: IRootLayoutProps) {
  return (
    <html lang="en,zh-CN">
      <body className={`${ibmPlexSans.variable}`}>
        <Nav />
        <main className='main-content'>
          {props.children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
