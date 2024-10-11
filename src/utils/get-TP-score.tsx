export const getTalentProtocolScore = async (): Promise<number | null> => {
    try {
        const response = await fetch('https://api.talentprotocol.com/api/v2/passports/0xc1d457128dEcAE1CC092728262469Ee796F1Ac45', {
            method: 'GET',
            headers: {
                'X-API-KEY': "d11006119e9d10a64bf89c8ac0ef63daef7f81750295a34670888de7bb39",
            }
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.passport.score; 
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);  
        return null; 
    }
};
