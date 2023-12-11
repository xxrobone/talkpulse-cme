export interface Post {
    file?: File;
    title: string;
    username: string;
    date: string;
    description: string;
  }
  
  export const mockPosts: Post[] = [
    {
      file: new File([''], 'sample-image.jpg', { type: 'image/jpeg' }),
      title: 'Beautiful Landscape',
      username: 'JohnDoe',
      date: 'December 11, 2023',
      description: 'Exploring nature and enjoying the scenery.',
    },
    {
      file: new File([''], 'funny-cat-video.mp4', { type: 'video/mp4' }),
      title: 'Funny Cat Video',
      username: 'JaneDoe',
      date: 'December 12, 2023',
      description: 'Watch this adorable cat doing funny things!',
    },
    {
      file: new File([''], 'awesome-beach.jpg', { type: 'image/jpeg' }),
      title: 'Sunset at the Beach',
      username: 'AliceSmith',
      date: 'December 13, 2023',
      description: 'Enjoying a peaceful sunset by the beach.',
    },
  ];