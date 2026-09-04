import type { SvgIconProps } from '@mui/material/SvgIcon';
interface SmallContactInfoProps {
  contactInfo: string;
  SvgIcon: React.ElementType<SvgIconProps>;
  onClick?: () => void;
}

function SmallContactInfo({
  contactInfo,
  SvgIcon,
  onClick,
}: SmallContactInfoProps): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row gap-4 items-center">
        <div
          className="flex aspect-square items-center w-[15px]
          justify-center overflow-hidden rounded-full 
          border-[2px] border-t-[var(--default-purple)] p-[15px] md:w-[20px] lg:w-[20px]"
        >
          <SvgIcon
            style={{ fontSize: '20px' }}
            className="text-[var(--text)]"
          />
        </div>
        {onClick ? (
          <span onClick={onClick} className="cursor-pointer">
            <p className="text-center">{contactInfo}</p>
          </span>
        ) : (
          <span>
            <p className="text-center">{contactInfo}</p>
          </span>
        )}
      </div>
    </div>
  );
}

export default SmallContactInfo;
