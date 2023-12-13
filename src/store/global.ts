interface stateType {
    isShow: boolean;
}

export const useGlobal = definePiniaStore("global", {
    state: (): stateType => ({
        isShow: false,
    }),
});
