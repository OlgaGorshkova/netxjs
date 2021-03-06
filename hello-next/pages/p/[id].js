//import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';


// export default function Post() {
//   const router = useRouter();

//   return (
//     <Layout>
//       <h1>{router.query.id}</h1>
//       <p>This is the blog post content.</p>
//     </Layout>
//   );
// }

const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        <div className='markdown'>
            <Markdown 
                source={`This is our blog post.
                Yes. We can have a [link](/link).
                And we can have a title as well.
                ### This is a title                
                And here's the content`}
            />
        </div>
        <p>{props.show && props.show.summary && props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        {props.show.image ? <img src={props.show.image.medium} /> : <p></p>}
        <style jsx global>
            {
                `.markdown {
                    font-family: 'Arial';
                  }
          
                  .markdown a {
                    text-decoration: none;
                    color: blue;
                  }
          
                  .markdown a:hover {
                    opacity: 0.6;
                  }         
                  
                `
            }       
        </style>
    </Layout>
);

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show };
};

export default Post;