/*
 * contentlayer.config.ts: Contentlayer configurations.
 * See https://www.contentlayer.dev/docs/getting-started for more documention.
 * Project: ecnuvis
 * Created: 2023-06-06 18:51:30
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-11-02 02:39:33
 * Modified By: Bill Chen (bill.chen@live.com)
 */
import {getBlurData} from './src/lib/ssr';
import {getItemImageURL, isoDateFromFileName} from './src/lib/util';
import {defineDocumentType, makeSource} from '@contentlayer/source-files';

export const News = defineDocumentType(() => ({
  name: 'News',
  filePathPattern: `news/*.md`,
  contentType: 'markdown',
  fields: {
    title: {type: 'string', required: true},
    titleAlt: {type: 'string', required: false},
    description: {type: 'string', required: false},
    descriptionAlt: {type: 'string', required: false},
    date: {type: 'string', required: false},
  },
  computedFields: {
    dateCalc: {
      type: 'date', resolve: (item) => isoDateFromFileName(item._raw.sourceFileName, item.date),
    },
    id: {
      type: 'string', resolve: (item) => item._raw.sourceFileName.split('_').slice(1).join('_').split('.')[0],
    },
  },
}));

const Picture = defineDocumentType(() => ({
  name: 'Picture',
  filePathPattern: `gallery/*.md`,
  contentType: 'markdown',
  fields: {
    title: {type: 'string', required: true},
    subTitle: {type: 'string', required: false},
    description: {type: 'string', required: false},
    image: {type: 'string', required: true},
    date: {type: 'string', required: false},
  },
  computedFields: {
    dateCalc: {
      type: 'date', resolve: (item) => isoDateFromFileName(item._raw.sourceFileName, item.date),
    },
    id: {
      type: 'string', resolve: (item) => item._raw.sourceFileName.split('_').slice(1).join('_').split('.')[0],
    },
    blurData: {
      type: 'string', resolve: (item) => {
        return getBlurData(getItemImageURL('gallery', item.image));
      },
    },
  },
}));

export const People = defineDocumentType(() => ({
  name: 'People',
  filePathPattern: `people/*.md`,
  contentType: 'markdown',
  fields: {
    name: {type: 'string', required: true},
    nameAlt: {type: 'string', required: false},
    image: {type: 'string', required: false},
    category: {type: 'enum', required: true, options: ['phd', 'master', 'undergraduate', 'visiting', 'staff', 'alumni']},
    year: {type: 'number', required: true},
    description: {type: 'string', required: false},
    email: {type: 'string', required: false},
    github: {type: 'string', required: false},
    homepage: {type: 'string', required: false},
    order: {type: 'number', required: false},
  },
  computedFields: {
    id: {
      type: 'string', resolve: (item) => item._raw.sourceFileName.split('.')[0],
    },
    emailReducted: {
      type: 'string', resolve: (item) => {
        return item.email ? item.email.replace('@', ' [at] ') : '';
      },
    },
    blurData: {
      type: 'string', resolve: (item) => {
        return getBlurData(getItemImageURL('people', item.image));
      },
    },
  },
}));

export const Publication = defineDocumentType(() => ({
  name: 'Publication',
  filePathPattern: `publication/*.md`,
  contentType: 'markdown',
  fields: {
    title: {type: 'string', required: true},
    authors: {type: 'list', required: true, of: {type: 'string'}},
    tag: {type: 'list', required: false, of: {type: 'string'}},
    venue: {type: 'string', required: false},
    abstract: {type: 'string', required: false},
    image: {type: 'string', required: false},
    date: {type: 'string', required: false},
    paper: {type: 'string', required: false},
    code: {type: 'string', required: false},
    video: {type: 'string', required: false},
    website: {type: 'string', required: false},
    doi: {type: 'string', required: false},
  },
  computedFields: {
    dateCalc: {
      type: 'date',
      resolve: (item) => isoDateFromFileName(item._raw.sourceFileName, item.date),
    },
    blurData: {
      type: 'string', resolve: (item) => {
        return getBlurData(getItemImageURL('publication', item.image));
      },
    },
  },
}));

export const Pages = defineDocumentType(() => ({
  name: 'Pages',
  filePathPattern: `pages/*.mdx`,
  contentType: 'mdx',
  computedFields: {
    page: {
      type: 'string', resolve: (item) => item._raw.sourceFileName.split('.')[0],
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  contentDirExclude: ['templates'],
  documentTypes: [News, Pages, People, Publication, Picture],
});
