{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }

  type VideoMetadata = Omit<Video, 'url' | 'data'>; // 기존 type에서 뺄것만 골라 새로운 type을 만듦 (pick의 반대)

  function getVideo(id: string) : Video{
    return {
      id,
      title: 'video',
      url: 'http://..',
      data: 'byte-data..',
    };
  }

  function getVideoMetadata(id:string): VideoMetadata{
    return {
      id: id,
      title: 'title',
    }
  }
}