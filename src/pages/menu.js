const menus = [
  {
    id: 2,
    name: 'Work',
    links: '/authors-01',
  },
  {
    id: 3,
    name: 'Projects',
    links: '/explore-02',
  },
  {
    id: 4,
    name: 'Community',
    links: '#',
    namesub: [
      {
        id: 2,
        sub: 'Youtube Channel',
        links: '/blog-details',
      },
      {
        id: 3,
        sub: 'Local Meetups',
        links: '/activity-01',
      },
    ],
  },
  {
    id: 7,
    name: 'Contact',
    links: '/contact-02',
    // namesub: [
    //   {
    //     id: 1,
    //     sub: 'Contact 1',
    //     links: '/contact-01',
    //   },
    // ],
  },
  {
    id: 1,
    name: 'Resume',
    links: '/FAQ',
    // namesub: [
    //   {
    //     id: 1,
    //     sub: 'Home 01',
    //     links: '/',
    //   },
    // ],
  },
];

export default menus;
