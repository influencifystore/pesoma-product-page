import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const ProductPage = lazy(() => import("@/pages/ProductPage"));

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ProductPage />
    </Suspense>
  ),
});

const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product",
  component: () => (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ProductPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([indexRoute, productRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
