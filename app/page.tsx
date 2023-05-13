import Header from '@/components/Header'
import Image from 'next/image'
import { sanityClient } from '../sanity'
import {Post} from "../typings"
import Link from 'next/link'

interface Props{
  posts:Post[]

}

function Home({posts}:Props) {
  console.log(posts);
  return (
    <div className="mx-auto max-w-7xl ">
      <Header/>

      <div className='flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0'>
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{' '}
            is a place to write, read and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect with millions of readers.
          </h2>
        </div>
        <img src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" className='hidden h-32 md:inline-flex lg:h-full'/>
      </div>

      <div className='grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 mg:gap-6 md:p-6 lg:grid-cols-3 '>
        {
          posts.map((post:Post)=>(
              <Link href={`/`} key={post._id}>
                <div className="group cursor-pointer overflow-hidden rounder-lg border">
                    <img src={urlFor(post.mainImage).url()} alt=""/>
                    <div className='flex justify-between bg-white p-5'>
                      <div>
                          <p className='text-lg font-bold'>
                            {post.title}
                          </p>
                          <p className="text-xs">
                              {post.description} by {post.author.name}
                          </p>
                      </div>
                      <img  className="h-12 wi-12 rounded-full" src={urlFor(post.author.image).url()} alt=""/>

                    </div>
                </div>
              </Link>
          ))
        }

      </div>
    </div>
    
  )
}

export default Home

export const getServerSideProps = async()=>{
  try{
    const query = `*[_type=="post"]{
      _id,
        title,
        slug,
        author->{
          name,
          image
        },
      mainImage,
        description
    }`
    const posts= await sanityClient.fetch(query);
    return {
      props:{

      }
    }
  }catch(error){

  }
}