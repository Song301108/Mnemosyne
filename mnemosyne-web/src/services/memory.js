const API_URL = "http://localhost:3000";

const getMemories = async () => {

    const response = await fetch(`${API_URL}/memories`);

    const memories = await response.json();

    return memories;

}

const createMemory = async (memory) => {
    const images = memory.images; // Obtém a lista de imagens da memória
    const base64Images = []; // Array para armazenar as imagens convertidas para Base64

    for (let i = 0; i < images.length; i++) { // Percorre todas as imagens
        const base64 = await imageToBase64(images[i]); // Converte a imagem para Base64
        base64Images.push(base64); // Adiciona a imagem convertida ao array
    }

    memory.images = base64Images; // Substitui a lista de imagens pelos valores convertidos para Base64

    const response = await fetch(`${API_URL}/memories`, {
        method: "POST", // Define o método HTTP como POST
        headers: {
            "Content-Type": "application/json" // Define o cabeçalho da requisição como JSON
        },
        body: JSON.stringify(memory) // Converte o objeto da memória para JSON e envia no corpo da requisição
    });

    return response.json(); // Retorna a resposta da API convertida para JSON
}

// Função para converter uma imagem em Base64
function imageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader(); // Cria um leitor de arquivos
        reader.readAsDataURL(file); // Lê o arquivo como um Data URL (Base64)
        reader.onload = () => resolve(reader.result); // Quando a leitura for concluída, resolve a promessa com o resultado Base64
        reader.onerror = error => reject(error); // Se houver erro, rejeita a promessa
    });
}

export default { getMemories, createMemory };