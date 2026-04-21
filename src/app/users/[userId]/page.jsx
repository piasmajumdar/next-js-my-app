import Link from "next/link";
import { use } from "react";

const UserDetailPage = async ({params}) => {
    const {userId} = await params;
    console.log('Show me userId', userId)

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await res.json();
    console.log(user)

    return (
        <div>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <Link href={'/users'}><button className="btn">Go Back</button></Link>
            
        </div>
    );
};

export default UserDetailPage;