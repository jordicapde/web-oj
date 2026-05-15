import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Qui som?',
      href: getPermalink('/qui-som'),
    },
    {
      text: 'Notícies',
      href: getPermalink('/noticies'),
    },
    {
      text: 'Osona en Joc',
      href: getPermalink('/osona-en-joc-2026'),
    },
    /*{
      text: 'Ludoteca',
      links: [
        { text: 'Els nostres jocs', href: getPermalink('/ludoteca/1') },
        { text: 'Glossari', href: '/glossari' },
      ],
    },
    {
      text: 'Socis i amics',
      links: [
        { text: 'Socis', href: getPermalink('/socis/1') },
        { text: 'Soci del mes', href: '/socis/soci-del-mes' },
        { text: 'Amics', href: '/amics' },
      ],
    },*/
    {
      text: 'Contacte',
      href: getPermalink('/contacte'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Associació',
      links: [
        { text: 'Qui sóm?', href: '/qui-som' },
        { text: 'Socis', href: '/socis' },
        { text: 'Amics', href: '/amics' },
      ],
    },
    {
      title: 'Notícies',
      links: [{ text: 'Bloc de notícies', href: '/noticies' }],
    },
    {
      title: 'Ludoteca',
      links: [
        { text: 'Els nostres jocs', href: '/ludoteca' },
        { text: 'Glossari', href: '/glossari' },
      ],
    },

    {
      title: 'Contacte',
      links: [
        { text: 'Fer-se soci', href: '/contacte' },
        { text: 'Email', href: 'mailto:osonajuga@gmail.com' },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Política de privacitat', href: getPermalink('/politica-de-privacitat') }],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/OsonaJuga' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/OsonaJuga' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/osonajuga/' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://www.discord.com/osonajuga/' },
  ],
  footNote: `
    2024 · Tots els drets reservats.
  `,
};
('Plaça Onze de setembre, s/n, 08506 Calldetenes, Barcelona');
