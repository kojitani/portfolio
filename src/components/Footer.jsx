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
    [theme.fn.smallerThan('900')]: {
      backgroundColor: 'white',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 2rem',
    [theme.fn.smallerThan('450')]: {
      justifyContent: 'center',
    },
  },
  links: {
    [theme.fn.smallerThan('450')]: {
      display: 'none',
    },
  },
  text: {
    color: 'white',
    [theme.fn.smallerThan('900')]: {
      color: 'black',
    },
  },
  icons: {
    color: 'white',
    [theme.fn.smallerThan('900')]: {
      color: 'black',
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className="footer-bar">
      <div className={classes.footer}>
        <Container fluid className={classes.inner}>
          <Text inherit className={classes.text} fz="sm">
            Copyright © 2023 Koji Taniguchi
          </Text>

          <Group spacing={0} position="right" noWrap className={classes.links}>
            <Tooltip withArrow color="dark.5" label="Go to Github">
              <ActionIcon
                variant="transparent"
                size="lg"
                component="a"
                name="Github link"
                href="https://github.com/kojitani"
                target="_blank"
              >
                <IconBrandGithub
                  className={classes.icons}
                  size="1.5rem"
                  stroke={2}
                />
              </ActionIcon>
            </Tooltip>
            <Tooltip withArrow color="blue.9" label="Go to LinkedIn">
              <ActionIcon
                variant="transparent"
                size="lg"
                component="a"
                name="LinkedIn link"
                href="https://www.linkedin.com/in/koji-taniguchi96/"
                target="_blank"
              >
                <IconBrandLinkedin
                  className={classes.icons}
                  size="1.5rem"
                  stroke={2}
                />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Container>
      </div>
    </div>
  );
}
