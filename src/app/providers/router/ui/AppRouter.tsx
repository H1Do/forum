import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(
        () => Object
            .values(routeConfig)
            .filter((route) => !(route.authOnly && !isAuth)),
        [isAuth],
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    routes
                        .map(({ path, element }) => (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    (
                                        <div className="page-wrapper">
                                            {element}
                                        </div>
                                    )
                                }
                            />
                        ))
                }
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
