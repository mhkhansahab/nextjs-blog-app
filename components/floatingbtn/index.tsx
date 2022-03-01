import { NextPage } from "next";
import Image from "next/image";
import styles from './../../styles/floatingbtn.module.css';
import { useRouter } from "next/router";
import { addUser } from "../../redux/actions/user.action";
import { useAppDispatch } from "../../redux/app/hooks";

const FloatingButton: NextPage<{ path: string, bottom: number, route: string }> = ({ path, bottom, route }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    function routeHandler(route: string) {
        if (route === 'me') {
            router.push('/me')
        } else {
            window?.localStorage?.removeItem('user');
            window?.localStorage?.removeItem('token');
            dispatch(addUser({ user: null, token: null }))
        }
    }

    return (
        <div className={styles.container} style={{ bottom }} onClick={() => { routeHandler(route) }}>
            <Image src={path} height={32} width={32} alt={'Floating Image'}></Image>
        </div>
    );
}

export default FloatingButton;