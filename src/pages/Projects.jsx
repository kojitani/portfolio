import { createStyles, Text, Title, Button, rem, Badge } from '@mantine/core';
import {
  IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconExternalLink,
  IconZoomIn,
  IconZoomOut,
  IconArrowsMinimize,
  IconArrowsMaximize,
} from '@tabler/icons-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';

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
    [theme.fn.smallerThan('900')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '50%',
    overflow: 'hidden',
    [theme.fn.smallerThan('900')]: {
      maxWidth: '100%',
    },
  },

  body: {
    width: '50%',
    [theme.fn.smallerThan('900')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
      width: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
    fontFamily: 'Sen, san-serif',
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
      body: 'VanVenture is a camper van rental website, which allows users to  rent a camper van or rent out their unused RV to earn passive income. This website also has a dedicated dashboard that allows hosts to login and monitor their van listings.',
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
      body: 'MinimaList is a chrome extension that replaces the new tab page with a beautiful minimal Todo list experience to help keep track of your tasks and increase your productivity. MinimaList allows users to toggle recurring tasks, edit current tasks and customize the background to their own liking.',
      source: 'https://github.com/kojitani/MinimaList',
      demo: 'https://chrome.google.com/webstore/detail/minimalist-minimal-new-ta/nneeoeklioiioldpmlbllnffdffagaim?hl=en&authuser=0',
    },
  ];
  const projectElements = projectData.map((project, i) => {
    return (
      <motion.div
        initial={{ transform: ' translateX(200%)' }}
        animate={{ transform: ' translateX(0%)' }}
        transition={{
          ease: [1, -0.09, 0.17, 1.1],
          duration: (i + 1) * 1,
          delay: 1,
        }}
        exit={{ opacity: 1 }}
        className={classes.wrapper}
        key={i}
      >
        <div className={classes.body}>
          <Title className={classes.title}>{project.title}</Title>
          <Text inherit fw={500} fz="lg" mb={5}>
            {project.body}
          </Text>
          <div className={classes.controls}>
            <Badge
              leftSection={<IconBrandHtml5 stroke={2.5} />}
              size="xl"
              color="orange"
            >
              HTML
            </Badge>
            <Badge
              leftSection={<IconBrandCss3 stroke={2.5} />}
              size="xl"
              color="blue"
            >
              CSS
            </Badge>
            <Badge
              leftSection={<IconBrandJavascript stroke={2.5} />}
              size="xl"
              color="yellow"
            >
              JavaScript
            </Badge>
            {i === 0 && (
              <Badge
                leftSection={<IconBrandReact stroke={2.5} />}
                size="xl"
                color="cyan"
              >
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
          <IconArrowsMaximize
            alt="Zoom in project image"
            className="project-img-zoom"
            onClick={() => document.querySelector(`#project-img-${i}`).click()}
          />
          <Zoom IconZoom={IconArrowsMaximize} IconUnzoom={IconArrowsMinimize}>
            <img
              style={{ width: '100%', objectFit: 'cover', height: 'auto' }}
              src={`/images/${project.title}.webp`}
              alt={`${project.title} preview image`}
              id={`project-img-${i}`}
            ></img>
          </Zoom>
        </div>
      </motion.div>
    );
  });
  return (
    <motion.div className="projects-container">
      <div
        className="container "
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <h1 id="projects-title" data-text="Projects">
          Projects
        </h1>

        {projectElements}
      </div>
    </motion.div>
  );
}
