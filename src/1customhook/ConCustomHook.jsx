import { useFetch } from '../hooks/useFetch';

const apiBaseUrl = 'https://api.github.com';
const urlQuery = `${apiBaseUrl}/orgs/Developero-oficial/repos?sort=created`;

export const ConCustomHook = () => {
  const { data, isFetching, error } = useFetch(urlQuery);
  console.log(data, isFetching, error);

  if (isFetching) {
    return 'Loading...';
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    return null;
  }
  return data.map(({ name, html_url }) => (
    <div key={html_url}>
      <p>
        <a href={html_url} target='_blank' rel='noopener noreferrer'>
          {name}
        </a>
      </p>
    </div>
  ));
};
