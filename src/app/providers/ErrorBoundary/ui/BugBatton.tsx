import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface BugBattonProps {
    className?: string;
}

export const BugBatton = ({ className } : BugBattonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            className={className}
        >
            {t('Показать ошибку')}
        </Button>
    );
};
