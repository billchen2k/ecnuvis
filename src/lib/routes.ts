/*
 * routes.ts
 * Project: ecnuvis
 * Created: 2023-06-06 15:26:15
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-07 15:47:47
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
export const routes: {
    path: string;
    tabName: string;
    pageTitle: string;
}[] = [
  {
    path: '/',
    tabName: 'HOME / 首页',
    pageTitle: 'Home',
  },
  // {
  //   path: '/news',
  //   tabName: 'NEWS / 动态',
  //   pageTitle: 'News',
  // },
  {
    path: '/publication',
    tabName: 'PUBLICATION / 论文',
    pageTitle: 'Publication',
  },
  {
    path: '/people',
    tabName: 'PEOPLE / 成员',
    pageTitle: 'People',
  },
  {
    path: '/contact',
    tabName: 'CONTACT / 联系',
    pageTitle: 'Contact',
  },
];
