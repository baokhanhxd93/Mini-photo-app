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
.
├── build
│   └── static
│       ├── css
│       ├── js
│       └── media
├── public
└── src
    ├── api
    ├── app
    ├── assets
    │   └── images
    ├── components
    │   ├── Banner
    │   ├── Header
    │   ├── NotFound
    │   └── RandomPhoto
    ├── constants
    ├── custom-fields
    │   ├── InputField
    │   ├── RandomPhotoField
    │   └── SelectField
    ├── features
    │   ├── Auth
    │   │   ├── components
    │   │   └── pages
    │   │       └── SignIn
    │   └── Photo
    │       ├── components
    │       │   ├── PhotoCard
    │       │   ├── PhotoForm
    │       │   └── PhotoList
    │       └── pages
    │           ├── AddEdit
    │           └── Main
    └── utils

