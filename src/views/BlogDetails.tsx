import { useLocation } from 'react-router-dom';

interface LocationState {
  id: string;
  title: string;
  description: string;
}

export const BlogDetails: React.FC = () => {
  const location = useLocation();

  const locationState = location.state as LocationState;
  return (
    <div>
      <p>{locationState.id}</p>
      <p>{locationState.title}</p>
      <p>{locationState.description}</p>
    </div>
  );
};
