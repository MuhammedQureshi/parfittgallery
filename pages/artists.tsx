import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const { data } = await supabaseAdmin.from('artists').select('*').order('id')
  return {
    props: {
      artists: data,
    },
  }
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Artist = {
  id: number
  name: string
  bio: string
  profileImgSrc: string
}

export default function Artists({ artists }: { artists: Artist[] }) {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen mb- bg-fixed bg-center bg-cover cstm-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-8 right-0 bg-black z-[2]' />
        <div className='p-5 text-white z-[2] bg-black'>
          <h2 className='text-5xl font-bold '>Artists</h2>
        </div>
      </div>

      <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-1'>
        <div className='col-span-3'>
          {artists.map((artist) => (
            <div key={artist.id} className='flex flex-row items-start gap-8'>
              <ArtistImage src={artist.profileImgSrc} />
              <ArtistBio name={artist.name} bio={artist.bio} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function ArtistImage({ src }: { src: string }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className='relative flex-shrink-0 w-96 h-96'>
      <img
        className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'
        src={src}
        alt=''
        onLoad={() => setLoading(false)}
        style={isLoading ? { filter: 'blur(20px)' } : {}}
      />
    </div>
  )
}

function ArtistBio({ name, bio }: { name: string, bio: string }) {
  return (
    <div className='flex-1'>
      <h3 className='text-xl text-gray-900 mt-20 text-center'>{name}</h3>
      <p className='py-2 text-gray-500 mt-4'>{bio}</p>
    </div>
  )
}