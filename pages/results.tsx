import { useState, useEffect } from 'react'
import Statistics from '@/components/Statistics'
import style from '@/styles/Results.module.css'
import { useRouter } from "next/router"
import Button from '@/components/Button'

export default function Result() {
    const Userouter = useRouter()
    const [colorP, setColorP] = useState('')


    const total = Number(Userouter.query.total)
    const corrects = Number(Userouter.query.corrects)
    const percent = Math.round((corrects / total) * 100)


    useEffect(() => {

        setColors()
       
    }, [percent])

    function setColors() {

        if (percent <= 40) {
            setColorP('#ff0707');
        } else if (percent <= 76) {
            setColorP('#ffc800');
        } else {
            setColorP('#16d116');
        }
    }

    return (
        <div className={style.results}

        >
            <h1>Resultado Final</h1>

            <div style={{ display: 'flex' }}>
                <Statistics text={'Perguntas'} value={total} 
                    colorFont='#FFF'
                />
                <Statistics text={'Certas'} value={corrects}
                    colorFont='#FFF'
                    BgColor='#9CD2A4'
                />
                <Statistics text={'Percentual'} value={percent}
                    colorFont='#FFF'
                    BgColor={colorP}
                />
            </div>
            <Button href='/' text='Tentar Novamente' />
        </div>
    )
}