'use client'
export default function taskError({error,reset}){
    return(
        <>
        <h1>{error.message}</h1>
        <button onClick={reset}>Reset</button>
        </>
    )
}