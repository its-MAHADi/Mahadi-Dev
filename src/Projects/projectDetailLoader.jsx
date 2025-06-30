export const projectDetailLoader = async ({ params }) => {
  const res = await fetch('/projectsData.json');

  if (!res.ok) {
    throw new Response('Failed to load projects data', { status: res.status });
  }

  const projectData = await res.json();

 const project = projectData.find((p) => p.id === parseInt(params.id));


  if (!project) {
    throw new Response('Not Found', { status: 404 });
  }

  return project;
};