type SignUpDto = {
  name: string;
  email: string;
  courseId: string;
  password: string;
};

export async function signUp({}: SignUpDto) {}
