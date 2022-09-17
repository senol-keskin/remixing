import { Button } from "@chakra-ui/react"
import { Link } from "@remix-run/react"

export const LinkButton = (props) => {
  return (
    <Button as={Link} {...props}>
      {props.children}
    </Button>
  )
}
