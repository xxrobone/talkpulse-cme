export interface Post {
    file?: File;
    title: string;
  author: {
    username: string;
    _id: string;
  }
    date: string;
    content: string;
  }
  
  export const mockPosts: Post[] = [
    {
      file: new File([''], 'sample-image.jpg', { type: 'image/jpeg' }),
      title: 'Beautiful Landscape',
      author: { username: 'JohnDoe', _id: '222'},
      date: 'December 11, 2023',
      content: 'Exploring nature and enjoying the scenery.',
    },
    {
      file: new File([''], 'funny-cat-video.mp4', { type: 'video/mp4' }),
      title: 'Funny Cat Video',
      author: {username: 'JaneDoe', _id: '444'},
      date: 'December 12, 2023',
      content: 'Watch this adorable cat doing funny things!',
    },
    {
      file: new File([''], 'awesome-beach.jpg', { type: 'image/jpeg' }),
      title: 'Sunset at the Beach',
      author: {username: 'AliceSmith', _id: '4583'},
      date: 'December 13, 2023',
      content: 'Enjoying a peaceful sunset by the beach.',
    },
  ];