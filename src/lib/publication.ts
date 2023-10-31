/*
 * publication.ts
 * Project: ecnuvis
 * Created: 2023-07-03 15:17:10
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-10-30 15:39:40
 * Modified By: Bill Chen (bill.chen@live.com)
 */
import {allPeople} from '.contentlayer/generated';

export interface InjectedAuthor {
  displayName: string;
  linkable: boolean;
  peopleId?: string;
}

export const getInjectedAuthors = (authors: string[]): InjectedAuthor[] => {
  return authors.map((item) => {
    if (item.length > 0 && item[0] == '@') {
      const peopleId = item.substring(1);
      const people = allPeople.find((item) => item.id == peopleId);
      if (people) {
        return {
          displayName: people.name,
          linkable: true,
          peopleId: peopleId,
        };
      } else {
        console.warn(`Cannot find people with id ${peopleId}`);
        return {
          displayName: peopleId,
          linkable: false,
        };
      }
    } else {
      return {
        displayName: item,
        linkable: false,
      };
    }
  });
};
