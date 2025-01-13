import '@fontsource/barlow'
import '@fontsource/outfit'
import '@fontsource/roboto-condensed'
import './styles/index.css'

import './api/soundcloudWidget'

import { Grid } from './components/Grid'
import { GridImage } from './components/GridImage'
import { Header } from './components/Header'
import { SoundcloudPlayer } from './components/SoundcloudPlayer'

const Items_ = [
  [
    'Santa Hat',
    'December 2024 drop',
    'https://media.istockphoto.com/id/183296619/photo/a-festive-red-and-white-santa-hat-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=8ms7_SRViSNTrcJup1RDsLjncrwo3ilJ5kSl5qeai8o=',
  ],
  [
    'This Guys Hat',
    'December 2024 drop',
    'https://m.media-amazon.com/images/I/71Z4vA7ALoL._AC_SX569_.jpg',
  ],
  ['Dino Hat', 'June 2024 drop', 'https://m.media-amazon.com/images/I/71+M9BwrF8L._AC_SY741_.jpg'],
]
const Items = [...Items_, ...Items_, ...Items_]

export const App = () => {
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
          {Items.map((item) => (
            <GridImage src={item[2]} title={item[0]} subtitle={item[1]} />
          ))}
        </Grid>
      </div>
    </>
  )
}
