import style from '@/styles/Timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimerProps {
    key: any
    duration: number
    elaspedTime: () => void

}

export default function Timer(props: TimerProps) {

    return (
        <div className={style.timer}

        >
            <CountdownCircleTimer
                duration={props.duration}
                
                size={120}
                isPlaying
                onComplete={props.elaspedTime}
                colors={['#16d116', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}

            >

                {({ remainingTime }) =>
                    <div role='timer' aria-live='assertive'>
                        {remainingTime}
                    </div>
                }



            </CountdownCircleTimer>
        </div>
    )
}