const query = `
  {
    user(username: "gladysluke") {
      publication {
        posts {
          slug
          title
          brief
          coverImage
        }
      }
    }
  }
`

export default query;