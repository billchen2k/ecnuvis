/*
 * contentlayer.config.ts: Contentlayer configurations.
 * See https://www.contentlayer.dev/docs/getting-started for more documention.
 * Project: ecnuvis
 * Created: 2023-06-06 18:51:30
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-06 20:41:57
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
import {isoDateFromFileName} from './src/lib/util';
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

export const Pages = defineDocumentType(() => ({
  name: 'Pages',
  filePathPattern: `pages/*.md`,
  contentType: 'markdown',
  computedFields: {
    page: {
      type: 'string', resolve: (item) => item._raw.sourceFileName.split('.')[0],
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [News, Pages],
});
