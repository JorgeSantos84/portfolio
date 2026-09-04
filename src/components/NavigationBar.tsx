import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MessageIcon from '@mui/icons-material/Message';
import ThemeToggleButtonProps from './ThemeToggleButton';
import SelectLanguage from './SelectLanguage';

type NavItem = {
  label: string;
  key: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', key: 'nav.home', href: '/' },
  { label: 'Work', key: 'nav.work', href: '/#work' },
  { label: 'Projects', key: 'nav.projects', href: '/projects' },
];

const contactItem: NavItem = {
  label: 'Contact',
  key: 'nav.contact',
  href: '/contact',
};

function NavigationBar() {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState<string>(navItems[0].href);

  return (
    <header className="w-full bg-var(--bg) md:flex-row max-w-7xl">
      <nav
        className="relative mx-auto flex h-[50px] max-w-[2048px] items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="text-[15px] font-bold tracking-tight text-var(--text-h)"
          onClick={() => setActiveLink(navItems[0].href)}
        >
          JorgeSantos<span className="text-[#6538c9]">.</span>
        </a>

        {/* Desktop navigation */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeLink === item.href;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.href);
                  }}
                  className={`text-[20px] font-semibold tracking-tight transition-colors duration-200 ${
                    isActive
                      ? 'text-[#6538c9]'
                      : 'text-[#4b515b] hover:text-[#6538c9]'
                  }`}
                >
                  {t(item.key)}
                </a>
              </li>
            );
          })}
          <li key={contactItem.label.toLowerCase()}></li>
        </ul>
        <div className="flex items-center gap-1">
          <SelectLanguage />
          <ThemeToggleButtonProps containerClassName="" withBorder={false} />
          <a
            href={contactItem.href}
            onClick={() => setActiveLink(contactItem.href)}
            className={`text-[20px] font-semibold tracking-tight transition-colors duration-200 ${
              activeLink === contactItem.href
                ? 'text-[#6538c9]'
                : 'text-var(--text-h) hover:text-[#6538c9]'
            }`}
          >
            <MessageIcon className="text-var(--text-h)" fontSize="small" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;
