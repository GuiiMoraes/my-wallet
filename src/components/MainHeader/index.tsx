import React, { useCallback } from 'react';

import { randomEmoji } from 'utils';

import { useAuth } from 'context/auth';
import { useTheme } from 'context/theme';

import Switcher from 'components/Switcher';
import { Container, SwitcherWrapper, Profile } from './styles';

const MainHeader: React.FC = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const emoji = randomEmoji();

  const handleToogleTheme = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <Container>
      <SwitcherWrapper>
        <span role="img" aria-label="moon emoji">
          🌙
        </span>
        <Switcher
          onChange={handleToogleTheme}
          checked={theme.title === 'light'}
        />
        <span role="img" aria-label="sun emoji">
          🌞
        </span>
      </SwitcherWrapper>

      <Profile>
        <strong>Hello, {emoji}</strong>
        <p>{user?.name}</p>
      </Profile>
    </Container>
  );
};

export default MainHeader;
