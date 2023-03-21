import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '@mantine/core';
import { motion } from 'framer-motion';
export default function About() {
  const date = new Date();
  const navigate = useNavigate();
  let greetings;
  if (date.getHours() >= 5 && date.getHours() < 12) {
    greetings = 'Good Morning!';
  } else if (date.getHours() >= 12 && date.getHours() < 17) {
    greetings = 'Good Afternoon!';
  } else {
    greetings = 'Good Evening!';
  }

  return (
    <>
      <div className="about-container ">
        <div className="container">
          <h1 id="about-title" data-text={greetings}>
            {greetings}
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <Text inherit fz="xl">
              I'm Koji, a self-taught front-end developer based in Kyoto, Japan.
              I am passionate about creating functional and responsive websites
              that are both aesthetically pleasing and easy to use. I am most
              experienced with{' '}
              <Text
                span
                variant="gradient"
                gradient={{ from: 'yellow.4', to: 'yellow.7', deg: 45 }}
                ta="center"
                fz="xl"
                fw={700}
                inherit
              >
                JavaScript
              </Text>
              ,{' '}
              <Text
                span
                variant="gradient"
                gradient={{ from: 'blue.2', to: 'blue.5', deg: 45 }}
                ta="center"
                fz="xl"
                fw={700}
                inherit
              >
                React
              </Text>
              ,{' '}
              <Text
                span
                variant="gradient"
                gradient={{ from: 'orange.5', to: 'orange.9', deg: 45 }}
                ta="center"
                fz="xl"
                fw={700}
                inherit
              >
                HTML
              </Text>
              , and{' '}
              <Text
                span
                variant="gradient"
                gradient={{ from: 'blue.6', to: 'blue.9', deg: 45 }}
                ta="center"
                fz="xl"
                fw={700}
                inherit
              >
                CSS
              </Text>{' '}
              and I am always looking to expand my skills and knowledge.
            </Text>
            <Text inherit fz="xl">
              Although I don't have a lot of professional experience yet, I have
              worked on a few projects that I'm proud of. One of my recent
              projects,{' '}
              <Text
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  display: 'inline-block',
                }}
                inherit
                onClick={() => navigate('/projects')}
              >
                VanVenture
              </Text>
              , is a website that allows users to rent a camper van or rent out
              their unused one to earn passive income. This website also has a
              dedicated dashboard that allows hosts to login and monitor their
              van listings.
            </Text>
            <Text inherit fz="xl">
              In my free time, I enjoy consuming fantasy and horror genre TV
              shows/movies and playing video games. I'm always looking for new
              opportunities to learn and collaborate with other developers, so
              if you're interested in working together, feel free to{' '}
              <Text
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  display: 'inline-block',
                }}
                inherit
                onClick={() => navigate('/contact')}
              >
                contact me.
              </Text>
            </Text>{' '}
          </motion.div>
        </div>
      </div>
    </>
  );
}
