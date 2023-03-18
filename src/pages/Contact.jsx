import {
  Text,
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
const social = [
  { icon: IconBrandGithub, text: 'You can find my code on Github' },
  { icon: IconBrandLinkedin, text: 'View my LinkedIn profile' },
];
export default function Contact() {
  const [sentForm, setSentForm] = useState(false);

  const icons = social.map((Item, index) => (
    <div
      key={index}
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
    >
      <Item.icon size="1.5rem" stroke={1.5} />
      <Link
        to={
          Item.icon === IconBrandGithub
            ? 'https://github.com/kojitani'
            : 'https://www.linkedin.com/in/koji-taniguchi96/'
        }
        target="_blank"
        className="contact-link"
      >
        {Item.text}
      </Link>
    </div>
  ));
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: value => value.trim().length < 2,
      email: value => !/^\S+@\S+$/.test(value),
      subject: value => value.trim().length === 0,
    },
  });
  function handleSubmit() {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        form.reset();
        setSentForm(true);
        setTimeout(() => {
          setSentForm(false);
          notifications.show({
            title: 'Email sent',
            message: 'Thank you, I will respond as soon as possible.',
            autoClose: 5000,
            color: 'teal',
            icon: <IconCheck size="1rem" />,
          });
        }, 500);
      })
      .catch(error => alert(error));
  }
  return (
    <div className="contact-container container">
      <div className="form-container">
        <h1>Contact me</h1>
        <div className="form-seperator-container">
          <div className="contact-side-container">
            <Text fz="lg" fw={600}>
              If you have a question or just want to say hi, I’ll get back to
              you as soon as I can! You can find me on social media, or please
              fill in the form to contact me.
            </Text>

            {icons}
          </div>
          <div className="contact-main-container">
            <form
              name="contact"
              onSubmit={form.onSubmit(event => {
                handleSubmit(event);
              })}
            >
              <input type="hidden" name="form-name" value="contact" />

              <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  name="name"
                  variant="filled"
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  name="email"
                  variant="filled"
                  {...form.getInputProps('email')}
                />
              </SimpleGrid>

              <TextInput
                label="Subject"
                placeholder="Subject"
                mt="md"
                name="subject"
                variant="filled"
                {...form.getInputProps('subject')}
              />
              <Textarea
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
                {...form.getInputProps('message')}
              />

              <Group position="right" mt="xl">
                <Button
                  loading={sentForm}
                  variant="light"
                  type="submit"
                  size="md"
                >
                  Send message
                </Button>
              </Group>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
