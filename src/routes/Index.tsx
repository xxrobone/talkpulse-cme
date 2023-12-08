import Comments from '../components/Comments';
import Comment from '../components/Comments/Comment';
import Reply from '../components/Comments/Reply';

interface Reply {
  reply: string;
  username: string;
  date: string;
  upvote: number;
  downvote: number;
  id: string;
  parentCommentId: string;
}

interface Comment {
  comment: string;
  username: string;
  date: string; // Assuming the date is represented as a string for simplicity
  upvote: number;
  downvote: number;
  id: string;
  replies: Reply[];
}

const mockComments: Comment[] = [
  {
    comment: 'This is the first comment.',
    username: 'user1',
    date: '2023-01-01',
    upvote: 10,
    downvote: 2,
    id: '1',
    replies: [
      {
        reply: 'Reply to the first comment.',
        username: 'replyUser1',
        date: '2023-01-02',
        upvote: 5,
        downvote: 0,
        id: 'r1',
        parentCommentId: '1',
      },
      {
        reply: 'mocking my comment eh?.',
        username: 'replyUser2',
        date: '2023-01-03',
        upvote: 25,
        downvote: 2000,
        id: 'r2',
        parentCommentId: '1',
      },
    ],
  },
  {
    comment: 'Great article! Thanks for sharing.',
    username: 'user2',
    date: '2023-01-02',
    upvote: 15,
    downvote: 1,
    id: '2',
    replies: [],
  },
  {
    comment: 'I have a question about the topic.',
    username: 'user3',
    date: '2023-01-03',
    upvote: 8,
    downvote: 0,
    id: '3',
    replies: [],
  },
  {
    comment: 'Interesting insights. I learned a lot.',
    username: 'user4',
    date: '2023-01-04',
    upvote: 12,
    downvote: 3,
    id: '4',
    replies: [],
  },
  {
    comment: 'I disagree with some points mentioned.',
    username: 'user5',
    date: '2023-01-05',
    upvote: 5,
    downvote: 7,
    id: '5',
    replies: [],
  },
  {
    comment: 'Looking forward to more content like this!',
    username: 'user6',
    date: '2023-01-06',
    upvote: 20,
    downvote: 1,
    id: '6',
    replies: [],
  },
];

const Index = () => (
  <div>
    <Comments>
      {mockComments.map((commentData) => (
        <Comment
          key={commentData.id}
          comment={commentData.comment}
          username={commentData.username}
          date={commentData.date}
          upvote={commentData.upvote}
          downvote={commentData.downvote}
          replies={commentData.replies}
        />
      ))}
    </Comments>
  </div>
);

export default Index;
