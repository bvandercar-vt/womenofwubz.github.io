import '@fontsource/barlow'
import '@fontsource/outfit'
import '@fontsource/roboto-condensed'
import './styles/index.css'

import './api/soundcloudWidget'

import type { Asset, EntryFieldTypes, EntrySkeletonType } from 'contentful'
import { createClient } from 'contentful'
import { isString } from 'lodash'
import { useEffect, useState } from 'react'
import { Grid } from './components/Grid'
import { GridImage } from './components/GridImage'
import { Header } from './components/Header'
import { SoundcloudPlayer } from './components/SoundcloudPlayer'

type Product = EntrySkeletonType<{
  image: EntryFieldTypes.AssetLink
  title?: EntryFieldTypes.Text
  subtitle?: EntryFieldTypes.Text
  number?: EntryFieldTypes.Integer
  price?: EntryFieldTypes.Number
  soldOut?: EntryFieldTypes.Boolean
  type?: EntryFieldTypes.Text
}>

export const App = () => {
  const [data, setData] = useState<ContentfulResponse>()

  const contentfulClient = createClient({
    space: 'pjsrst0mmdyo',
    accessToken: 'C4coD3wjKuYJ7EN1qiQOLZsHc9mvPGUNVnEomku8HVk',
  })

  type ContentfulResponse = Awaited<ReturnType<typeof contentfulClient.getEntries<Product>>>

  useEffect(() => {
    contentfulClient
      .getEntries<Product>({
        content_type: 'product',
        order: ['-fields.number'],
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => alert(error))
  }, [])

  return (
    <>
      <Header />
      <div id="main-body">
        <SoundcloudPlayer
          href="https://soundcloud.com/marisa-kerstanski/sets/womanhood-of-wubz-vol-3"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1922773207&color=%23ff00d0&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
          title="Womanhood Of Wubz - Volume 3"
        />
        <Grid>
          {data &&
            data.items.map((item) => {
              const { image, title, subtitle, number, type, price, soldOut } = item.fields

              const url = (image as Asset)?.fields?.file?.url
              if (!url || !isString(url)) return null

              return (
                <GridImage
                  src={url}
                  title={
                    <>
                      {title} {<span className="type">{type}</span>}
                    </>
                  }
                  subtitle={subtitle}
                  number={number}
                  price={price}
                  soldOut={soldOut}
                />
              )
            })}
        </Grid>
      </div>
    </>
  )
}
