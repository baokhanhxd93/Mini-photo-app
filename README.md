# Mini project: Photo App

## Mục tiêu

Xây dựng project mini để ứng dụng kiến thức của Redux vào ReactJS.

- Đơn giản.
- Tập trung nhiều vào `Redux` và `Redux Toolkit`.
- Sử dụng `hook`.
- Sử dụng UI library: `Ant-design`.
- Học cách sử dụng form: `Formik`.
- Họ cách tổ chức API.

## Thành phần

- App đơn giản quản lý hình ảnh.
- CRUD operators.
- Gồm 2 trang: 
    + `Home`: listing + view + view.
    + `AddEdit`: dùng để tạo mới + sửa thông tin photo. 
- Chức năng:
    + Render danh sách photo yêu thích.
    + Lọc photo theo category.
    + Thêm mới photo.
    + Chỉnh sửa photo.
    + Remove photo.
    + Persist dữ liệu khi reload browser.
    + Random photo từ `picksum.photos`

# Tổ chức folder
src
|__ assets
|  |__ images
|  |__ style (global styles)
|
|__ components (shared components)
|
|__ features
  |__ Photo
    |__ components
    |  |__ PhotoList
    |  |__ PhotoCard
    |  |__ PhotoForm
    |
    |__ pages
    |  |__ MainPage
    |  |__ AddEditPage
    |__ photoSlice.js
    |__ index.js