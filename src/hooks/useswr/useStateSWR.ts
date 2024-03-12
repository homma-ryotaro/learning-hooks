import useSWR from 'swr';

interface UserProps {
  name: string;
  age: number;
}

export const useUserSWR = (
  key: string,
  initialData: UserProps
): [UserProps, (state: UserProps) => void] => {
  const { data: state, mutate: setState } = useSWR(key, null, {
    fallbackData: initialData,
  });
  return [state as UserProps, setState];
};
