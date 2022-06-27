export interface BlogPost {
  id: number;
  title: string;
  description: string;
  text: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 0,
    title: 'First Blog Post',
    description: 'This is First blog post description',
    text: 'Some First blog post long text',
  },
  {
    id: 1,
    title: 'Second Blog Post',
    description: 'This is Second blog post description',
    text: 'Some Second blog post long text',
  },
  {
    id: 2,
    title: 'Third Blog Post',
    description: 'This is Third blog post description',
    text: 'Some Third blog post long text',
  },
  {
    id: 3,
    title: 'Fourth Blog Post',
    description: 'This is Fourth blog post description',
    text: 'Some Fourth blog post long text',
  },
];
