import Link from 'next/link';
import Layout from '../components/myLayout';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import {useState} from 'react';

const initialNoteList = [{
    note: 'first',
    dateTimeSec: 123
}];

const Reminder = props => {    
   
    const [note, setNote] = useState('');
    const [noteList, setNoteList] = useState(initialNoteList);
    const [date, setDate] = useState(0);

    const handleSubmit = (e) => { 
                
        const newNoteList = [...noteList];
        const newNote = {
            note: note,
            dateTimeSec: date
        }; 
        newNoteList.push(newNote);
        setNoteList(newNoteList);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label> 
                Input note 
                <input
                    type='text'
                    placeholder='Add note'
                    value={note}
                    onChange={(e) => {
                        const val = e.target.value;
                        setNote(val);
                    }}
                />
            </label>
            </div>
            <div>
            <label> 
                Input date in sec
                <input
                    type='text'
                    placeholder='Add date in sec'
                    value={date}
                    onChange={(e) => {
                        const val = e.target.value;
                        setDate(val);
                    }}
                />
            </label>
            </div>
            <div>
                <input type='submit' value='Submit'/>
            </div>
           
            <ul>
            {
                noteList && noteList.map((item, index) => (
                    <li key={index}>
                        {item.note} at time {item.dateTimeSec}
                    </li>
                ))
            }            
            </ul>
        </form>
    );
};

//export default Reminder;

const PostLink = ({ post }) => (
    <li>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.name}</a>
        </Link>
        <style jsx>
            {
                `li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: blue;
                    font-family: 'Arial';
                }

                a:hover {
                    opacity: 0.6;
                }
                `
            }
        </style>
    </li>
);

const Index = props => (
    <Layout>
        <h1> Suits show </h1>
        <ul>
            {
                props.shows.map(item => (                   
                    <PostLink key={item.id} post={item} />                   
                ))
            }
        </ul>
        <style jsx>
            {
                `h1 {
                    font-family: 'Arial';
                }

                ul {
                    padding: 0;
                }                
                `
            }
        </style>
        <Reminder />
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=suits');
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(item => item.show)
    };
};

export default Index;

// 1st
// export default function Index() {
//     return (
//         <Layout>           
//             <p> Hello Next.js! </p>
//         </Layout>
//     );
// }

//2nd
// const PostLink = props => (
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );

// const PostLinkNew = props => (
//     <li>
//         <Link href="/p/[id]" as={`/p/${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// );

// export default function Blog () {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink title="hi Next.js" />
//                 <PostLink title="Learn Next.js is awesome" />                
//                 <PostLink title="Deploy apps with Zeit" />
//                 <PostLinkNew id="hello-nextjs"/>
//                 <PostLinkNew id="deploy-nextjs"/>
//                 <PostLinkNew id="learn-nextjs"/>
//             </ul>
//         </Layout>
//     )
// };