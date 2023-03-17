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
import { Link } from 'react-router-dom';
import image from '/images/vanventure.jpg';

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
    maxWidth: '40%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,
    width: '60%',
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
          <div className={classes.controls}>
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
        <Image
          src={`/images/${project.title}.jpg`}
          alt={`${project.title} image`}
          className={classes.image}
          radius="lg"
        />
      </div>
    );
  });
  return <div className="projects-container container">{projectElements}</div>;
}
