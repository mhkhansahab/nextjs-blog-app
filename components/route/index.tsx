import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/app/hooks';
import Loader from '../loader';

const Route: NextPage = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const state = useAppSelector(state => state);
    const router = useRouter();

    useEffect(() => {
        const data = window?.localStorage?.getItem('user')
        if (!data) {
            if (router.pathname.includes('login') || router.pathname.includes('signup')) {
                setLoader(false);
            }else{
                router.push('/login');
            }
            
        } else {
            if (router.pathname.includes('login') || router.pathname.includes('signup')) {
                router.push('/');
            }else{
                setLoader(false);
            }
        }
    }, [state?.userData?.user])

    return (
        <>
            {
                loader
                    ?
                    <Loader />
                    :
                    children
            }
        </>
    )
}

export default Route;