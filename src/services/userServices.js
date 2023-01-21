import { axiosInstance } from "./configURL";

export const userServices = {
  postLogin: (data) => {
    return axiosInstance.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  getMovieList: () => {
    return axiosInstance.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03");
  },
  getBannerList: () => {
    return axiosInstance.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getDetailFilmByID: (id) => {
    return axiosInstance.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
};
