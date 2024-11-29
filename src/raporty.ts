
export const generujRaport = (daneRaportu, efektywność, priorytet) => {
    return new Promise((resolve) => {
        resolve({
        efektywność,
        priorytet,
        ...daneRaportu
    })});
}