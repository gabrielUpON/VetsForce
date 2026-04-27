import { headers } from 'next/headers';

    export async function apiMask() {
    const headersList = headers();
    const host = (await headersList).get('host');

    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

    return `${protocol}://${host}/api`;

}