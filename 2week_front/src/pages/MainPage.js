import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Posts from "../components/Post/Posts";
import Pagination from "../components/Post/Pagination";
import PostItem from "../components/Post/PostItem";
import {getPosts} from "../lib/api"
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
      	// 	const res = await getPosts()//await axios.get("/board");
        //     console.log(res) 
        //     setTotalPosts(res.data.list)
        //     setPosts(res.data.list);
      	// 	setLoading(false);
    	// };
        // fetchPosts();


        // /*테스팅 데이터 */
        const test_data =[
            {
                postId: 1234,
                title: '거짓',
                username: '작성자1',
                createdAt: 20200807,
                body:'blhajasdlfsadlfkj',
                isChat: false,
            },
            {
                postId: 1235,
                title: '참',
                username: '작성자2',
                body:'qw;ierjwel;krj',
                createdAt: 20200805,
                isChat: true
            },
            {
                postId: 12342,
                title: '참',
                username: '작성자2',
                body:'qwerlwqekrn;kln',
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
     const PostHeader = {postId: 'No.',title: '제목',username: '작성자',isHeader:''}


    return (
    <>
    <div className="container ">
        <div className="FilterbtnContainer"><button onClick={FilterChat}>{flag?"잡답거르기":"잡답보기"}</button></div>

        <div className="BoardContainer">    <
            ul className="BoardHeader">
      <PostItem post={PostHeader}></PostItem>
      </ul>
      <Posts posts={currentPosts} loading={loading} />
    </div>
    <div>
<div><Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} /></div>
    <div className="WriteButtonContainer"><Link to="/write"><button>글쓰기</button></Link> </div>  
    </div>
    </div>

    </>
        )
}
export default MainPage