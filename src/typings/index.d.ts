/*
 * index.d.ts
 * Project: ecnuvis
 * Created: 2023-06-05 23:28:29
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-05 23:42:09
 * Modified By: Bill Chen (bill.chen@live.com>)
 */

export interface INewsItem {
    title: string;
    titleAlt?: string;
    description: string;
    descriptionAlt?: string;
    date: string;
    content: string;
}

export interface IPublicationItem {
    title: string;
    titleAlt?: string;
    publication?: string;
    date: string;
    abstract?: string;
    authors: string[];
    pdfLink?: string;
    githubLink?: string;
    videoLink?: string;

}
