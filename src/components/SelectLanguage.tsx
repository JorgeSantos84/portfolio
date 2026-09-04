import FlagsSelect from 'react-flags-select';
import { useToggleLanguage } from '../context/LanguageContext';
import '../App.css';

function SelectLanguage() {
  const { language, toggleLanguage } = useToggleLanguage();

  return (
    <>
      {/* Flag Select Dropdown */}
      <FlagsSelect
        selected={language}
        onSelect={toggleLanguage}
        countries={['PT', 'GB']} // Include Portugal and UK flags
        customLabels={{ PT: 'PT', GB: 'EN' }}
        selectedSize={14}
        className="flag-select-button"
      />
    </>
  );
}

export default SelectLanguage;
