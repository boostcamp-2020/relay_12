import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Posts from "../components/Post/Posts";
import Pagination from "../components/Post/Pagination";
import PostItem from "../components/Post/PostItem";

import './mainpage.css'

const MainPage = ()=>{



    const [TotalPosts,setTotalPosts] = useState([]);
    const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1); 
    const [postsPerPage] = useState(2); 
    const [flag,setFlag] =useState(true)


    const FilterChat = ()=>{
        if(flag){
        let filtered = TotalPosts.filter((e)=>{return !e.isChat})
        setPosts(filtered)
        setCurrentPage(1)}
        else{
            setPosts(TotalPosts)
            setCurrentPage(1)
        }
        setFlag(!flag)
    }


  	useEffect(() => {
    	// 	const fetchPosts = async () => {
      	// 	setLoading(true);
      	// 	const res = await axios.get("/board");
      	// 	setPosts(res.data);
      	// 	setLoading(false);
    	// };

        // fetchPosts();
        const test_data =[
            {
                postId: 1234,
                title: '제목1',
                username: '작성자1',
                createdAt: 20200807,
                isChat: false,
            },
            {
                postId: 1235,
                title: '제목2',
                username: '작성자2',
                createdAt: 20200805,
                isChat: true
            },
            {
                postId: 12342,
                title: '제2',
                username: '작성자2',
                createdAt: 20200805,
                isChat: true
            },
        ]
        setTotalPosts(test_data)
        setPosts(test_data)
        setLoading(false)
     }, []);   
     
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
     const paginate = (pageNumber) => setCurrentPage(pageNumber);
     const PostHeader = {postId: 'No.',title: '제목',username: '작성자',}


    return (
    <>
    <div className="container ">
        <div className="FilterbtnContainer"><button onClick={FilterChat}>{flag?"잡답거르기":"잡답보기"}</button></div>

        <div className="BoardContainer">    <
            ul className="BoardHeader">
      <PostItem className="hi" post={PostHeader}></PostItem>
      </ul>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
    </div>

    </>
        )
}
export default MainPage