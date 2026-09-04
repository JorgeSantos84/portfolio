import Avatar from '@mui/material/Avatar';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();
  let descriptionSplit: string[] = t('hero.description').split('.');
  return (
    <section
      id="home"
      className=" flex w-full items-start justify-center px-6 py-20"
    >
      <div className="flex w-full max-w-7xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex max-w-[850px] flex-col items-center gap-5 text-center md:items-start md:text-left">
          <p className="text-[20px] font-medium tracking-tight text-var(--text-h) md:text-[25px]">
            {t('hero.title')}{' '}
            <WavingHandRoundedIcon className="inline-block text-[#d9a27a]" />
          </p>
          <p className="text-[40px] font-semibold tracking-tight text-var(--text-h) md:text-[50px]">
            <span className="text-[var(--default-purple)]">Back</span>end{' '}
            {t('hero.jobTitle')}
          </p>
          <p className="max-w-[850px] text-[20px] font-medium leading-relaxed text-var(--text) md:text-[25px]">
            {descriptionSplit.map((sentence, index) => (
              <span key={index}>
                {sentence}.
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="flex justify-center px-5 md:justify-end xl:px-20">
          <div
            className="flex aspect-square items-center w-[200px]
          justify-center overflow-hidden rounded-full 
          border-[2px] border-[var(--accent-border)] p-[20px] md:w-[280px] lg:w-[320px]"
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
    </section>
  );
}

export default Hero;
