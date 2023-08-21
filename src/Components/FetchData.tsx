interface Post{
    userid: number;
    id:number;
    title:string;
    body:string;
}

const fetchPosts =async():Promise<Post[]> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
};

export default fetchPosts;