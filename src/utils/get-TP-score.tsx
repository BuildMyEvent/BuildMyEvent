import { log } from "console";

export const getTalentProtocolScore = async (): Promise<number | null> => {
    try {
        const response = await fetch('https://api.talentprotocol.com/api/v2/passports/0xc1d457128dEcAE1CC092728262469Ee796F1Ac45', {
            method: 'GET',
            headers: {
                'X-API-KEY': process.env.NEXT_PUBLIC_TALENT_PROTOCOL_KEY || '',
            }
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data.passport.score)
        return data.passport.score; 
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);  
        return null; 
    }
};

