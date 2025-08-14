// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-our-abstract-learning-latent-embedding-of-multi-modal-single-cell-data-and-cross-modality-relationship-simultaneously-is-accepted-as-flashtalk-and-poster-in-cshl-2021-look-forward-to-see-you-there",
          title: 'Our abstract Learning latent embedding of multi-modal single cell data and cross-modality relationship...',
          description: "",
          section: "News",},{id: "news-our-paper-inference-of-high-resolution-trajectories-in-single-cell-rna-seq-data-by-using-rna-velocity-is-accepted-by-cell-report-methods-please-check-it-out-with-the-link",
          title: 'Our paper Inference of high-resolution trajectories in single-cell RNA-seq data by using RNA...',
          description: "",
          section: "News",},{id: "news-our-abstract-integrating-unmatched-scrna-seq-and-scatac-seq-data-and-learning-cross-modality-relationship-simultaneously-is-accepted-as-spotlight-presentation-in-mlcb-2021-look-forward-to-see-you-there",
          title: 'Our abstract Integrating unmatched scRNA-seq and scATAC-seq data and learning cross-modality relationship simultaneously...',
          description: "",
          section: "News",},{id: "news-our-paper-scdart-integrating-unmatched-scrna-seq-and-scatac-seq-data-and-learning-cross-modality-relationship-simultaneously-is-accepted-by-genome-biology-please-check-it-out-with-the-link",
          title: 'Our paper scDART: integrating unmatched scRNA-seq and scATAC-seq data and learning cross-modality relationship...',
          description: "",
          section: "News",},{id: "news-our-paper-scmomat-jointly-performs-single-cell-mosaic-integration-and-multi-modal-bio-marker-detection-is-accepted-by-nature-communications-please-check-it-out-with-the-link",
          title: 'Our paper scMoMaT jointly performs single cell mosaic integration and multi-modal bio-marker detection...',
          description: "",
          section: "News",},{id: "news-our-paper-scdisinfact-disentangled-learning-for-integration-and-prediction-of-multi-batch-multi-condition-single-cell-rna-sequencing-data-is-accepted-by-nature-communications-please-check-it-out-with-the-link",
          title: 'Our paper scDisInFact: disentangled learning for integration and prediction of multi-batch multi-condition single-cell...',
          description: "",
          section: "News",},{id: "news-i-will-be-interning-at-genentech-south-san-francisco-office-this-summer-i-will-be-primarily-working-on-spatial-transcriptomics-looking-forward-to-meeting-you-there",
          title: 'I will be interning at Genentech South San Francisco office this summer, I...',
          description: "",
          section: "News",},{id: "news-our-paper-scmultisim-simulation-of-single-cell-multi-omics-and-spatial-data-guided-by-gene-regulatory-networks-and-cell-cell-interactions-is-accepted-by-nature-methods-please-check-it-out-with-the-link",
          title: 'Our paper scMultiSim: simulation of single-cell multi-omics and spatial data guided by gene...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%69%71%69.%7A%68%61%6E%67@%67%61%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/PeterZZQ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8198-0260", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=dB6AtwgAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Ziqi_Peter", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
