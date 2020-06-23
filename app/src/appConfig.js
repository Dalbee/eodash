module.exports = [
  {
    id: 'esa',
    match: ['race.esa.int', 'eodash.eox.at', 'eodash-staging.eox.at', 'eodash-testing.eox.at', 'localhost2'],
    branding: {
      appName: 'Rapid Action on coronavirus and EO',
      primaryColor: '#003247',
      secondaryColor: '#0098DB',
      headerLogo: './eodash-data/general/RACE_Logo.png',
      faviconPath: './public/img/ESA/favicon.ico',
    },
    pageMeta: {
      rootPath: 'https://race.esa.int',
      googleSiteVerification: 'RfWilP51Q2wsZnVlKbxUTovIx90QqqLRFLebGpAeq14',
      shortDescription: 'The RACE platform demonstrates how the use of EO data can help shed new light on societal and economic changes currently taking place owing to the coronavirus pandemic.',
      twitterCardImagePath: '/img/ESA/twitter_card.jpg',
    },
    displayDummyLocations: './eodash-data/data/dummylocations.csv',
    storyPath: '/eodash-data/stories/',
    customCSS: 'esa',
    aboutText: '/eodash-data/general/about',
    welcomeText: '/eodash-data/general/welcome',
    showNewsCarousel: true,
    newsCarouselitems: [
      {
        poi: 'NorthAdriatic-N3a2',
        src: './eodash-data/general/Slide1.png',
      },
      {
        poi: 'PL1-E1a',
        src: './eodash-data/general/Slide2.png',
      },
      {
        poi: 'World-N1',
        src: './eodash-data/general/Slide3.png',
      },
      {
        poi: 'DE11-E10a1',
        src: './eodash-data/general/Slide4.png',
      },
    ],
    privacyText: '/eodash-data/general/privacy',
    termsText: '/eodash-data/general/terms',
    countDownTimer: '2020-06-05T12:00:00.000+02:00',
    countDownMatch: ['race.esa.int', 'eodash.eox.at'],
  },
  {
    id: 'trilateral',
    match: ['eodashboard.org', 'www.eodashboard.org', 'eodash-trilateral.eox.at', 'eodash-trilateral-staging.eox.at', 'eodash-trilateral-testing.eox.at', 'localhost'],
    branding: {
      appName: 'Earth Observing Dashboard',
      primaryColor: '#333333',
      headerLogo: './data/trilateral/Trilateral_Logo.svg',
    },
    pageMeta: {
      rootPath: 'https://race.esa.int',
      googleSiteVerification: 'RfWilP51Q2wsZnVlKbxUTovIx90QqqLRFLebGpAeq14',
      shortDescription: 'The RACE platform demonstrates how the use of EO data can help shed new light on societal and economic changes currently taking place owing to the coronavirus pandemic.',
      twitterCardImagePath: '/img/ESA/twitter_card.jpg',
    },
    displayDummyLocations: './data/trilateral/dummylocations.csv',
    storyPath: '/data/trilateral/',
    customCSS: 'trilateral',
    aboutText: '/data/trilateral/about',
    welcomeText: '/data/trilateral/welcome',
    showNewsCarousel: true,
    newsCarouselitems: [
      {
        poi: 'JP01-N2',
        src: './data/trilateral/Slide1.png',
      },
      {
        poi: 'NorthAdriaticESA-N3a2',
        src: './data/trilateral/Slide2.png',
      },
      {
        poi: 'FR01-N1',
        src: './data/trilateral/Slide3.png',
      },
      {
        poi: 'W2-N1',
        src: './data/trilateral/Slide4.png',
      },
    ],
    privacyText: '/data/trilateral/privacy',
    termsText: '/data/trilateral/terms',
  },
];
