import AuthGuard from 'app/auth/AuthGuard'
import NotFound from 'app/views/sessions/NotFound'
import chartsRoute from 'app/views/charts/ChartsRoute'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import usersRoutes from 'app/views/users/UsersRoutes'
import polosRoutes from 'app/views/polos/PolosRoutes'
import registrationRoutes from 'app/views/registration/RegistrationRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'

export const AllPages = () => {
    const all_routes = [
        {
            element: (
                <AuthGuard>
                    <MatxLayout />
                </AuthGuard>
            ),
            children: [...usersRoutes, ...chartsRoute, ...materialRoutes, ...polosRoutes, ...registrationRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="/usuarios" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
