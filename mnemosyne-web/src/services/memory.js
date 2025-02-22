const API_URL = "http://localhost:3000";

const getMemories = async () => {

    const response = await fetch(`${API_URL}/memories`);

    const memories = await response.json();

    return memories;

}

export default { getMemories };