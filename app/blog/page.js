import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Blog() {
    const cookieStore = await cookies(); // 🔥 aqui está o ajuste
    const token = cookieStore.get('token')?.value;

    if (!token) {
        redirect('/');
    }

    return <h1>Área protegida</h1>;
}