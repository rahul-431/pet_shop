import Image from "next/image";
import Link from "next/link";

const BlogCard = (blog: BlogType) => {
  const { _id, author, image, title, createdAt, text } = blog.blog;
  return (
    <div className="flex flex-col gap-4 rounded-md shadow-md shadow-gray-300">
      <div className="relative rounded-md w-full h-60 sm:h-72 bg-gray-100">
        <Image
          src={image ? image : "/dog.png"}
          layout="fill"
          alt="Pet's image"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col gap-3 px-4">
        <h1 className="text-lg sm:text-2xl font-medium">{title}</h1>
        <p className="text-gray-500 text-base">
          {text.slice(0, 180)}
          {".... "}
          <Link href={`/blog/${_id}`} className="text-yellow-600 underline">
            READ MORE
          </Link>
        </p>
        <div className="flex justify-between items-center py-2">
          <p className="text-base font-medium">- By {author}</p>
          <p className="text-base font-medium">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
