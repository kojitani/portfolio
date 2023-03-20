import { useEffect, useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Avatar,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
const HEADER_HEIGHT = rem(60);

const useStyles = createStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 3,
    boxShadow: '0 0 10px rgba(0,0,0,.09)',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('900')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('900')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('900')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
    fontFamily: 'Space Mono, sans-serif',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('900')]: {
      borderRadius: 0,
      padding: '1.5rem 2rem',
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

export default function HeaderNav() {
  const location = useLocation();
  const links = [
    {
      link: 'about',
      label: 'About',
    },
    {
      link: 'projects',
      label: 'Projects',
    },

    {
      link: 'contact',
      label: 'Contact',
    },
  ];
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(location.pathname.slice(1));
  const { classes, cx } = useStyles();

  const items = links.map(link => (
    <Link
      key={link.label}
      to={`/${link.link}`}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      <Text inherit fz="lg">
        {link.label}
      </Text>
    </Link>
  ));

  useEffect(() => {
    const burgerOverlay = document.querySelector('.burger-active-overlay');
    if (!burgerOverlay) return;
    const closeOverlay = () => close();
    burgerOverlay.addEventListener('click', closeOverlay);
  }, [opened]);

  return (
    <>
      {opened && <div className="burger-active-overlay"></div>}

      <Header height={HEADER_HEIGHT} className={classes.root}>
        <Container
          style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}
          fluid
          className={`${classes.header} `}
        >
          <Link
            to="/"
            onClick={() => {
              setActive(null);
              close();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'black',
              gap: '0.5rem',
            }}
          >
            <Avatar
              size="md"
              radius="xl"
              src="https://media.licdn.com/dms/image/C4D03AQH9aDGjiwk6nw/profile-displayphoto-shrink_800_800/0/1610674419691?e=1684368000&v=beta&t=zMWxwtspMrl2qe-bZCKiPfzk1Rsj7vW3kjetEaPd4PY"
              alt="Koji Taniguchi Profile Picture"
            />
            <Text sx={{ fontFamily: 'Tilt Neon, sans-serif' }} fz="lg">
              Koji Taniguchi
            </Text>
          </Link>

          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="md"
          />
          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {styles => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </>
  );
}
