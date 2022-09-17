import { Container } from "@chakra-ui/react"

import { LinkButton } from "~/components/LinkButton"

export default function Index() {
  return (
    <Container>
      <LinkButton to="/posts">Blog Posts</LinkButton>
    </Container>
  )
}
