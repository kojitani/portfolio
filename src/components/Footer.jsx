import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
  Tooltip,
} from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  footer: {
    height: '60px',
    backgroundColor: '#527ebd',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 2rem',
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
        // boxShadow: '0 0 10px rgba(0,0,0,.09)',
        position: 'relative',
        zIndex: '1',
        backgroundColor: 'transparent',
      }}
    >
      <div className={classes.footer}>
        <Container fluid className={classes.inner}>
          <Text inherit color="white" fz="sm">
            Copyright © 2023 Koji Taniguchi
          </Text>

          <Group spacing={0} position="right" noWrap className={classes.links}>
            <Tooltip withArrow color="dark.5" label="Go to Github">
              <ActionIcon
                size="lg"
                component="a"
                href="https://github.com/kojitani"
                target="_blank"
              >
                <IconBrandGithub color="white" size="1.5rem" stroke={2} />
              </ActionIcon>
            </Tooltip>
            <Tooltip withArrow color="blue.9" label="Go to LinkedIn">
              <ActionIcon
                size="lg"
                component="a"
                href="https://www.linkedin.com/in/koji-taniguchi96/"
                target="_blank"
              >
                <IconBrandLinkedin color="white" size="1.5rem" stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Container>
      </div>
    </div>
  );
}
