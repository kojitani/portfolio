import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  rem,
  Badge,
} from '@mantine/core';
import {
  IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconExternalLink,
} from '@tabler/icons-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const useStyles = createStyles(theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.sm} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '50%',
    overflow: 'hidden',
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    width: '50%',
    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
      width: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    gap: '1rem',
    marginTop: theme.spacing.xl,
  },
  buttons: {
    [theme.fn.smallerThan('450')]: {
      flexDirection: 'column-reverse',
    },
  },
}));

export default function Projects() {
  const { classes } = useStyles();
  const projectData = [
    {
      title: 'VanVenture',
      body: 'VanVenture is a camper van rental website, which allows users to both rent an camper van or rent out their unused RV to earn passive income. This website also has a dedicated dashboard that allows hosts to login and monitor their van listings.',
      source: 'https://github.com/kojitani/vanventure',
      demo: 'https://vanventure.netlify.app',
    },
    {
      title: 'BrainDump',
      body: 'BrainDump is a chrome extension that allows users to quickly and easily save notes, memos, and ideas directly from their browser. With this extension, users can capture their thoughts and ideas as they come, without having to switch to a separate note-taking app or program.      ',
      source: 'https://github.com/kojitani/BrainDump',
      demo: 'https://chrome.google.com/webstore/detail/braindump-notes-anywhere/bdocpglgpbkkkjlkgjebjgolehkimejb',
    },
    {
      title: 'MinimaList',
      body: 'MinimaList is a chrome extension that replaces the new tab page with a beautiful minimal Todo list experience to help keep track of your tasks and increase your productivity.',
      source: 'https://github.com/kojitani/MinimaList',
      demo: 'https://chrome.google.com/webstore/detail/minimalist-minimal-new-ta/nneeoeklioiioldpmlbllnffdffagaim?hl=en&authuser=0',
    },
  ];
  const projectElements = projectData.map((project, i) => {
    return (
      <div className={classes.wrapper} key={i}>
        <div className={classes.body}>
          <Title className={classes.title}>{project.title}</Title>
          <Text fw={500} fz="lg" mb={5}>
            {project.body}
          </Text>
          <div className={classes.controls}>
            <Badge leftSection={<IconBrandHtml5 />} size="xl" color="orange">
              HTML
            </Badge>
            <Badge leftSection={<IconBrandCss3 />} size="xl" color="blue">
              CSS
            </Badge>
            <Badge
              leftSection={<IconBrandJavascript />}
              size="xl"
              color="yellow"
            >
              JavaScript
            </Badge>
            {i === 0 && (
              <Badge leftSection={<IconBrandReact />} size="xl" color="cyan">
                React
              </Badge>
            )}
          </div>
          <div className={`${classes.controls} ${classes.buttons}`}>
            <Button
              component="a"
              href={project.source}
              variant="default"
              target="_blank"
              rightIcon={<IconBrandGithub size="1.3rem" />}
            >
              Source Code
            </Button>

            <Button
              component="a"
              href={project.demo}
              variant="default"
              target="_blank"
              rightIcon={<IconExternalLink size="1.3rem" />}
            >
              Live Demo
            </Button>
          </div>
        </div>
        <div className={classes.image}>
          <Zoom>
            <img
              style={{ width: '100%', objectFit: 'cover', height: 'auto' }}
              src={`/images/${project.title}.jpg`}
            ></img>
          </Zoom>
        </div>
      </div>
    );
  });
  return (
    <div className="projects-container">
      <div
        className="container "
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <h1>Projects</h1>

        {projectElements}
      </div>
    </div>
  );
}
