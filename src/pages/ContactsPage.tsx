import Avatar from '@mui/material/Avatar';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation } from 'react-i18next';
import SmallContactInfo from '../components/SmallContactInfo';
import { useToggleLanguage } from '../context/LanguageContext';
import {
  openEmailClient,
  openNewTab,
  openPhoneCall,
} from '../utils/contactFunctions';

function ContactsPage() {
  const { t } = useTranslation();
  const { language } = useToggleLanguage();
  return (
    <div className="flex flex-1 w-full max-w-7xl flex-row items-center justify-center gap-4 bg-[var(--bg)]">
      <div className="flex w-full flex-row justify-between gap-4 p-1">
        <div className="flex flex-col items-start gap-4">
          <p className="text-[40px] font-semibold tracking-tight text-var(--text-h) md:text-[50px]">
            <span className="text-[var(--default-purple)]">
              {t('contacts.title').split(/[\s-]+/)[0]}
            </span>
            {language === 'GB' ? ' ' : '-'}
            {t('contacts.title').split(/[\s-]+/)[1]}
            <span className="text-[var(--default-purple)]">.</span>
          </p>
          <p className="text-left max-w-[600px] text-[20px] font-medium leading-relaxed text-var(--text)">
            {t('contacts.description')}
          </p>
          <SmallContactInfo
            contactInfo="935 687 502"
            SvgIcon={SmartphoneIcon}
            onClick={() => openPhoneCall('935 687 502')}
          />
          <SmallContactInfo
            contactInfo="jorgesantos84@gmail.com"
            SvgIcon={EmailIcon}
            onClick={() =>
              openEmailClient({
                email: 'jorgesantos84@gmail.com',
                subject: t('email.subject'),
                body: t('email.body'),
              })
            }
          />
          <SmallContactInfo
            contactInfo="https://www.linkedin.com/in/jorge-mosantos/"
            SvgIcon={LinkedInIcon}
            onClick={() =>
              openNewTab('https://www.linkedin.com/in/jorge-mosantos/')
            }
          />
          <SmallContactInfo
            contactInfo="Braga, Portugal"
            SvgIcon={LocationOnIcon}
          />
        </div>
        <div className="flex justify-center px-1 md:justify-end">
          <div
            className="flex aspect-square items-center w-[240px]
          justify-center overflow-hidden rounded-full 
          border-[2px] border-[var(--accent-border)] p-[20px] md:w-[300px] lg:w-[360px]"
          >
            <Avatar
              alt="Jorge Santos"
              src="/src/assets/JorgeSantosPortMain.png"
              className="h-full w-full rounded-full object-cover"
              sx={{
                width: '100%',
                height: '100%',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
