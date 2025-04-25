import api from "@/plugins/axios";

class AreasService {
    async getAreas() {
        try {
            const response = await api.get("/areas/");
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getAreaById(id) {
        try {
            const response = await api.get(`/areas/${id}/`);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default new AreasService();