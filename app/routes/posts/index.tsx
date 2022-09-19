import { List, ListItem } from "@chakra-ui/react"
import { json, LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { LinkButton } from "~/components/LinkButton"
import { getPosts } from "~/models/post.server"

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>
}

export const loader: LoaderFunction = async (event) => {
  console.log(event.request.mode)
  return json<LoaderData>({
    posts: await getPosts(),
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
