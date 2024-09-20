import Input from './Input/Input';
import Button from './Button/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input />
      <hr />
      <Button />
    </main>
  );
}
