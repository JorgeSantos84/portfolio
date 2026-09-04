import React, { useEffect } from 'react';
import i18n from '../i18n';

interface LanguageContextType {
  language: string;
  toggleLanguage: (language: string) => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

// Create a context with a default value of undefined
const LanguageContextCreation = React.createContext<
  LanguageContextType | undefined
>(undefined);

function i18nLanguageToContextLanguage(i18nLanguage: string): string {
  switch (i18nLanguage) {
    case 'en':
      return 'GB';
    case 'pt':
      return 'PT';
    default:
      return 'GB'; // Default to English if the language is not recognized
  }
}

function contextLanguageToI18nLanguage(contextLanguage: string): string {
  switch (contextLanguage) {
    case 'GB':
      return 'en';
    case 'PT':
      return 'pt';
    default:
      return 'en'; // Default to English if the language is not recognized
  }
}

export const LanguageContextProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const languageFromSessionStorage = sessionStorage.getItem('language');
  const initialLanguage = languageFromSessionStorage
    ? languageFromSessionStorage
    : i18nLanguageToContextLanguage(i18n.language);
  const [language, setLanguage] = React.useState<string>(initialLanguage);

  useEffect(() => {
    i18n.changeLanguage(contextLanguageToI18nLanguage(initialLanguage));
  }, []);

  const toggleLanguage = (newLanguage: string) => {
    sessionStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
    i18n.changeLanguage(contextLanguageToI18nLanguage(newLanguage));
  };
  return (
    <LanguageContextCreation.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContextCreation.Provider>
  );
};

export const useToggleLanguage = (): LanguageContextType => {
  const context = React.useContext(LanguageContextCreation);
  if (!context) {
    throw new Error(
      'useToggleLanguage must be used within a LanguageContextProvider',
    );
  }
  return context;
};
