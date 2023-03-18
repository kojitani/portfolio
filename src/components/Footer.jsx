import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
} from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  footer: {
    height: '60px',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    [theme.fn.smallerThan('xs')]: {
      justifyContent: 'center',
    },
  },
  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div
      style={{
        boxShadow: '0 0 10px rgba(0,0,0,.09)',
        position: 'relative',
        zIndex: '1',
      }}
    >
      <div className={`${classes.footer} container`}>
        <Container fluid className={classes.inner}>
          <Text sx={{ fontFamily: 'Tilt Neon, sans-serif' }} fz="md">
            Copyright © 2023 Koji Taniguchi
          </Text>

          <Group spacing={0} position="right" noWrap className={classes.links}>
            <ActionIcon
              size="lg"
              component="a"
              href="https://github.com/kojitani"
              target="_blank"
              title="Github link"
            >
              <IconBrandGithub size="1.5rem" stroke={2} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              component="a"
              href="https://www.linkedin.com/in/koji-taniguchi96/"
              target="_blank"
              title="Linkedin link"
            >
              <IconBrandLinkedin size="1.5rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </div>
    </div>
  );
}
