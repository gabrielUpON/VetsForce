import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { apiMask } from '@/backend/apimask';

export default async function Blog() {
    const mask = await apiMask()

    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    const res = await fetch(`${mask}/clientes/172`, {
        method: 'GET',
        headers: {
            cookie: `token=${token}`
        },
        cache: 'no-store'
    });

    if (res.status === 401) {
        redirect('/');
    }

    const clientes = await res.json();

    return (
        <div>
            <h1>Clientes</h1>

            {clientes.map((c) => (
                <div key={c.CODIGO_CLIENTE}>
                    {c.NOME_CLIENTE}
                </div>
            ))}
        </div>
    );
}