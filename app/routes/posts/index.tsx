import { List, ListItem } from "@chakra-ui/react"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { LinkButton } from "~/components/LinkButton"

type Post = {
  slug: string
  title: string
}

type LoaderData = {
  posts: Array<Post>
}

export const loader = async () => {
  return json<LoaderData>({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
      },
    ],
  })
}

export default function Posts() {
  const { posts } = useLoaderData() as LoaderData

  return (
    <main>
      <h1>Posts</h1>
      <List>
        {posts.map((post) => (
          <ListItem key={post.slug}>
            <LinkButton to={post.slug}>{post.title}</LinkButton>
          </ListItem>
        ))}
      </List>
    </main>
  )
}
