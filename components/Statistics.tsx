import style from '@/styles/Statistics.module.css'

interface StatisticsProps {
    value: number
    text: string
    subText?: string
    BgColor?: string
    colorFont?: string
}

export default function Statistics(props: StatisticsProps) {
    return (

        <div className={style.statistics}>
            <div className={style.value} style={
                {
                    backgroundColor: props.BgColor ?? '#9885F0',
                    color: props.colorFont ?? '#333'
                }}>
                    {props.value}
                    <span className={style.subText}>
                        {props.subText}
                    </span>
            </div>
                    <div className={style.text}>
                        {props.text}
                    </div>

        </div>
    )
}