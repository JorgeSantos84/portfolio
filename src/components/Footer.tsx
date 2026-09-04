import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { openEmailClient, openNewTab } from '../utils/contactFunctions';
import { useTranslation } from 'react-i18next';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="pt-[30px] pb-[5px] flex justify-between w-full max-w-7xl flex-row">
      <div className="container mx-auto text-left">
        &copy; {new Date().getFullYear()}{' '}
        <FavoriteIcon
          fontSize="small"
          sx={{ paddingBottom: '4px', color: 'var(--default-purple)' }}
        />{' '}
        Made by Jorge Santos
      </div>
      <div className="pr-[1%] flex flex-row">
        <span
          className="flex pr-[10px] cursor-pointer"
          onClick={() =>
            openNewTab('https://www.linkedin.com/in/jorge-mosantos/')
          }
        >
          <LinkedInIcon />
        </span>
        <span
          className="flex cursor-pointer"
          onClick={() =>
            openEmailClient({
              email: 'jorgesantos84@gmail.com',
              subject: t('email.subject'),
              body: t('email.body'),
            })
          }
        >
          <EmailIcon />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
