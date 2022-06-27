/** @jsxImportSource @emotion/react */
import { button, wrapper, link, linkWrapper } from './Header.styles';

interface Props {
  onLogin: () => void;
}

export const Header: React.FC<Props> = ({ onLogin }) => {
  return (
    <header css={wrapper}>
      <p>Router Exercise</p>
      <div css={linkWrapper}>
        <a css={link}>Home</a>
        <a css={link}>Info</a>
        <a css={link}>Blog</a>
        <button onClick={onLogin} css={button}>
          Change status
        </button>
      </div>
    </header>
  );
};
