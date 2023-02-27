import { useEffect, useState } from 'react';
import { getData } from '../helper/getData';

const apiBaseUrl = 'https://api.github.com';
const urlQuery = `${apiBaseUrl}/orgs/Developero-oficial/repos?sort=created`;

export const SinCustomHook = () => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    const data = getData(urlQuery)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

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
