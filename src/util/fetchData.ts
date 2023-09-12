export async function fetchAPI(params: string = "/authentication") {
	const res = await fetch(`https://api.themoviedb.org/3${params}`, {
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGMyYTU3MjFiNmE5NWVkNjRiMWQxMjU4NWQyYjc4NSIsInN1YiI6IjY0OWQzZWQ5YzlkYmY5MDBhY2JhMTRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2wEhBxvxnOgnBRIXdx1dH9y_6j0CAgJAjb1X-W9Cl8k",
		},
		method: "GET",
	});
	return await res.json();
}
