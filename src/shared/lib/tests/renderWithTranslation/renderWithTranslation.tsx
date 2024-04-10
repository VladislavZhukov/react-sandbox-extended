import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export const renderWithTranslation = (component: ReactElement) => {
    return render(
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
    );
};
