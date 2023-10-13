import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugBatton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugBatton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
