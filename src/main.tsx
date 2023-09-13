import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Error, Movie } from "./pages";

const queryClient = new QueryClient();
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
	},
	{
		path: "movie/:movieId",
		element: <Movie />,
		errorElement: <Error />,
	},
	{
		path: "error",
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
