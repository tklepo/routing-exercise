/** @jsxImportSource @emotion/react */
import { button, wrapper, link, linkWrapper } from './Header.styles';
import { Link } from 'react-router-dom';

interface Props {
  onLogin: () => void;
}

export const Header: React.FC<Props> = ({ onLogin }) => {
  return (
    <header css={wrapper}>
      <p>Router Exercise</p>
      <div css={linkWrapper}>
        <a css={link}>
          <Link to="/home">Home</Link>
        </a>
        <a css={link}>
          <Link to="/info">Info</Link>
        </a>
        <a css={link}>
          <Link to="/blog">Blog</Link>
        </a>
        <button onClick={onLogin} css={button}>
          Change status
        </button>
      </div>
    </header>
  );
};
