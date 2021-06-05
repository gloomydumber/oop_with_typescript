{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }

  type VideoMetadata = Pick<Video, 'id' | 'title'>; // 기존 type에서 원하는 것만 골라 새로운 type을 만듦

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