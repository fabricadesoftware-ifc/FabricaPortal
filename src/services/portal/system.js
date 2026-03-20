import api from "@/plugins/axios";


class SystemService {
  async getSystemStatus() {
    try {
      const response = await api.get("/system/");
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new SystemService();
