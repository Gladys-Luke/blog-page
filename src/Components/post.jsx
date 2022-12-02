
const Post = ({ post }) => {
  return (
    <section className="flex justify-center items-center text-center  ">
      <div className="border border-gray-200 w-[30%] rounded-lg shadow-md flex flex-col items-center">

          <img className="w-full rounded-t-lg h-[200px]" src={post.coverImage} alt={post.title}/>
          <div className="p-5 bg-white">
            <h2 className=" my-3 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h2>
            <p className="font-normal text-gray-70 mb-5">{post.brief}</p>
            <a 
              href={`https://gladysluke.hashnode.dev/${post.slug}`} className="inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Read more →
              </a>
          </div>
        </div>
    </section>
  )
}

export default Post;


