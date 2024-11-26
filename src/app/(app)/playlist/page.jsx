import songService from "@/services/api/songService";
import {
  SongCard,
  SongImage,
  SongTitle,
  SongSubTitle,
  SongContent,
} from "./song";

export default async function PlaylistPage() {
  const songs = await songService.getAll().then((res) => res.data);
  return (
    <div>
      {songs.map((song, index) => (
        <SongCard key={song.id}>
          <SongImage url={song.url} />
          <SongContent>
            <SongTitle>{song.title}</SongTitle>
            <SongSubTitle>{song.artist}</SongSubTitle>
          </SongContent>
        </SongCard>
      ))}
    </div>
  );
}
