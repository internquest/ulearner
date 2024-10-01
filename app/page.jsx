'use client'

import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();

  const handleNavigateToCourses = () => {
    router.push('/courses/videos');
  };
  handleNavigateToCourses()
  return (
    <></>

  )
};

export default App;

