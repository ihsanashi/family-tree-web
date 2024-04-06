import { Container, Text } from '@radix-ui/themes';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/auth/login')({
  component: () => (
    <div>
      <Container>
        <Text align="center" as="p">
          Hello /auth/login!
        </Text>
      </Container>
    </div>
  ),
});
