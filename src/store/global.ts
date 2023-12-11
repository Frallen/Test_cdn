interface stateType {
    counter:number
}

export const useGlobal=definePiniaStore("global",{
    state:():stateType=>({
        counter:1
    })
})