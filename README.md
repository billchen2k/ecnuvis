# ECNUVIS

This is the website for the ECNUVIS lab ([https://ecnuvis.net](https://ecnuvis.net)), built with [next.js](https://nextjs.org/).


## Content Management

All the website content (people, publication, news, gallery items) is stored in the `content` directory and all the images are stored in the `public/images/{people,publication,news,gallery}` directory. We use [markdown frontmatters](https://jekyllrb.com/docs/front-matter/) to store fields for each content document.

You can refer to the templates in the `content/templates/` directory for all supported fields and their corresponding descriptions for a specific type of content.

### Document Naming

We have two naming conventions for documents in the `content` directory:

- **Dated**: for `news`, `publication` and `gallery` items, the document name should be in the format of `YYYYMMDD_slug.md`, where `YYYYMMDD` is the date of the news, publication or gallery item, and `slug` is a short name for the item. For example, `20231001_paper.md` in the `publication` folder is a paper item with the date `20231001` and the slug of `paper`. If no date is specified in the filename, these documents must provide a `date` attribute in the frontmatter, otherwise we cannot sort them properly.
- **Undated**: for `people`, the document name should be in the format of `id.md`, where `id` is a unique identifier for the person. We recommend using the last two digits of your year of enrollment and your name as the ID. For example, `23sanzhang.md` is a person with the ID of `23sanzhang`, whose URL is `/people#23sanzhang`.


### Example

Here is a guide for you to update your personal information:

1. Fork this repo.
2. Clone your forked repo.
3. (Optional) Create a new branch.
4. Update/Add your personal information in the `content/people/` directory, and put your photo inside the `public/images/people` directory.
5. Commit your changes and push them to your forked repo.
6. Create a pull request.

Be sure to run the website locally to check if your changes are correct before creating a pull request.

## Run it locally

```bash
git clone https://github.com/billchen2k/ecnuvis
yarn
yarn dev
```

Note: the Mapbox view in the contact page will not work locally unless you provide your own Mapbox token in the `.env.local` file (see `.env.example`).

## Contribution

If you find any bugs or have any suggestions, feel free to open an issue or create a pull request.