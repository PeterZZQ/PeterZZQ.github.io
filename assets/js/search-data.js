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
        },{id: "news-our-abstract-learning-latent-embedding-of-multi-modal-single-cell-data-and-cross-modality-relationship-simultaneously-is-accepted-as-flashtalk-and-poster-in-cshl-2021-look-forward-to-see-you-there",
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
