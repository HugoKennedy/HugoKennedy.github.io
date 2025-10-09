// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HugoKennedy', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * Custom name to display instead of GitHub profile name
   * Leave empty to use GitHub profile name
   */
  customName: 'Hugo Kennedy',
  /**
   * Custom bio to display instead of GitHub profile bio
   * Leave empty to use GitHub profile bio
   */
  customBio: 'Engineering student at SKKU and Institut Polytechnique de Paris',
  /**
   * Custom location to display instead of GitHub profile location
   * Leave empty to use GitHub profile location
   */
  customLocation: 'Versailles',
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Personal Website',
          description:
            'My personal portfolio website built with React and TypeScript, showcasing my projects and experience.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/HugoKennedy/HugoKennedy.github.io',
        },
        {
          title: 'AI Photo Detection',
          description:
            'Research project on artificial intelligence for photo detection and analysis using machine learning techniques.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://drive.google.com/file/d/18DsTQAk19zBcFAPK0csuXIKJJS6qj8kU/view?usp=drive_link',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Hugo Kennedy', description: '', imageURL: '' },
  social: {
    linkedin: 'hugotheengineer',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '0650116300',
    email: 'hugo.kennedy2004@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1D4VercwNBbzK62I6vBZ5_A_0PVVbNtWm/view?usp=sharing', // Empty fileUrl will hide the `Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'C/C++',
    'Matlab',
    'SQL',
    'HTML/CSS',
    'Docker',
  ],
  experiences: [
    {
      company: 'Bouygues Telecom',
      position: 'Intern',
      from: 'June 2025',
      to: 'August 2025',
      companyLink: 'https://www.bouyguestelecom.fr',
    },
    {
      company: 'Oral Examiner for French Engineering Schools',
      position: 'Oral Examiner',
      from: 'September 2024',
      to: 'June 2025',
      companyLink: '',
    },
    {
      company: 'Station F',
      position: 'Intern',
      from: 'June 2025',
      to: 'August 2025',
      companyLink: 'https://stationf.co',
    },
  ],
  certifications: [
    {
      name: 'Python for M.L. by Kaggle',
      body: 'Machine Learning certification from Kaggle Learn',
      year: '2024',
      link: 'https://www.kaggle.com/learn/python',
    },
  ],
  educations: [
    {
      institution: 'SKKU',
      degree: 'Exchange Student',
      from: 'September 2025',
      to: 'Present',
    },
    {
      institution: 'Telecom SudParis',
      degree: 'Engineering Student',
      from: 'September 2024',
      to: 'July 2025',
    },
    {
      institution: 'CPGE lycée Hoche',
      degree: 'Preparatory Classes',
      from: 'September 2022',
      to: 'July 2024',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
};

export default CONFIG;
