import style from '@/styles/Button.module.css'
import Link from 'next/link'


interface ButtonProps {
    text: string
    href?: string
    onClick?: (e: any) => void
}

export default function Button(props: ButtonProps) {

    function renderButton() {
        return (
            <button className={style.button}
                onClick={props.onClick}>
                {props.text}
            </button>
        )
    }

    return (
        props.href ? (

            <Link href={props.href}>
                {renderButton()}
            </Link>

        ) : renderButton()



    )
}