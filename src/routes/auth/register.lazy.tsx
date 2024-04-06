import { Container, Text } from '@radix-ui/themes';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/auth/register')({
  component: () => (
    <div>
      <Container>
        <Text align="center" as="p">
          Hello /auth/register!
        </Text>
      </Container>
    </div>
  ),
});
