import axios from 'axios';

const instance = axios.create({
  //baseURL: "http://localhost/todos/api/v1/", // when API deploy to tomcat server
  baseURL: "http://localhost:8080/api/v1/", // when API running from IDEA
  crossDomain: true,
});

export const AuthAPI = {
  async signin(data) {
    localStorage.clear();
    try {
      const response = await instance.post(
        "auth/signin",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {},
        }
      );
      localStorage.setItem("token", `Bearer ${response.data.data.token}`);
      return response.data;
    } catch (err) {
      return err.response;
    }
  },
  async signup(data) {
    try {
      const response = await instance.post("auth/signup", {
        email: data.email,
        password: data.password,
        firstname: data.firstName,
        lastname: data.lastName,
      });
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },
  async getInfoAboutMe() {
    try {
      const response = await instance.get("auth/me", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },
};

export const UsersAPI = {
  async getUsers(currentPage, size, typeOrder, orderFields, searchWord) {
    try {
      const response = await instance.get(
        `users?page=${currentPage}&size=${size}&typeOrder=${typeOrder}&orderFields=${orderFields}&search=${searchWord}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },
  async getUser(id) {
    try {
      const response = await instance.get(`users/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },
  async updateProfile(profile) {
    try {
      const response = await instance.put(
        "users",
        {
          email: profile.email,
          firstname: profile.firstName,
          lastname: profile.lastName,
          aboutMe: profile.aboutMe,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },

  async updateProfilePhoto(file) {
    try {
      let data = new FormData();
      data.append("file", file);
      const response = await instance.post("users/avatar", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },
};

export const TaskAPI = {
  async getTasks(userId, currentPage, size) {
    try {
      const response = await instance.get(
        `users/${userId}/tasks?page=${currentPage}&size=${size}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },
  async getTasksByStatus(
    userId,
    currentPage,
    size,
    status,
    typeOrder,
    orderFields,
    searchWord
  ) {
    try {
      const response = await instance.get(
        `users/${userId}/tasks?page=${currentPage}&size=${size}&status=${status}&typeOrder=${typeOrder}&orderFields=${orderFields}&search=${searchWord}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },
  async addTask({ title, description, startDate, endDate }) {
    try {
      const response = await instance.post(
        "users/tasks",
        {
          title,
          description,
          startDate,
          endDate,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },

  async deleteTask(idTask) {
    try {
      const response = await instance.delete(`users/tasks/${idTask}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },

  async updateTask(idTask, { title, description, startDate, endDate, status }) {
    try {
      const response = await instance.put(
        `users/tasks/${idTask}`,
        { title, description, startDate, endDate, status },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },
};

export const AdminAPI = {
  async getUsers(currentPage, size) {
    try {
      const response = await instance.get(
        `admin/users?page=${currentPage}&size=${size}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },
  async getReports() {
    try {
      const response = await instance.get("admin/reports", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    } catch (err) {
      return { resultCode: 1 };
    }
  },
};
