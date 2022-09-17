import { Container } from "@chakra-ui/react"
import { Link } from "@remix-run/react"

export default function Index() {
  return (
    <Container>
      <Link to="/posts">Blog Posts</Link>
    </Container>
  )
}
