import React from 'react';
import { Title, Text, Button } from '@mantine/core';
export default function Home() {
  return (
    <div className="home-container ">
      <div className="container">
        <Title className="home-welcome" color="gray.9" order={4}>
          Welcome, my name is
        </Title>
        <h1 id="home-title" data-text="Koji Taniguchi." className="home-name">
          Koji Taniguchi.
        </h1>
        <Title order={1} color="dark.3" className="home-intro">
          I build things for the web.
        </Title>
        <Text
          fz="lg"
          color="dark.5"
          inherit
          style={{ maxWidth: '540px', margin: '2rem 0' }}
        >
          Self-taught developer, passionate about creating functional and
          responsive websites. I have most experience with{' '}
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
          </Text>
          .
        </Text>
        <Button
          component="a"
          size="lg"
          href="/about"
          color="dark.9"
          variant="outline"
        >
          More about me
        </Button>
      </div>
    </div>
  );
}
