import style from '@/styles/Statement.module.css'


interface StatementProps{
    text: string
}

export default function Statement(props: StatementProps){
    return(
        <div className={style.statement}>
            <span className={style.text}>{props.text}</span>
        </div>
    )
}