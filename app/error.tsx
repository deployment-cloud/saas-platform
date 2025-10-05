'use client';

export default function Error({ error }: { error: Error }) {
  return <h1>Something went wrong: {error.message}</h1>;
}
