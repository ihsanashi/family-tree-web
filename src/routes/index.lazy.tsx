import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Tooltip,
} from '@radix-ui/themes';
import { Link, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <Box
      height="100vh"
      width="100vw"
      style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}
    >
      <Container size="4" height="100%">
        <Heading align="center" size="9" className="mt-4">
          Welcome!
        </Heading>
        <Heading align="center" size="2" weight="regular" className="pt-4">
          This is the home page for Fam
        </Heading>
        <Section>
          <Flex align="center" direction="row" gap="2" justify="center">
            <Tooltip content="Login to your existing account" maxWidth="200px">
              <Link to="/auth/login">
                <Button className="hover:cursor-pointer" color="indigo">
                  Log in
                </Button>
              </Link>
            </Tooltip>
            <Tooltip content="Create a new account" maxWidth="200px">
              <Link to="/auth/register">
                <Button className="hover:cursor-pointer" color="indigo">
                  Register
                </Button>
              </Link>
            </Tooltip>
          </Flex>
        </Section>
      </Container>
    </Box>
  );
}
