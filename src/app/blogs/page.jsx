import Link from "next/link";

const BlogsPage = () => {

    const blogs = [
        {
            id: 1,
            title: "Getting Started with React",
            author: "Pias Majumdar",
            date: "2026-04-15",
            category: "Web Development",
            content: "React is a popular JavaScript library for building user interfaces. It helps create reusable components and makes UI development faster and more efficient.",
            tags: ["react", "javascript", "frontend"],
            readTime: "5 min"
        },
        {
            id: 2,
            title: "Understanding useEffect Hook",
            author: "Pias Majumdar",
            date: "2026-04-16",
            category: "React",
            content: "The useEffect hook allows you to perform side effects in functional components such as fetching data, updating the DOM, or setting up subscriptions.",
            tags: ["react", "hooks", "useEffect"],
            readTime: "6 min"
        },
        {
            id: 3,
            title: "Tailwind CSS Basics",
            author: "Pias Majumdar",
            date: "2026-04-17",
            category: "CSS",
            content: "Tailwind CSS is a utility-first CSS framework that helps you build modern UI designs directly in your markup without writing custom CSS.",
            tags: ["tailwind", "css", "design"],
            readTime: "4 min"
        },
        {
            id: 4,
            title: "JavaScript Array Methods Explained",
            author: "Pias Majumdar",
            date: "2026-04-18",
            category: "JavaScript",
            content: "Array methods like map, filter, and reduce are essential for working with data in JavaScript. They help write cleaner and more functional code.",
            tags: ["javascript", "arrays", "ES6"],
            readTime: "7 min"
        }
    ];


    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Blogs</h2>
            {blogs.map(blog => <div key={blog.id}>
                <h3 className="text-4xl font-bold mb-2">
                    {blog.title}
                </h3>
                <Link href={'/'}>Show Details</Link>
            </div>)}
        </div>
    );
};

export default BlogsPage;